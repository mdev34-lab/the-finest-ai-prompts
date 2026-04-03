# Security Reference

Security is not an afterthought. It is designed in from the beginning and verified throughout. This reference covers security practices for every phase of development.

---

## I. Security Philosophy

### Core Principles

1. **Defense in Depth**: Multiple layers of security controls
2. **Least Privilege**: Minimum necessary permissions
3. **Fail Secure**: Default to secure state on failure
4. **No Security by Obscurity**: Security must not rely on secrecy of implementation
5. **Input Distrust**: All external input is malicious until proven safe

### Security Mindset

Ask for every component:
- What could an attacker send?
- What could an attacker access?
- What could an attacker modify?
- What could an attacker learn?
- What happens if this fails?

---

## II. Input Validation

### The Input Trust Model

```
┌─────────────────────────────────────────────────────────────┐
│                    ALL EXTERNAL INPUT                        │
│                                                              │
│  HTTP Requests │ File Uploads │ User Input │ API Responses  │
│  Database Data │ Environment  │ Cookies    │ WebSockets     │
│  Query Params  │ Headers      │ URL Paths  │ Local Storage  │
│                                                              │
│                      ▼ VALIDATION LAYER ▼                    │
│                                                              │
│           Type │ Format │ Length │ Content │ Sanity         │
│                                                              │
│                      ▼ SANITIZATION ▼                        │
│                                                              │
│           Escape │ Encode │ Filter │ Transform              │
│                                                              │
│                      ▼ INTERNAL USE ▼                        │
└─────────────────────────────────────────────────────────────┘
```

### Validation Rules by Input Type

#### Strings

```python
# Check type
if not isinstance(value, str):
    raise TypeError("Expected string")

# Check length
MAX_NAME_LENGTH = 255
if len(value) > MAX_NAME_LENGTH:
    raise ValueError(f"String exceeds maximum length of {MAX_NAME_LENGTH}")

# Check format (use regex for patterns)
import re
if not re.match(r'^[a-zA-Z0-9_-]+$', value):
    raise ValueError("String contains invalid characters")

# Check for dangerous patterns
DANGEROUS_PATTERNS = [
    r'<script',           # XSS
    r'javascript:',       # XSS
    r'on\w+\s*=',         # Event handlers
    r'union\s+select',    # SQL injection
    r';\s*drop\s+',       # SQL injection
]
for pattern in DANGEROUS_PATTERNS:
    if re.search(pattern, value, re.IGNORECASE):
        raise ValueError("Potentially dangerous input detected")
```

#### Numbers

```python
# Check type and convert safely
try:
    value = int(value)
except (TypeError, ValueError):
    raise ValueError("Expected integer")

# Check bounds
if value < MIN_VALUE or value > MAX_VALUE:
    raise ValueError(f"Value must be between {MIN_VALUE} and {MAX_VALUE}")

# Check for special values
if math.isnan(value) or math.isinf(value):
    raise ValueError("Invalid numeric value")
```

#### Files

```python
# Check file exists and is readable
if not file or not hasattr(file, 'read'):
    raise ValueError("Invalid file upload")

# Check file size (before reading content)
MAX_FILE_SIZE = 10 * 1024 * 1024  # 10MB
file.seek(0, 2)  # Seek to end
size = file.tell()
file.seek(0)  # Reset
if size > MAX_FILE_SIZE:
    raise ValueError(f"File exceeds maximum size of {MAX_FILE_SIZE} bytes")

# Check file type by content (magic bytes), not extension
import magic
mime_type = magic.from_buffer(file.read(1024), mime=True)
file.seek(0)
ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'application/pdf']
if mime_type not in ALLOWED_MIME_TYPES:
    raise ValueError(f"File type {mime_type} not allowed")

# Scan for malware (in production)
# scan_result = antivirus.scan(file)
# if not scan_result.clean:
#     raise ValueError("File failed security scan")
```

#### JSON/API Responses

```python
# Never trust external API responses
import json
from pydantic import BaseModel, ValidationError

class ApiResponse(BaseModel):
    id: int
    name: str
    status: str

try:
    # Validate structure
    validated = ApiResponse(**response_data)
except ValidationError as e:
    raise ValueError(f"Invalid API response structure: {e}")

# Check for unexpected fields
expected_fields = {'id', 'name', 'status'}
actual_fields = set(response_data.keys())
unexpected = actual_fields - expected_fields
if unexpected:
    log.warning(f"Unexpected fields in response: {unexpected}")
```

### Validation Checklist

```
FOR EVERY INPUT:
[ ] Type checked (string, int, etc.)
[ ] Length/size bounded
[ ] Format validated (regex, pattern)
[ ] Range checked (min/max)
[ ] Null/empty handled
[ ] Dangerous patterns filtered
[ ] Encoding verified (UTF-8, etc.)
[ ] Unexpected fields rejected
```

---

## III. Authentication

### Password Storage

```python
# NEVER store plain text passwords
# NEVER use reversible encryption
# ALWAYS use bcrypt or argon2

import bcrypt

# Hashing
def hash_password(password: str) -> str:
    salt = bcrypt.gensalt(rounds=12)  # Cost factor
    return bcrypt.hashpw(password.encode('utf-8'), salt).decode('utf-8')

# Verification
def verify_password(password: str, hashed: str) -> bool:
    return bcrypt.checkpw(
        password.encode('utf-8'),
        hashed.encode('utf-8')
    )
```

### Session Management

```python
# Session tokens must be:
# - Cryptographically random
# - Sufficiently long (32+ bytes)
# - Single-use or time-limited
# - Stored securely (httpOnly cookies)

import secrets

def generate_session_token() -> str:
    return secrets.token_urlsafe(32)  # 32 bytes = 43 chars

def create_session(user_id: int) -> dict:
    return {
        'token': generate_session_token(),
        'user_id': user_id,
        'created_at': time.time(),
        'expires_at': time.time() + 3600,  # 1 hour
        'ip_address': request.remote_addr,
        'user_agent': request.user_agent.string,
    }
```

### JWT Best Practices

```python
# Use strong secrets
JWT_SECRET = os.environ['JWT_SECRET']  # 256+ bits, from env
JWT_ALGORITHM = 'HS256'

# Short expiration
JWT_EXPIRATION = 900  # 15 minutes

# Include minimal claims
def create_jwt(user_id: int) -> str:
    payload = {
        'sub': str(user_id),
        'iat': datetime.utcnow(),
        'exp': datetime.utcnow() + timedelta(seconds=JWT_EXPIRATION),
        'jti': secrets.token_urlsafe(16),  # Unique ID for revocation
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)

# Validate thoroughly
def validate_jwt(token: str) -> dict:
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        # Additional validation
        if 'sub' not in payload:
            raise ValueError("Missing subject claim")
        if payload['exp'] < time.time():
            raise ValueError("Token expired")
        return payload
    except jwt.InvalidTokenError as e:
        raise ValueError(f"Invalid token: {e}")
```

### Authentication Checklist

```
PASSWORDS:
[ ] Hashed with bcrypt/argon2 (never plain or encrypted)
[ ] Minimum complexity enforced
[ ] Common password list checked
[ ] Rate limited on failed attempts
[ ] Account lockout after N failures

SESSIONS:
[ ] Tokens cryptographically random
[ ] Tokens sufficiently long (32+ bytes)
[ ] Sessions expire (absolute and idle)
[ ] Sessions invalidated on logout
[ ] Sessions tied to user agent/IP (optional)

JWT:
[ ] Strong secret (256+ bits)
[ ] Short expiration (15-30 min)
[ ] Refresh tokens for longer sessions
[ ] Token revocation mechanism
[ ] Algorithm explicitly specified
```

---

## IV. Authorization

### Access Control Model

```
┌─────────────────────────────────────────────────────────────┐
│                      REQUEST                                 │
│                    User + Action + Resource                  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   AUTHENTICATION                             │
│                   Who is the user?                           │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   AUTHORIZATION                              │
│        Can this user perform this action on this resource?   │
│                                                              │
│   Role-Based (RBAC) │ Attribute-Based (ABAC) │ Ownership     │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                   RESOURCE ACCESS                            │
│                   Allow or Deny                              │
└─────────────────────────────────────────────────────────────┘
```

### Authorization Checks

```python
# Every protected endpoint must check authorization
# Never assume authorization from path/parameter alone

# BAD: Trusting client input
@app.route('/users/<user_id>/profile')
def get_profile(user_id):
    return get_user_profile(user_id)  # Anyone can access anyone!

# GOOD: Verifying ownership or permission
@app.route('/users/<user_id>/profile')
@require_auth
def get_profile(user_id):
    current_user = get_current_user()
    if current_user.id != int(user_id) and not current_user.is_admin:
        raise ForbiddenError("Cannot access another user's profile")
    return get_user_profile(user_id)

# BETTER: Role-based access control
def check_permission(user, action, resource):
    """Check if user has permission for action on resource."""
    for role in user.roles:
        if role.has_permission(action, resource):
            return True
    return False

@require_permission('read', 'profile')
def get_profile(user_id):
    # Authorization handled by decorator
    return get_user_profile(user_id)
```

### IDOR Prevention

```python
# Insecure Direct Object Reference prevention

# BAD: Direct use of user-provided ID
def get_document(doc_id):
    return db.query(Document).filter_by(id=doc_id).first()

# GOOD: Scope query to current user
def get_document(doc_id):
    user = get_current_user()
    return db.query(Document).filter_by(
        id=doc_id,
        user_id=user.id  # Key: limit to user's documents
    ).first()

# GOOD: Check ownership explicitly
def get_document(doc_id):
    user = get_current_user()
    doc = db.query(Document).filter_by(id=doc_id).first()
    if not doc:
        raise NotFoundError("Document not found")
    if doc.user_id != user.id and not user.is_admin:
        raise ForbiddenError("Access denied")
    return doc
```

### Authorization Checklist

```
EVERY PROTECTED ENDPOINT:
[ ] Authentication verified first
[ ] Authorization checked for specific action
[ ] Resource ownership verified
[ ] Role/permission checked if applicable
[ ] Fail with 403 (not 404) on auth failure

ACCESS PATTERNS:
[ ] No IDOR vulnerabilities
[ ] No privilege escalation paths
[ ] Admin routes check admin status
[ ] User can only access their own resources
[ ] No direct object references without checks
```

---

## V. Data Protection

### Data Classification

| Classification | Examples | Handling |
|----------------|----------|----------|
| Public | Marketing content | No restrictions |
| Internal | Internal docs | Access control |
| Confidential | PII, financial data | Encryption, audit logs |
| Restricted | Passwords, keys | Hashing, hardware security modules |

### Encryption at Rest

```python
# Encrypt sensitive data before storage
from cryptography.fernet import Fernet

class EncryptedField:
    def __init__(self, key: bytes):
        self.cipher = Fernet(key)

    def encrypt(self, plaintext: str) -> str:
        return self.cipher.encrypt(plaintext.encode()).decode()

    def decrypt(self, ciphertext: str) -> str:
        return self.cipher.decrypt(ciphertext.encode()).decode()

# Store encrypted
user.ssn = encrypted_field.encrypt(ssn)

# Decrypt on access
decrypted_ssn = encrypted_field.decrypt(user.ssn)
```

### Encryption in Transit

```
ALWAYS use TLS 1.2+ for all communications.

Checklist:
[ ] HTTPS enforced (redirect HTTP)
[ ] TLS 1.2 minimum
[ ] Strong cipher suites
[ ] HSTS header set
[ ] Certificate valid and not expired
[ ] No mixed content warnings
```

### PII Handling

```python
# Minimize PII collection
# Only collect what's necessary

# Mask in logs
def mask_email(email: str) -> str:
    """Mask email for logging: j***@example.com"""
    local, domain = email.split('@')
    masked = local[0] + '***'
    return f"{masked}@{domain}"

log.info(f"User login: {mask_email(user.email)}")

# Mask in API responses
def user_to_response(user: User) -> dict:
    return {
        'id': user.id,
        'email': mask_email(user.email),
        'name': user.name,
        # Never include: password, ssn, full card number
    }
```

### Data Retention

```markdown
## Data Retention Policy

| Data Type | Retention Period | Disposal Method |
|-----------|------------------|-----------------|
| User accounts | While active + 30 days | Anonymize |
| Authentication logs | 90 days | Secure delete |
| Personal data | While necessary | Secure delete |
| Backups | 30 days | Encryption + secure delete |
| Audit logs | 1 year | Archive + encrypt |
```

---

## VI. Common Vulnerabilities

### OWASP Top 10 Mitigation

| Vulnerability | Prevention |
|---------------|------------|
| **Injection** | Parameterized queries, input validation |
| **Broken Auth** | Strong session management, MFA |
| **Sensitive Data** | Encryption at rest and in transit |
| **XXE** | Disable external entities, use JSON |
| **Broken Access** | Authorization checks on every endpoint |
| **Security Misconfig** | Harden defaults, remove features |
| **XSS** | Output encoding, CSP headers |
| **Insecure Deserialization** | Validate and sanitize all input |
| **Known Vulnerabilities** | Dependency scanning, updates |
| **Insufficient Logging** | Log security events, alerts |

### SQL Injection Prevention

```python
# NEVER: String concatenation
query = f"SELECT * FROM users WHERE id = {user_id}"  # VULNERABLE

# NEVER: String formatting
query = "SELECT * FROM users WHERE id = %s" % user_id  # VULNERABLE

# GOOD: Parameterized queries
cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))

# GOOD: ORM with proper filtering
user = session.query(User).filter_by(id=user_id).first()
```

### XSS Prevention

```python
# Output encoding based on context
from markupsafe import escape

def safe_html(content: str) -> str:
    """Escape HTML content."""
    return escape(content)

def safe_js(content: str) -> str:
    """Encode for JavaScript context."""
    return json.dumps(content)

def safe_attr(content: str) -> str:
    """Encode for HTML attribute."""
    return content.replace('"', '&quot;').replace("'", '&#x27;')

# Content Security Policy
@app.after_request
def set_csp(response):
    response.headers['Content-Security-Policy'] = (
        "default-src 'self'; "
        "script-src 'self' https://cdn.trusted.com; "
        "style-src 'self' 'unsafe-inline'; "
        "img-src 'self' data: https:; "
        "frame-ancestors 'none';"
    )
    return response
```

### CSRF Prevention

```python
# CSRF tokens for state-changing operations
from flask_wtf.csrf import CSRFProtect

csrf = CSRFProtect(app)

# Or manually
import secrets

def generate_csrf_token():
    return secrets.token_urlsafe(32)

def validate_csrf_token(token):
    session_token = session.get('csrf_token')
    if not session_token or token != session_token:
        raise ValueError("Invalid CSRF token")
```

---

## VII. Dependency Security

### Vulnerability Scanning

```bash
# Python
pip install pip-audit
pip-audit

# Or with uv
uv audit

# Node.js
bun audit
# or
npm audit

# Fix automatically
npm audit fix
```

### Supply Chain Security

```markdown
## Dependency Vetting Checklist

Before adding a dependency:

[ ] Is it actively maintained? (commits in last year)
[ ] Does it have many users/stars?
[ ] Are there open security issues?
[ ] Does it have a security policy?
[ ] Is the license compatible?
[ ] Are dependencies minimal?

After adding:

[ ] Pin the version in package.json/requirements.txt
[ ] Run security audit
[ ] Monitor for updates
[ ] Set up dependabot/renovate
```

### Lock File Security

```
ALWAYS commit lock files:
- package-lock.json (npm)
- bun.lockb (bun)
- uv.lock (uv/pip)
- poetry.lock (poetry)

This ensures:
- Reproducible builds
- Dependency integrity
- No silent updates
```

---

## VIII. Security Headers

### Essential Headers

```python
@app.after_request
def security_headers(response):
    # Prevent clickjacking
    response.headers['X-Frame-Options'] = 'DENY'

    # Prevent MIME sniffing
    response.headers['X-Content-Type-Options'] = 'nosniff'

    # XSS protection (legacy browsers)
    response.headers['X-XSS-Protection'] = '1; mode=block'

    # HTTPS enforcement
    response.headers['Strict-Transport-Security'] = (
        'max-age=31536000; includeSubDomains; preload'
    )

    # Content Security Policy
    response.headers['Content-Security-Policy'] = (
        "default-src 'self'; "
        "script-src 'self'; "
        "style-src 'self' 'unsafe-inline'; "
        "img-src 'self' data: https:; "
        "font-src 'self'; "
        "frame-ancestors 'none'; "
        "base-uri 'self'; "
        "form-action 'self';"
    )

    # Referrer policy
    response.headers['Referrer-Policy'] = 'strict-origin-when-cross-origin'

    # Permissions policy
    response.headers['Permissions-Policy'] = (
        'geolocation=(), '
        'microphone=(), '
        'camera=(), '
        'payment=()'
    )

    return response
```

---

## IX. Security Audit Checklist

Run this before delivery:

```markdown
## Security Audit Checklist

### Input Validation
[ ] All inputs validated (type, length, format)
[ ] All inputs sanitized before use
[ ] File uploads validated (type, size, content)
[ ] API responses validated

### Authentication
[ ] Passwords properly hashed
[ ] Sessions secure (random, expiring)
[ ] JWT properly configured (if used)
[ ] Rate limiting on auth endpoints
[ ] Account lockout mechanism

### Authorization
[ ] Every endpoint checks authorization
[ ] No IDOR vulnerabilities
[ ] No privilege escalation
[ ] Admin routes protected

### Data Protection
[ ] Sensitive data encrypted at rest
[ ] All connections use HTTPS
[ ] PII minimized and masked in logs
[ ] Data retention policy implemented

### Common Vulnerabilities
[ ] No SQL injection (parameterized queries)
[ ] No XSS (output encoding)
[ ] No CSRF (tokens for state changes)
[ ] No insecure deserialization
[ ] Dependencies scanned for vulnerabilities

### Configuration
[ ] Security headers set
[ ] Error messages don't leak info
[ ] Debug mode disabled in production
[ ] Secrets in environment variables
[ ] .gitignore protects sensitive files

### Monitoring
[ ] Authentication events logged
[ ] Authorization failures logged
[ ] Input validation failures logged
[ ] Alerts configured for suspicious activity
```

---

## X. Security Testing

### Test Cases to Include

```python
# Test authentication
def test_login_with_valid_credentials():
    """Valid credentials should succeed."""
    pass

def test_login_with_invalid_password():
    """Invalid password should fail."""
    pass

def test_login_rate_limiting():
    """Should block after N failed attempts."""
    pass

# Test authorization
def test_user_cannot_access_other_user_data():
    """Users should not access others' data."""
    pass

def test_non_admin_cannot_access_admin_routes():
    """Non-admins should be denied admin access."""
    pass

# Test input validation
def test_sql_injection_prevention():
    """SQL injection attempts should fail safely."""
    malicious = "1; DROP TABLE users; --"
    # Should not execute SQL, should return error or empty

def test_xss_prevention():
    """XSS attempts should be escaped."""
    malicious = "<script>alert('xss')</script>"
    # Should be escaped in output

# Test file uploads
def test_reject_oversized_file():
    """Should reject files over size limit."""
    pass

def test_reject_invalid_file_type():
    """Should reject disallowed file types."""
    pass

# Test edge cases
def test_handle_malformed_json():
    """Should handle malformed JSON gracefully."""
    pass

def test_handle_missing_auth_token():
    """Should reject requests without auth token."""
    pass
```

### Penetration Testing Checklist

```
AUTHENTICATION:
[ ] Can bypass login?
[ ] Can enumerate users?
[ ] Can brute force passwords?
[ ] Can reset others' passwords?

AUTHORIZATION:
[ ] Can access others' resources?
[ ] Can escalate privileges?
[ ] Can access admin functions as user?

INPUT:
[ ] SQL injection works?
[ ] XSS works?
[ ] Command injection works?
[ ] Path traversal works?

DATA:
[ ] Can read sensitive data?
[ ] Can modify sensitive data?
[ ] Can access other tenants' data?

CONFIGURATION:
[ ] Default credentials work?
[ ] Debug endpoints exposed?
[ ] Sensitive URLs accessible?
```

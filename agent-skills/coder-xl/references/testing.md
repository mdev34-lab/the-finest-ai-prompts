# Testing Reference

Testing is not about checking boxes. Testing is about **proving your code works**. Before delivery, you must have evidence that every feature functions correctly under all expected conditions.

---

## I. Testing Philosophy

### The Truth About Testing

```
"Testing shows the presence of bugs, not their absence."
— Edsger W. Dijkstra

But untested code is almost certainly broken code.
```

### What Testing Proves

| Test Type | What It Proves |
|-----------|----------------|
| Unit Tests | Individual functions work in isolation |
| Integration Tests | Components work together |
| Edge Case Tests | Boundary conditions are handled |
| Error Path Tests | Failures are handled gracefully |
| End-to-End Tests | User journeys complete successfully |

### What Testing Cannot Prove

- No bugs exist
- Code is correct in all possible cases
- Code is secure
- Code is performant

**This is why you also need: code review, security analysis, performance testing.**

### Testing Mandate

```
MANDATORY:
- Every function has unit tests
- Every API endpoint has integration tests
- Every edge case identified has a test
- Every error path has a test
- All tests pass before delivery

FORBIDDEN:
- "It should work" without running tests
- Skipping tests "because it's simple"
- Commenting out failing tests
- Merging with failing tests
- Delivering without test evidence
```

---

## II. Test Structure

### Test Organization

```
project_root/
├── src/
│   └── package_name/
│       ├── __init__.py
│       ├── module_a.py
│       └── module_b.py
├── tests/
│   ├── __init__.py
│   ├── conftest.py           # Shared fixtures (pytest)
│   ├── test_module_a.py      # Tests for module_a
│   ├── test_module_b.py      # Tests for module_b
│   ├── integration/
│   │   ├── test_api.py
│   │   └── test_database.py
│   └── fixtures/
│       └── test_data.json
└── pyproject.toml
```

### Test File Naming

```
Python: test_*.py or *_test.py
JavaScript: *.test.js or *.spec.js

Pattern: test_{what}_{condition}_{expected}

Examples:
- test_login_valid_credentials_succeeds.py
- test_login_invalid_password_fails.py
- test_login_rate_limited_after_5_failures.py
```

### Test Function Structure

```python
def test_{what}_{condition}_{expected}():
    """
    Test that {what} when {condition} results in {expected}.

    Given: {setup description}
    When: {action description}
    Then: {assertion description}
    """
    # Arrange (Given)
    input_data = "test"

    # Act (When)
    result = function_under_test(input_data)

    # Assert (Then)
    assert result == expected_value
```

---

## III. Unit Testing

### What to Unit Test

```
TEST:
- Pure functions (same input → same output)
- Business logic and calculations
- Data transformations
- Validation functions
- Utility functions

DO NOT TEST:
- Third-party libraries (they test their own code)
- Framework internals
- Simple getters/setters
- Configuration loading (integration test instead)
```

### Unit Test Examples

```python
import pytest
from myapp.calculators import calculate_discount, validate_email, process_payment

# Test pure function
class TestCalculateDiscount:
    """Tests for calculate_discount function."""

    def test_valid_percentage_returns_correct_amount(self):
        """Valid percentage should return correct discount."""
        # Arrange
        price = 100.0
        percentage = 20.0

        # Act
        discount = calculate_discount(price, percentage)

        # Assert
        assert discount == 20.0

    def test_zero_percentage_returns_zero(self):
        """Zero percentage should return zero discount."""
        discount = calculate_discount(100.0, 0.0)
        assert discount == 0.0

    def test_hundred_percentage_returns_full_price(self):
        """100% should return full price as discount."""
        discount = calculate_discount(100.0, 100.0)
        assert discount == 100.0

    def test_negative_percentage_raises_error(self):
        """Negative percentage should raise ValueError."""
        with pytest.raises(ValueError, match="negative"):
            calculate_discount(100.0, -10.0)

    def test_percentage_over_100_raises_error(self):
        """Percentage over 100 should raise ValueError."""
        with pytest.raises(ValueError, match="cannot exceed 100"):
            calculate_discount(100.0, 150.0)

    def test_negative_price_raises_error(self):
        """Negative price should raise ValueError."""
        with pytest.raises(ValueError, match="negative"):
            calculate_discount(-50.0, 10.0)

    def test_zero_price_returns_zero_discount(self):
        """Zero price should return zero discount."""
        discount = calculate_discount(0.0, 20.0)
        assert discount == 0.0


# Test validation function
class TestValidateEmail:
    """Tests for validate_email function."""

    @pytest.mark.parametrize("email,expected", [
        ("user@example.com", True),
        ("user.name@example.com", True),
        ("user+tag@example.co.uk", True),
        ("invalid", False),
        ("@example.com", False),
        ("user@", False),
        ("user @example.com", False),
        ("", False),
        (None, False),
    ])
    def test_email_validation(self, email, expected):
        """Various email formats should validate correctly."""
        result = validate_email(email)
        assert result == expected


# Test with mocked dependency
class TestProcessPayment:
    """Tests for process_payment function."""

    def test_successful_payment_returns_receipt(self, mock_payment_gateway):
        """Successful payment should return receipt."""
        # Arrange
        mock_payment_gateway.charge.return_value = {"id": "txn_123", "status": "success"}
        amount = 100.0
        token = "card_token_xyz"

        # Act
        result = process_payment(amount, token, gateway=mock_payment_gateway)

        # Assert
        assert result["status"] == "success"
        assert result["transaction_id"] == "txn_123"
        mock_payment_gateway.charge.assert_called_once_with(amount, token)

    def test_failed_payment_raises_error(self, mock_payment_gateway):
        """Failed payment should raise PaymentError."""
        mock_payment_gateway.charge.side_effect = Exception("Card declined")

        with pytest.raises(PaymentError, match="declined"):
            process_payment(100.0, "card_token", gateway=mock_payment_gateway)
```

### Mocking External Dependencies

```python
import pytest
from unittest.mock import Mock, patch, MagicMock

# Fixture for mocked dependency
@pytest.fixture
def mock_database():
    """Provide a mocked database connection."""
    db = Mock()
    db.query.return_value = [{"id": 1, "name": "Test"}]
    return db

# Fixture for mocked external API
@pytest.fixture
def mock_api_client():
    """Provide a mocked API client."""
    client = Mock()
    client.get.return_value.json.return_value = {"data": "test"}
    return client

# Using fixtures in tests
def test_fetch_user_data(mock_database):
    """Should fetch user data from database."""
    result = fetch_user(1, db=mock_database)
    assert result["name"] == "Test"
    mock_database.query.assert_called_once()

# Patching environment
@patch.dict('os.environ', {'API_KEY': 'test_key'})
def test_with_mocked_env():
    """Test with mocked environment variable."""
    pass

# Patching time
@patch('time.time', return_value=1234567890.0)
def test_with_mocked_time(mock_time):
    """Test with fixed timestamp."""
    pass
```

---

## IV. Integration Testing

### What to Integration Test

```
TEST:
- API endpoints (request → response)
- Database operations (CRUD)
- External service integrations
- Authentication flows
- Authorization checks
- File operations
- Email/notification sending
```

### Integration Test Examples

```python
import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from myapp.main import app
from myapp.database import Base, get_db

# Test database setup
SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"

@pytest.fixture(scope="function")
def test_db():
    """Create a fresh test database for each test."""
    engine = create_engine(SQLALCHEMY_DATABASE_URL)
    Base.metadata.create_all(bind=engine)
    TestingSessionLocal = sessionmaker(bind=engine)

    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.close()
        Base.metadata.drop_all(bind=engine)

@pytest.fixture
def client(test_db):
    """Provide a test client with test database."""
    def override_get_db():
        yield test_db

    app.dependency_overrides[get_db] = override_get_db
    with TestClient(app) as c:
        yield c
    app.dependency_overrides.clear()


# API endpoint tests
class TestUsersAPI:
    """Integration tests for users API."""

    def test_create_user_returns_201(self, client):
        """Creating user should return 201 Created."""
        response = client.post("/api/users", json={
            "email": "test@example.com",
            "password": "SecurePass123!",
            "name": "Test User"
        })
        assert response.status_code == 201
        data = response.json()
        assert data["email"] == "test@example.com"
        assert "password" not in data  # Password should not be returned

    def test_create_duplicate_user_returns_409(self, client):
        """Creating duplicate user should return 409 Conflict."""
        # Create first user
        client.post("/api/users", json={
            "email": "test@example.com",
            "password": "SecurePass123!",
            "name": "Test User"
        })

        # Try to create duplicate
        response = client.post("/api/users", json={
            "email": "test@example.com",
            "password": "OtherPass456!",
            "name": "Other User"
        })
        assert response.status_code == 409

    def test_get_user_requires_authentication(self, client):
        """Getting user without auth should return 401."""
        response = client.get("/api/users/1")
        assert response.status_code == 401

    def test_get_user_with_valid_auth_returns_200(self, client, auth_header):
        """Getting user with valid auth should return user data."""
        # Create user first
        create_response = client.post("/api/users", json={
            "email": "test@example.com",
            "password": "SecurePass123!",
            "name": "Test User"
        })
        user_id = create_response.json()["id"]

        # Get user with auth
        response = client.get(f"/api/users/{user_id}", headers=auth_header)
        assert response.status_code == 200
        assert response.json()["email"] == "test@example.com"


# Database operation tests
class TestUserRepository:
    """Integration tests for user repository."""

    def test_create_user_stores_in_database(self, test_db):
        """Created user should be persisted."""
        repo = UserRepository(test_db)

        user = repo.create(
            email="test@example.com",
            password_hash="hashed_password",
            name="Test User"
        )

        assert user.id is not None
        assert user.email == "test@example.com"

        # Verify it's actually in the database
        found = repo.get_by_email("test@example.com")
        assert found is not None
        assert found.id == user.id

    def test_update_user_persists_changes(self, test_db):
        """Updated user should have new values."""
        repo = UserRepository(test_db)
        user = repo.create(email="test@example.com", name="Old Name")

        updated = repo.update(user.id, name="New Name")

        assert updated.name == "New Name"

        # Verify persistence
        found = repo.get_by_id(user.id)
        assert found.name == "New Name"
```

---

## V. Edge Case Testing

### Edge Case Categories

```python
# Generate tests for each edge case category

class TestEdgeCases:
    """Tests for boundary and edge conditions."""

    # === INPUT EDGE CASES ===

    def test_empty_input(self):
        """Empty input should be handled gracefully."""
        pass

    def test_null_input(self):
        """Null/None input should raise appropriate error."""
        pass

    def test_maximum_length_input(self):
        """Maximum length input should be accepted."""
        pass

    def test_exceeds_maximum_length(self):
        """Input exceeding max should be rejected."""
        pass

    def test_minimum_value(self):
        """Minimum valid value should be accepted."""
        pass

    def test_maximum_value(self):
        """Maximum valid value should be accepted."""
        pass

    def test_negative_value(self):
        """Negative values should be handled."""
        pass

    def test_zero_value(self):
        """Zero should be handled correctly."""
        pass

    def test_special_characters(self):
        """Special characters should be handled."""
        pass

    def test_unicode_input(self):
        """Unicode characters should be handled."""
        pass

    # === STATE EDGE CASES ===

    def test_operation_before_initialization(self):
        """Should fail gracefully if not initialized."""
        pass

    def test_operation_after_cleanup(self):
        """Should fail gracefully after cleanup."""
        pass

    def test_duplicate_operation(self):
        """Duplicate operations should be idempotent."""
        pass

    def test_concurrent_operations(self):
        """Should handle concurrent access."""
        pass

    # === ERROR EDGE CASES ===

    def test_dependency_unavailable(self):
        """Should handle dependency failure gracefully."""
        pass

    def test_timeout_condition(self):
        """Should handle timeout correctly."""
        pass

    def test_partial_failure(self):
        """Should handle partial failure with rollback."""
        pass

    def test_cascading_failure(self):
        """Should not propagate failures incorrectly."""
        pass
```

### Parameterized Edge Case Tests

```python
import pytest

class TestStringInputEdgeCases:
    """Edge cases for string inputs."""

    @pytest.mark.parametrize("input_value,expected_error", [
        ("", "empty"),
        (None, "required"),
        ("   ", "whitespace"),
        ("a" * 1001, "too long"),
        ("<script>alert('xss')</script>", "invalid characters"),
        ("user\x00name", "null byte"),
        ("user\u000Aname", "newline"),
        ("😀🎉🔥", None),  # Emoji should be valid
    ])
    def test_string_edge_cases(self, input_value, expected_error):
        """Various string edge cases should be handled."""
        if expected_error:
            with pytest.raises(ValueError, match=expected_error):
                validate_username(input_value)
        else:
            # Should not raise
            result = validate_username(input_value)
            assert result is not None


class TestNumericEdgeCases:
    """Edge cases for numeric inputs."""

    @pytest.mark.parametrize("value", [
        0,
        -1,
        -999999999,
        999999999,
        0.000001,
        1.7976931348623157e+308,  # Max float
        -1.7976931348623157e+308,  # Min float
        float('inf'),
        float('-inf'),
        float('nan'),
    ])
    def test_numeric_edge_cases(self, value):
        """Various numeric edge cases should be handled."""
        # Should either work or raise a specific error
        try:
            result = process_number(value)
            assert not math.isnan(result)  # Should not return NaN
        except ValueError:
            pass  # Expected for some edge cases
```

---

## VI. Error Path Testing

### Error Path Test Matrix

```python
class TestErrorPaths:
    """Tests for error handling paths."""

    # === VALIDATION ERRORS ===

    def test_missing_required_field_returns_400(self, client):
        """Missing required field should return 400 with details."""
        response = client.post("/api/users", json={})
        assert response.status_code == 400
        assert "required" in response.json()["error"].lower()

    def test_invalid_field_type_returns_400(self, client):
        """Invalid field type should return 400 with details."""
        response = client.post("/api/users", json={
            "email": "test@example.com",
            "age": "not_a_number"
        })
        assert response.status_code == 400

    # === AUTHENTICATION ERRORS ===

    def test_invalid_credentials_returns_401(self, client):
        """Invalid credentials should return 401."""
        response = client.post("/api/auth/login", json={
            "email": "test@example.com",
            "password": "wrong_password"
        })
        assert response.status_code == 401
        assert "token" not in response.json()

    def test_expired_token_returns_401(self, client, expired_token):
        """Expired token should return 401."""
        response = client.get("/api/users/me", headers={
            "Authorization": f"Bearer {expired_token}"
        })
        assert response.status_code == 401

    def test_malformed_token_returns_401(self, client):
        """Malformed token should return 401."""
        response = client.get("/api/users/me", headers={
            "Authorization": "Bearer not_a_valid_token"
        })
        assert response.status_code == 401

    # === AUTHORIZATION ERRORS ===

    def test_accessing_other_user_data_returns_403(self, client, user_token):
        """Accessing another user's data should return 403."""
        # Create user A and user B
        # Login as user A
        # Try to access user B's data
        response = client.get("/api/users/999", headers={
            "Authorization": f"Bearer {user_token}"
        })
        assert response.status_code == 403

    # === NOT FOUND ERRORS ===

    def test_nonexistent_resource_returns_404(self, client, auth_header):
        """Accessing nonexistent resource should return 404."""
        response = client.get("/api/users/999999", headers=auth_header)
        assert response.status_code == 404

    # === CONFLICT ERRORS ===

    def test_duplicate_unique_field_returns_409(self, client):
        """Creating duplicate unique field should return 409."""
        # Create first
        client.post("/api/users", json={"email": "test@example.com"})
        # Try to create duplicate
        response = client.post("/api/users", json={"email": "test@example.com"})
        assert response.status_code == 409

    # === RATE LIMITING ===

    def test_rate_limit_returns_429(self, client):
        """Exceeding rate limit should return 429."""
        for _ in range(100):
            client.get("/api/health")

        response = client.get("/api/health")
        assert response.status_code == 429

    # === SERVER ERRORS ===

    def test_database_error_returns_500_not_exposed(self, client, broken_db):
        """Database errors should return 500 without exposing details."""
        response = client.get("/api/users")
        assert response.status_code == 500
        # Should NOT expose database error details
        assert "sql" not in response.json().get("error", "").lower()
        assert "connection" not in response.json().get("error", "").lower()
```

---

## VII. End-to-End Testing

### User Journey Tests

```python
class TestUserJourney:
    """End-to-end tests for complete user journeys."""

    def test_complete_registration_and_login_flow(self, client):
        """User should be able to register and login."""
        # Step 1: Register
        register_response = client.post("/api/auth/register", json={
            "email": "newuser@example.com",
            "password": "SecurePass123!",
            "name": "New User"
        })
        assert register_response.status_code == 201

        # Step 2: Verify email (if applicable)
        # ...

        # Step 3: Login
        login_response = client.post("/api/auth/login", json={
            "email": "newuser@example.com",
            "password": "SecurePass123!"
        })
        assert login_response.status_code == 200
        token = login_response.json()["token"]
        assert token is not None

        # Step 4: Access protected resource
        profile_response = client.get("/api/users/me", headers={
            "Authorization": f"Bearer {token}"
        })
        assert profile_response.status_code == 200
        assert profile_response.json()["email"] == "newuser@example.com"

    def test_complete_order_flow(self, client, product, user_token):
        """User should be able to place and complete an order."""
        headers = {"Authorization": f"Bearer {user_token}"}

        # Step 1: Add to cart
        add_response = client.post("/api/cart/items", headers=headers, json={
            "product_id": product.id,
            "quantity": 2
        })
        assert add_response.status_code == 200

        # Step 2: View cart
        cart_response = client.get("/api/cart", headers=headers)
        assert cart_response.status_code == 200
        assert len(cart_response.json()["items"]) == 1

        # Step 3: Checkout
        checkout_response = client.post("/api/orders", headers=headers, json={
            "shipping_address": "123 Main St",
            "payment_method": "card_token_xyz"
        })
        assert checkout_response.status_code == 201
        order_id = checkout_response.json()["id"]

        # Step 4: Verify order
        order_response = client.get(f"/api/orders/{order_id}", headers=headers)
        assert order_response.status_code == 200
        assert order_response.json()["status"] == "pending"

        # Step 5: Verify cart is cleared
        cart_response = client.get("/api/cart", headers=headers)
        assert len(cart_response.json()["items"]) == 0
```

---

## VIII. Test Coverage

### Coverage Requirements

```
COVERAGE TARGETS:
- Business Logic: 90%+ required
- API Endpoints: 100% required
- Error Handlers: 100% required
- Utility Functions: 90%+ required
- Data Models: 80%+ recommended

ALLOWED EXCLUSIONS:
- Generated code
- Third-party libraries
- Framework internals
- Simple data classes
- Main entry points (tested via integration)
```

### Running Coverage

```bash
# Python with pytest
uv run pytest --cov=src --cov-report=term-missing --cov-report=html

# Node.js with vitest
bun test --coverage

# Node.js with jest
npx jest --coverage --coverageThreshold='{"global":{"branches":80,"functions":80,"lines":80}}'
```

### Coverage Report Analysis

```
# Look for:
- Lines marked as "missed"
- Branches not taken
- Functions not called

# Warning signs:
- Error handling code not covered
- Edge case branches missed
- Recent code additions with low coverage
```

---

## IX. Manual Verification

### Why Manual Testing Still Matters

Automated tests verify what you expected. Manual testing finds what you didn't expect.

### Manual Verification Checklist

```markdown
## Manual Verification Checklist

### Basic Functionality
[ ] Feature works as described in requirements
[ ] UI renders correctly (if applicable)
[ ] All buttons/links work
[ ] Forms submit successfully
[ ] Data persists correctly

### Error States
[ ] Error messages are clear and helpful
[ ] Validation errors appear immediately
[ ] Network errors are handled gracefully
[ ] Timeout errors are handled gracefully

### User Experience
[ ] Loading states are shown
[ ] Success feedback is provided
[ ] Navigation flows make sense
[ ] Back/forward browser buttons work

### Cross-Environment
[ ] Works in all required browsers
[ ] Works on mobile (if applicable)
[ ] Works with slow network
[ ] Works with JavaScript disabled (if required)

### Security
[ ] Cannot access unauthorized resources
[ ] Session timeout works
[ ] Logout clears session
[ ] Sensitive data is masked
```

### Verification Commands

```bash
# Start the application
uv run python -m myapp.main
# OR
bun run dev

# In another terminal, verify endpoints
curl http://localhost:3000/api/health
curl -X POST http://localhost:3000/api/users -d '{"email":"test@example.com"}'

# Test with realistic data
python scripts/seed_test_data.py
bun run test:e2e
```

---

## X. Testing Anti-Patterns

### Anti-Patterns to Avoid

```python
# ❌ BAD: Test that doesn't test anything
def test_something():
    function()  # No assertions!

# ❌ BAD: Testing implementation details
def test_internal_function():
    obj = MyClass()
    assert obj._private_variable == 5  # Don't test private members

# ❌ BAD: Over-mocking
def test_with_too_many_mocks():
    mock_a = Mock()
    mock_b = Mock()
    mock_c = Mock()
    # If you're mocking everything, it's not an integration test

# ❌ BAD: Flaky test
def test_time_dependent():
    result = get_current_time()  # Different every run!
    assert result == "12:00"  # Will fail at other times

# ❌ BAD: Test that depends on external state
def test_database():
    # Assumes database has specific data
    user = get_user(1)  # What if user 1 doesn't exist?
    assert user.name == "Test"

# ❌ BAD: Catching and hiding errors
def test_something():
    try:
        result = function()
        assert result == expected
    except Exception:
        pass  # Hides failures!

# ❌ BAD: Test with multiple assertions (multiple responsibilities)
def test_user():
    user = create_user()
    assert user.id is not None
    assert user.email is not None
    assert user.name is not None
    # If first fails, others don't run
```

### Correct Patterns

```python
# ✅ GOOD: Clear test with single responsibility
def test_create_user_returns_user_with_id():
    """Created user should have an ID."""
    user = create_user(email="test@example.com", name="Test")
    assert user.id is not None

def test_create_user_returns_user_with_email():
    """Created user should have the provided email."""
    user = create_user(email="test@example.com", name="Test")
    assert user.email == "test@example.com"

# ✅ GOOD: Deterministic test
def test_time_dependent(frozen_time):
    """Time should be frozen for testing."""
    with frozen_time("2024-01-01 12:00:00"):
        result = get_current_time()
        assert result == "12:00"

# ✅ GOOD: Isolated test with fixtures
def test_database(test_db):
    """User lookup should work with test database."""
    # Fixture sets up known state
    user = get_user(1, db=test_db)
    assert user.name == "Test"

# ✅ GOOD: Let errors propagate
def test_something():
    """Function should return expected result."""
    result = function()  # Let exceptions bubble up
    assert result == expected
```

---

## XI. Test Execution Protocol

### Before Every Commit

```bash
# Run all tests
uv run pytest
# OR
bun test

# If tests fail:
# 1. DO NOT COMMIT
# 2. Fix the failing tests
# 3. Re-run tests
# 4. Only commit when all pass
```

### Before Delivery

```bash
# 1. Run full test suite with coverage
uv run pytest --cov=src --cov-report=html

# 2. Check coverage meets thresholds
# Open htmlcov/index.html and verify

# 3. Run linters
uv run ruff check
uv run ruff format --check

# 4. Run type checking (if applicable)
uv run mypy src

# 5. Manual verification
# Start app and verify key flows manually

# 6. Document results
# Record: tests passed, coverage %, manual verification results
```

### Test Report Template

```markdown
## Test Report: {Feature/Component}

**Date**: {date}
**Branch**: {branch}

### Automated Tests

| Test Suite | Tests | Passed | Failed | Coverage |
|------------|-------|--------|--------|----------|
| Unit Tests | 45 | 45 | 0 | 92% |
| Integration | 12 | 12 | 0 | 88% |
| E2E | 5 | 5 | 0 | N/A |

### Failed Tests
None

### Coverage Gaps
- src/utils/formatting.py:78-82 (error handling branch)

### Manual Verification

| Feature | Status | Notes |
|---------|--------|-------|
| User registration | ✅ Pass | Verified complete flow |
| Login | ✅ Pass | Works with valid credentials |
| Error handling | ✅ Pass | Clear error messages |

### Issues Found During Testing
1. None

### Sign-off
- [ ] All automated tests pass
- [ ] Coverage meets threshold (90%+)
- [ ] Manual verification complete
- [ ] No critical issues remaining
```

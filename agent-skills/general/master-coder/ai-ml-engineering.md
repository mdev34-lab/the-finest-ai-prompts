# AI/ML Engineering

## RAG Systems

- **Chunking**: split documents by semantic boundary (paragraph, section), not fixed size
- **Embeddings**: choose model by language + domain (code: CodeEmbed, multilingual: multilingual-e5)
- **Vector DB**: pgvector for simplicity, Qdrant/Milvus for scale
- **Retrieval**: hybrid search (dense + sparse BM25) outperforms either alone
- **Reranking**: cross-encoder reranker after initial retrieval improves precision
- **Evaluation**: answer relevancy, faithfulness, context relevancy metrics

## Model Deployment

- **Quantization**: GGUF Q4_K_M for local inference (good speed/quality tradeoff)
- **Batching**: group inference requests for GPU efficiency
- **Caching**: cache embeddings and LLM responses for repeated queries
- **Streaming**: SSE for real-time token delivery to clients

## Prompt Engineering

- **System prompts as specs**: Role → Constraints → Reasoning → Examples
- **Test suites**: automated evals for every prompt change (assertions on output format, content)
- **Versioning**: semver for prompts (1.0.0 → 1.0.1 for bug fix, 1.1.0 for new capability)
- **Injection defense**: never concatenate user input into system prompts; use delimiters and instruction hierarchy
- **Cross-model portability**: avoid model-specific syntax; test on target models

## MLOps

- **Experiment tracking**: MLflow or Weights & Biases for metrics, artifacts, params
- **Feature stores**: Feast for online/offline feature serving
- **Drift monitoring**: statistical tests on input distributions and prediction distributions
- **Model registry**: version models, track lineage from data → training → deployment

## Evaluation Framework

- **LLM-as-judge**: use a stronger model to evaluate weaker model outputs
- **Human evaluation**: spot-check 5-10% of outputs, calibrate automated metrics
- **A/B testing**: route traffic to compare model versions in production
- **Metrics**: latency p50/p95/p99, cost per 1K tokens, user satisfaction scores

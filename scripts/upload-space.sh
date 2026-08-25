#!/usr/bin/env bash
# Upload this showcase to the Hugging Face Space.
# Usage:
#   python3 -m pip install -U huggingface_hub
#   python3 -m huggingface_hub.cli.hf auth login
#   bash scripts/upload-space.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

HF=(python3 -m huggingface_hub.cli.hf)
if command -v hf >/dev/null 2>&1; then
  HF=(hf)
fi

"${HF[@]}" auth whoami >/dev/null

"${HF[@]}" upload HeisenbergLupenix/SuccessFactors_MCP . --type space \
  --exclude "node_modules/**" \
  --exclude "dist/**" \
  --exclude "agent-tools/**" \
  --exclude ".git/**" \
  --delete "style.css" \
  --commit-message "feat: navy/cyan SuccessFactors MCP showcase landing"

echo "Pushed → https://huggingface.co/spaces/HeisenbergLupenix/SuccessFactors_MCP"

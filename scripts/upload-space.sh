#!/usr/bin/env bash
# Upload this showcase to the Hugging Face Space.
# Usage:
#   python3 -m pip install -U huggingface_hub
#   unset HF_TOKEN HUGGING_FACE_HUB_TOKEN
#   python3 -m huggingface_hub.cli.hf auth login
#   bash scripts/upload-space.sh
set -euo pipefail

# Invalid HF_TOKEN / HUGGING_FACE_HUB_TOKEN values override `hf auth login`.
unset HF_TOKEN HUGGING_FACE_HUB_TOKEN

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

HF=(python3 -m huggingface_hub.cli.hf)
if command -v hf >/dev/null 2>&1; then
  HF=(hf)
fi

"${HF[@]}" auth whoami >/dev/null

npm run build

STAGE="$(mktemp -d)"
cleanup() { rm -rf "$STAGE"; }
trap cleanup EXIT

# Stage dist + README so index.html is at the Space root.
cp -a dist/. "$STAGE/"
cp README.md "$STAGE/README.md"

# Drop leftover files from earlier Space layouts (static CSS landing).
if [[ -f "$STAGE/style.css" ]]; then
  rm -f "$STAGE/style.css"
fi

"${HF[@]}" upload HeisenbergLupenix/SuccessFactors_MCP "$STAGE" --type space \
  --delete "style.css" \
  --commit-message "feat: static showcase with prebuilt index.html at Space root"

echo "Pushed → https://huggingface.co/spaces/HeisenbergLupenix/SuccessFactors_MCP"

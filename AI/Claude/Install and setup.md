Install: curl -fsSL https://claude.ai/install.sh | sh

Setup setting.json :
- ~/.claude/settings.json ( open editor code )

- ubah isi file nya
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://claude-local.wibudev.com" / <domain yang di gunakan> ,
    "ANTHROPIC_API_KEY": <token anda>,
    "ANTHROPIC_MODEL": "claude-sonnet-4-6 / <model yang di gunakan"
  }
} 

Setup memory:
npx claude-mem install

#!/usr/bin/env bash
set -euo pipefail

if command -v brew >/dev/null 2>&1 && brew list --versions ruby@3.3 >/dev/null 2>&1; then
  ruby33_prefix="$(brew --prefix ruby@3.3)"
  export PATH="${ruby33_prefix}/bin:$(brew --prefix)/lib/ruby/gems/3.3.0/bin:${PATH}"
fi

bundle exec jekyll serve --livereload --host 127.0.0.1 --port 4000

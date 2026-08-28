#!/usr/bin/env bash
# Publie un article : bascule draft:false et met pubDate au jour même,
# dans les DEUX langues, pour ne jamais en oublier une.
#   ./scripts/publish-article.sh nobody-came
set -euo pipefail
slug="${1:?usage: publish-article.sh <slug>}"
today=$(date +%F)
found=0
for f in "src/content/writing/$slug.md" "src/content/writing/$slug-fr.md" \
         "src/content/work/$slug.md" "src/content/work/$slug-fr.md"; do
  [ -f "$f" ] || continue
  perl -0pi -e "s/^draft: true$/draft: false/m; s/^pubDate: .*$/pubDate: $today/m" "$f"
  echo "  publié  $f"
  found=1
done
[ "$found" = 1 ] || { echo "slug introuvable : $slug"; exit 1; }
echo
echo "Vérifie, puis pousse :"
echo "  pnpm build && git add -A && git commit -m 'Publish: $slug' && git pushboth"

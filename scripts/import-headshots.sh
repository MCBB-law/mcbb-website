#!/bin/bash
# One-time job: copies each lawyer's headshot from the old Squarespace site into
# public/people/ and points their bio at the local copy, so the new site no longer
# depends on Squarespace.
#
# Run it on your Mac, in Terminal:
#   cd ~/mcbb-website && bash scripts/import-headshots.sh
# Then open GitHub Desktop, commit the changes, and click "Push origin".
# Safe to run again: bios that already use a local photo are skipped.
set -e
cd "$(dirname "$0")/.."
mkdir -p public/people
for f in src/content/people/*.md; do
  slug=$(basename "$f" .md)
  url=$(sed -n 's/^photo: \(https:\/\/images\.squarespace-cdn\.com.*\)$/\1/p' "$f")
  if [ -z "$url" ]; then echo "skip     $slug"; continue; fi
  tmp=$(mktemp)
  curl -fsSL "$url" -o "$tmp"
  sips -s format jpeg -s formatOptions 82 --resampleWidth 600 "$tmp" --out "public/people/$slug.jpg" >/dev/null
  rm -f "$tmp"
  sed -i '' "s#^photo: https://images\.squarespace-cdn\.com.*#photo: /people/$slug.jpg#" "$f"
  echo "imported $slug"
done
curl -fsSL "https://images.squarespace-cdn.com/content/v1/6142ba45fe44d242d0d23a67/fc1a1a2f-99de-490d-99ad-3568c096b3f4/mcbb-stacked.png" \
  -o public/logo-mcbb-stacked.png && echo "imported logo" || echo "logo download failed"
echo
echo "Done. Open GitHub Desktop, commit the changes, and click Push origin."

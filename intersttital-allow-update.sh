#!/bin/bash -eux
new_hash=$1
echo "Updating hash to: $1"
cat interstitial-allow.json \
  | jq ".allowed[.allowed | length] |= . + \"$new_hash\"" -cM \
    > new-interstitial-allow.json
rm interstitial-allow.json
mv new-interstitial-allow.json interstitial-allow.json
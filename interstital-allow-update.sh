#!/bin/bash -eux
new_hash=$1
echo "Updating hash to: $1"
cat interstitial-allow.json \
  | jq ".allowedIPFS[.allowedIPFS | length] |= . + \"$new_hash\"" -cM \
    > new-interstitial-allow.json
jq . new-interstitial-allow.json > interstitial-allow.json
rm new-interstitial-allow.json
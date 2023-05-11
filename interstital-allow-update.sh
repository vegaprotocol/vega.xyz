#!/bin/bash -eux
new_hash=$1
echo "Updating hash to: $1"
cat interstitial-allow.json \
  | jq ".allowedIPFS[.allowedIPFS | length] |= . + \"$new_hash\"" -cM \
    > new-interstitial-allow.json
jq . new-interstitial-allow.json > interstitial-allow.json
rm new-interstitial-allow.json
converted_hash=$(ipfs cid format -v 1 -b base32 $new_hash)
sed -i "s|to = \"/external-link/?url=\"|to = \"/external-link/?url=$converted_hash\"|g" netlify.toml

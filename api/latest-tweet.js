const fetch = require('node-fetch')
global.fetch = fetch
const Twitter = require('twitter-v2')
import { kv } from '@vercel/kv'

exports.default = async (req, res) => {
  const client = new Twitter({
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_API_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  })

  let cachedData = await kv.get('latest-tweet-cache')
  let isCacheExpired = true

  if (cachedData) {
    const currentTime = Date.now()
    const ONE_HOUR_IN_MS = 60 * 60 * 1000

    if (currentTime - cachedData.timestamp < ONE_HOUR_IN_MS) {
      isCacheExpired = false
    }
  }

  if (!cachedData || isCacheExpired) {
    const { data, includes } = await client.get(
      `users/956831071982800896/tweets`,
      {
        expansions: ['attachments.media_keys'],
        exclude: ['replies', 'retweets'],
        tweet: {
          fields: [
            'id',
            'created_at',
            'text,author_id',
            'in_reply_to_user_id',
            'referenced_tweets',
            'attachments',
            'withheld',
            'geo',
            'entities',
            'public_metrics',
            'possibly_sensitive',
            'source',
            'lang',
            'context_annotations',
            'conversation_id',
            'reply_settings',
          ],
        },
        media: {
          fields: [
            'media_key',
            'duration_ms',
            'height',
            'preview_image_url',
            'type',
            'url',
            'width',
            'public_metrics',
            'non_public_metrics',
            'organic_metrics',
            'promoted_metrics',
            'alt_text',
          ],
        },
      }
    )

    const tweetMediaKey = data[0]?.attachments?.media_keys[0]

    const associatedMedia = tweetMediaKey
      ? includes?.media.find((media) => media.media_key === tweetMediaKey)
      : null

    const tweetData = {
      id: data[0].id,
      tweet_text: data[0].text,
      image: associatedMedia
        ? associatedMedia.url || associatedMedia.preview_image_url
        : null,
      all_tweets: data,
    }
    await kv.set('latest-tweet-cache', {
      tweetData,
      timestamp: Date.now(),
    })

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json(tweetData)
  } else {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json(cachedData.tweetData)
  }
}

const fetch = require('node-fetch')

exports.handler = async (event) => {
  const convertTimestamps = (nextObj, prevObj, prevKey) => {
    if (typeof nextObj === `object`) {
      Object.keys(nextObj).map((key) =>
        convertTimestamps(nextObj[key], nextObj, key)
      )
    } else {
      if (typeof nextObj === `number` && nextObj >> 0 !== nextObj) {
        const date = new Date(nextObj)
        if (date.getTime() === nextObj) {
          prevObj[prevKey] = date.toISOString().slice(0, 10)
        }
      }
    }
  }

  return fetch('https://medium.com/vegaprotocol?format=json')
    .then((response) => response.text())
    .then((data) => {
      console.log(data)
      data = data.replace(`])}while(1);</x>`, ``)
      const { payload } = JSON.parse(data)

      let importableResources = []
      let posts = {} // because `posts` needs to be in a scope accessible by `links` below

      const users = Object.keys(payload.references.User).map(
        (key) => payload.references.User[key]
      )
      importableResources = importableResources.concat(users)

      if (payload.posts) {
        posts = payload.posts
        importableResources = importableResources.concat(posts)
      }

      if (payload.references.Post) {
        posts = Object.keys(payload.references.Post).map(
          (key) => payload.references.Post[key]
        )
        importableResources = importableResources.concat(posts)
      }

      if (payload.references.Collection) {
        const collections = Object.keys(payload.references.Collection).map(
          (key) => payload.references.Collection[key]
        )
        importableResources = importableResources.concat(collections)
      }

      const resources = [...importableResources].map((resource) => {
        return {
          ...resource,
          medium_id: resource.id,
          id: resource.id ? resource.id : resource.userId,
        }
      })

      const getID = (node) => (node ? node.id : null)

      let blogPosts = []

      resources.map((resource) => {
        convertTimestamps(resource)

        let links = {}

        if (resource.type === `Post`) {
          links = {
            author___NODE: getID(
              resources.find((r) => r.userId === resource.creatorId)
            ),
          }
        } else if (resource.type === `User`) {
          links = {
            posts___NODE: resources
              .filter(
                (r) => r.type === `Post` && r.creatorId === resource.userId
              )
              .map((r) => r.id),
          }
        }

        if (resource.type === 'Post') {
          blogPosts.push({
            ...resource,
            ...links,
          })
        }
      })
      return {
        statusCode: 200,
        body: JSON.stringify({
          data: blogPosts,
        }),
      }
    })
    .catch((e) => {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: e.message,
        }),
      }
    })
}

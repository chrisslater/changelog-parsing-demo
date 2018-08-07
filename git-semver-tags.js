const gitSemverTags = require('git-semver-tags')

const options = {
    lernaTags: true,
}

gitSemverTags(function(err, tags) {
  console.log('tags', tags)
  //=> [ 'v2.0.0', 'v1.0.0' ]
}, options)
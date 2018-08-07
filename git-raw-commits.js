const gitRawCommits = require('git-raw-commits')

const options = {

}

gitRawCommits(options)
    .on('data', function (buffer) {

    console.log(buffer.toString())

  })
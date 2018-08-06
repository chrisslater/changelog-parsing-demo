const conventionalCommitsParser = require('conventional-commits-parser')

const options = {
	// mergePattern: /^Merge pull request #(\d+) from (.*)$/,
	// mergeCorrespondence: ['id', 'source'],
}

const result = conventionalCommitsParser(options)
	// .push((...rest) => {
	// 	console.log('push', rest)
	// })
	// .on('data', () => {
	// 	console.log('chunk')
	// })
	.on('end', () => {
		console.log('There will be no more data.');
	})

	.on('error', () => {
		console.log('error')
	})
// const fs = require('fs')
// const writable = fs.createWriteStream('file.txt');
// // All the data from readable goes into 'file.txt'
// result.pipe(writable);

// .end((...rest) => {
// 	console.log('end', rest)
// })
// .pipe((...rest) => {
// 	console.log('pipe', rest)
// })

console.log(result);
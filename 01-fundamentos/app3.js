const fs = require('fs')

const content = fs.readFileSync('README.md', 'utf8');

const wordCount = content.split(' ')

console.log(wordCount)

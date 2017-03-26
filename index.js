const piggy = require('lazy-piggy')
const fs = require('fs')

// get all dirs
const files = fs.readdirSync('.')
const index = `<meta charset="utf-8"><meta name=viewport content="width=device-width"><title>Webpack</title><ol>${files.filter(f => f.indexOf('part-') === 0).map(f => `<li><a href="${f}/">${f}</a>`)}</ol>`
fs.writeFileSync('index.html', index)

piggy({
  root: '.'
})
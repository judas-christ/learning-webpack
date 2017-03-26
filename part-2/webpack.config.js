module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'public/app.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['buble-loader']
    }]
  }
}
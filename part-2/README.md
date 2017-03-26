# Part 2

Building with minification! And [buble](https://buble.surge.sh/) because [UglifyJS](https://github.com/mishoo/UglifyJS2) doesn't speak ES2015.

```js
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
```

The config is already giving me [Grunt](https://gruntjs.com/) vibes. I shan't judge too harshly yet though.

So the unused export is gone. Huzzah! There's a lot of junk in the output compared to [Rollup](http://rollupjs.org/) but the CommonJS-like boilerplate is probably useful when splitting into different bundles.
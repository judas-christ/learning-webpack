# Part 1

The simplest possible config, straight from the webpack introduction, more or less.

```js
module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'public/app.js'
  }
}
```

Huh, not too bad. It's not quite [Brunch](http://brunch.io/), but not far from it. Maybe I could learn to like it after all.

The output includes unused exports but they should be minified away when I turn that on.
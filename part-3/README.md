# Part 3

Zero configuration with Webpack 4.

No code to show, because there's no config. Like, at all. Amazing! Webpack 4 still requires `mode` to be set (with `--mode=(production|development)`) so it's not _quite_ zero config, but very close. I ran into a strange bug here where Webpack would just pick up the first export from `module.js`, but switching places on the exports seem to have straightened it out. I told you it was strange.

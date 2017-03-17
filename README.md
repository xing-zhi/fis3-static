# fis3-static
Fis3 config for developing static pages.

# Install fis3
Fis3 and many modules are installed globally in the documents from [the official website](http://fex.baidu.com/fis3/index.html) and many posts.

I prefer install them locally and run commands through the npm scripts. But installing `fis3` globally is also recommended, because it's more convenient to get help info by running `fis3 <command> -h` than using the npm scripts.

# How to use

Start the server, the default port is `8080`.
```bash
$ npm start
```

Develope with file watching and livereload, the server should be started first.
```bash
$ npm run dev
```

Release for production.
```bash
$ npm run release
```

# Directory structure

    ├── dist
    │   ├── css
    │   ├── imgs
    │   ├── index.html
    │   └── js
    ├── fis-conf.js
    ├── package.json
    ├── README.md
    └── src
        ├── css
        ├── imgs
        ├── index.html
        └── js

# Node version
Node 7.x is not surpoted by fis3 at present, use Node 6.x instead.

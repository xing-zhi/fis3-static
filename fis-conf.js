fis.match('js/*.js', {
  parser: fis.plugin('babel-6.x'),
  rExt: 'js'
});

fis.match('scss/(*.scss)', {
  isCssLike: true,
  parser: fis.plugin('node-sass'),
  rExt: '.css',
  // change css folder from scss to css
  release: '/css/$1',
  postprocessor: fis.plugin('autoprefixer', {
    browsers: ['> 1%', 'last 2 versions']
  }),
  useSprite: true
});

fis.match('::package', {
  spriter: fis.plugin('csssprites', {
    margin: 10,
    layout: 'matrix'
  })
});

fis.media('prod')
  .match('*.{js, scss, css, png, jpeg, jpg}', {
    useHash: true
  })
  .match('*.{scss, css}', {
    optimizer: fis.plugin('clean-css')
  })
  .match('*.js', {
    optimizer: fis.plugin('uglify-js')
  })
  .match('*.html', {
    optimizer: fis.plugin('dfy-html-minifier', {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      minifyJS: true,
      minifyCSS: true
    })
  })
  .match('*.png', {
    optimizer: fis.plugin('png-compressor')
  });

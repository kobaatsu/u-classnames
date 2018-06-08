module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ["last 2 versions"]
    }),
    require('postcss-sorting')(
      require('./.postcss-sorting.json')
    ),
    require('css-mqpacker')({
      sort: true
    })
  ]
}

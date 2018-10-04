module.exports = {
  plugins: [
    require('postcss-sorting')(
      require('./.postcss-sorting.json')
    ),
    require('css-mqpacker')({
      sort: true
    }),
    require('autoprefixer')({
      browsers: ["last 2 versions"]
    })
  ]
}

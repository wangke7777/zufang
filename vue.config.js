module.exports = {
  devServer: {
    open: 'Firefox Developer Edition',
    proxy: {
      '/api': {
        target: 'https://m.baletu.com/',
        changeOrigin: true,
        pathRewrite: {'/api': '/'}
      }
    }
  }
}
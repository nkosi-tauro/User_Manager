const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, '../backend/public'),
  devServer: {
    proxy: 'http://127.0.0.1:3000/api' || process.env.PORT
  }
}
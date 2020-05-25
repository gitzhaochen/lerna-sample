const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
console.log(process.cwd(), __dirname)
console.log(path.join(process.cwd()), path.resolve(process.cwd()))
module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            rootMode: 'upward'
          }
        },
        exclude: [/node_modules/]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|gif|png|jpe?g|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false, // 这里设置为false
              limit: 8192,
              name: '[name]-[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    alias: {
      '@': path.join(process.cwd(), 'src'),
      '~': path.join(process.cwd(), 'node_modules')
    },
    extensions: ['*', '.js', '.vue', '.json']
  }
}

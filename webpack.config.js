const path = require('path')
const root = path.resolve(__dirname, './')
const webpack = require('webpack')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
    path.join(root, 'src/index.js')
  ],
  output: {
    filename: '[name].js',
    path: path.join(root, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      images: path.join(root, 'src/assets/images'),
      styles: path.join(root, 'src/assets/styles')
    }
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' },
      { test: /\.(png|jpg|eot|woff|ttf|svg)$/, loader: 'url-loader?limit=8192' }
    ]
  },
  devtool: '#source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    contentBase: path.resolve(root, 'dist'),
    publicPath: '/cnode'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    // new ExtractTextPlugin({ filename: '[name].css', disable: false, allChunks: true }),
    new webpack.optimize.CommonsChunkPlugin('common'),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlwebpackPlugin({ template: path.join(root, './src/index.html') })
  ]
}

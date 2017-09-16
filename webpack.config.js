const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.join(__dirname, './public/bundle'),
    filename: "bundle.js",
  },
  resolve: {
    alias: {},
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ["transform-object-rest-spread"]
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }, { 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      }
    ]
  },
  
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "commons",
      filename: "commons.js",
    })
  ]
}

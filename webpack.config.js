const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { merge } = require('webpack-merge'); //[1]

const commonConfig = require('./config/webpack.common');

module.exports = (env) => {
	const config = require('./config/webpack.' + env);
	return merge(commonConfig, config);
};


// module.exports = {
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.join(__dirname, 'src', 'template.html'),
//       filename: 'index.html',
//       entry: path.join(__dirname, 'src', 'index.js'),
//     }),
//   ],
//    output: {
//     path: path.join(__dirname, 'dist'),
//     filename: 'index.[contenthash].js',
//   },
//   devServer: {
//     watchFiles: path.join(__dirname, 'src'),
//     port: 9000,
//     hot: true
//   },
// };
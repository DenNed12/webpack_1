const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: './src/index.js'
	},
	output: {
		path: path.join(__dirname, '..', 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Webpack Configuration Split',
		}),

	],
    devServer: {
    watchFiles: path.join(__dirname, 'src'),
    port: 9000,
    hot: true
  },
};
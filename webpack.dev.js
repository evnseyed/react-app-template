const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack')

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, "public/"),
		},
		port: 3000,
		hot: true
	},
	plugins: [
		new HotModuleReplacementPlugin()
	]
});
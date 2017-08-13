var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: "./index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"	
	},
	devtool: "source-map",
	context: __dirname,
	module: {
		rules:[
			{
				test: /\.js?$/,
				include: [
					path.resolve(__dirname, "actions"),
					path.resolve(__dirname, "reducers"),
					path.resolve(__dirname, "components"),
					path.resolve(__dirname, "containers")
				],
				loader: "babel-loader",
				options: {
					presets: ["es2015"]
				}
			},
			{
				test: /\.html$/,
				loader: "html-loader"
			}
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: "index.html",
			inject: 'head'
		})
	]	
};
var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ["babel-polyfill","./index.js"],
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"	
	},
	devtool: "source-map",
	context: __dirname,
	module: {
		rules:[
			{
				test: /\.js$/,
				include: [
					path.resolve(__dirname, "actions"),
					path.resolve(__dirname, "reducers"),
					path.resolve(__dirname, "components"),
					path.resolve(__dirname, "containers"),
					path.join(__dirname, "index.js")
				],
				loader: "babel-loader",
				options: {
					presets: ["latest", "react"]
				}
			}
		]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: "index.html",
			inject: 'body'
		})
	]	
};
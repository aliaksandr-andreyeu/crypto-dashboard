const webpack = require("webpack")
const path = require("path")

const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const themeVariables = []

const plugins = [
	new MiniCssExtractPlugin({
		path: __dirname,
		filename: "./style.css",
	}),
]

module.exports = {
	entry: ["@babel/polyfill", "./src/index.js"],
	output: {
		path: __dirname,
		filename: "./main.js",
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: "babel-loader",
				options: {
					cacheDirectory: true,
				},
			},
			{
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					{
						loader: "less-loader",
						options: {
							modifyVars: themeVariables,
							javascriptEnabled: true,
						},
					},
				],
			},
			{
				test: /\.sass$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
			},
		],
	},
	plugins,
}

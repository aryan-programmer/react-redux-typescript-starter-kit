const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path                 = require("path");

module.exports = {
	entry    : ["./src/js/index.tsx"],
	devtool  : "source-map",
	output   : {
		publicPath: "./public/",
		filename  : "main.js",
		path      : path.join(__dirname, 'public/build'),
	},
	plugins  : [
		new MiniCssExtractPlugin(
			{
				filename     : "[name].css",
				chunkFilename: "[id].css",
			}),
	],
	module   : {
		rules: [{
			test: /\.(s[ca]ss)$/,
			use : [
				{
					loader : MiniCssExtractPlugin.loader, // inject CSS to page
					options: {
					},
				}, {
					loader : "csso-loader", // minifies CSS
					options: {
						sourceMap: true
					},
				}, {
					loader : "css-loader", // translates CSS into CommonJS modules
					options: {
						sourceMap: true
					},
				}, {
					loader : "postcss-loader", // Run postcss actions
					options: {
						sourceMap: true
					}
				}, {
					loader : "sass-loader", // compiles Sass to CSS
					options: {
						sourceMap: true
					},
				}
			]
		}, {
			test   : /\.tsx?$/,
			loader : "babel-loader",
			exclude: [/node_modules/],
		}],
	},
	resolve  : {
		extensions: [".js", ".jsx", ".ts", ".tsx"],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		//contentBase: "./",
		hot        : true
	},
};

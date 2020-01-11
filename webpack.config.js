const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry    : ["./src/js/index.tsx"],
	devtool  : "source-map",
	output   : {
		publicPath: "/",
		filename  : "main.js",
		path      : __dirname,
	},
	plugins  : [
		new MiniCssExtractPlugin(
			{
				filename     : "[name].css",
				chunkFilename: "[id].css",
				sourceMaps   : true
			}),
	],
	module   : {
		rules: [{
			test: /\.(s[ca]ss)$/,
			use : [
				{
					loader : MiniCssExtractPlugin.loader, // inject CSS to page
					options: {
						sourceMap: true
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
						plugins  : function () { // postcss plugins, can be exported to postcss.config.js
							return [
								require("autoprefixer")
							];
						},
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
		contentBase: "./",
		hot        : true
	},
};
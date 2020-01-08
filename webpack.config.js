module.exports = {
	entry    : ["./src/js/index.tsx"],
	devtool  : "source-map",
	output   : {
		publicPath: '/',
		filename: "bundle.main.js",
		path    : __dirname,
	},
	module   : {
		rules: [{
				test   : /\.tsx?$/,
				loader : "babel-loader",
				exclude: [/node_modules/],
				options: {
					presets: [
						"@babel/env",
						"@babel/react",
						"@babel/typescript",
					]
				}
			}],
	},
	resolve  : {
		extensions: [".js", ".jsx", ".ts", ".tsx"],
	},
	devServer: {
		contentBase: './',
		hot        : true
	},
};
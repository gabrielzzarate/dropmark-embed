var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				loader:
					'style-loader!css-loader?modules=true&localIdentName=[name]__[local]__[hash:base64:5]'
				// use: ExtractTextPlugin.extract({
				// 	fallback: 'style-loader',
				// 	use: ['css-loader']
				// })
				// {
				// 	test: /\.css/,
				// 	use: ExtractTextPlugin.extract(
				// 		'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
				// 	)
				// }
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/'
						}
					}
				]
			},
			{
				test: /\.(png|svg|jpg|gif|ico)$/,
				use: ['file-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: './index.html'
		}),
		new ExtractTextPlugin('style.css')
	]
};

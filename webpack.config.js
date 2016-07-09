var path = require('path')
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: ['./src/index'],
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist')
	},
	plugins: [
		new CopyWebpackPlugin([
				{from: 'vendor/blockly/blockly_compressed.js', to: 'assets/blockly/'},
				{from: 'vendor/blockly/blocks_compressed.js', to: 'assets/blockly/'},
				{from: 'vendor/blockly/msg/js/en.js', to: 'assets/blockly/'},
		// 		// {from: 'src/index.html'}
			]),
		new HtmlWebpackPlugin({
      			template: './src/index.html'
    		})
		],
	module: {
		// loaders: [{
		// // {test: regex, 'loader-name'},			
		// }]
	},

}


// module.exports = {
//     entry: "./entry.js",
//     output: {
//         path: __dirname,
//         filename: "bundle.js"
//     },
//     plugins: [
// 		new HtmlWebpackPlugin({
//       			template: './src/index.html'
// 		})
//     ],
//     module: {
//         loaders: [
//             { test: /\.css$/, loader: "style!css" }
//         ]
//     }
// };
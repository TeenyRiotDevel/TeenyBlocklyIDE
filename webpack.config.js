var path = require('path')
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: ['./src/index'],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	plugins: [
		new CopyWebpackPlugin([
				{from: 'vendor/blockly/blockly_compressed.js'},
				{from: 'vendor/blockly/blocks_compressed.js'},
				{from: 'vendor/blockly/msg/js/en.js'},
				{from: 'src/index.html'}
			])
		]
}
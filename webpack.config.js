const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const CopyWebPackPlugin = require('copy-webpack-plugin');
const HTMLWebPackPlugin = require('html-webpack-plugin');
const Terser = require('terser-webpack-plugin')
const rimraf = require("rimraf");
const TsLoader = require.resolve('ts-loader');
const merge = require("webpack-merge").merge;
const config = require('./pokiGame.config.js')
const getWebpackConfig = require('./node_modules/@awayfl/poki-player/template/PokiConfigHelper.js')

module.exports = (env = {}) => {

	return getWebpackConfig(
		!!env.prod,
		config, 
		__dirname, 
		CopyWebPackPlugin, 
		HTMLWebPackPlugin, 
		webpack.BannerPlugin,
		fs,
		rimraf,
		path,
		TsLoader,
		merge,
		Terser
	);

};

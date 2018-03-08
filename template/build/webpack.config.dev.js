'use strict';

const path = require('path');
const webpack = require('webpack');
const env = require('./app-env');


module.exports = {
    watch: false,
    devtool: 'source-map',
    // plugins: [
    //     new webpack.SourceMapDevToolPlugin({
    //         filename: path.resolve(env.dest.path, 'assets/js/main.js.map')
    //     })
    // ]
};
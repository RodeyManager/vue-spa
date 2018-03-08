'use strict';

const path = require('path');
const webpack = require('webpack');
const env = require('./app-env');

module.exports = {
    output: {
        filename: '[name].js',
        // path: path.resolve(__dirname, '../build/modules')
        path: path.resolve(env.dest.path, 'modules')
    },
    // 4.0+ （采用config.optimization.optimization [Boolean] 或 config.optimization.minimizer [Array]）
    optimization: {
        minimize: true
    }
};

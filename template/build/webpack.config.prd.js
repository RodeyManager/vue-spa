'use strict';

const path = require('path');
const webpack = require('webpack');
const env = require('./app-env');

module.exports = {
    output: {
        filename: '[name].js'
    },
    // 4.0+ （采用config.optimization.minimize [Boolean] 或 config.optimization.minimizer [Array]）
    optimization: {
        minimize: true
    }
};

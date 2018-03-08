'use strict';

const env = require('../app-env');
const config = require('../webpack.config');
const webpack = require('webpack');

module.exports = {
    src: 'main.js',
    dest: env.dest.path + '/assets/js',
    rely: ['build.assets'],
    loader: {
        'gulp-webpack-multi-entry': Object.assign({
            webpack
        }, config)
    }
};
'use strict';

const path = require('path');
const _ = require('lodash');
const webpack = require('webpack');

const env = require('./app-env');

const currentEnvConfig = env.isProduction ? require('./webpack.config.prd') : require('./webpack.config.dev');

// 为什么没有entry ?
// 因为再 build.main的task中包含src，这将作为entry
// ./tasks/build.main.js
const config = _.extend({}, currentEnvConfig, {
    output: {
        path: path.resolve(__dirname, '../dist/assets/js')
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            css: 'style-loader!css-loader!sass-loader'
                        },
                        postcss: [
                            require('autoprefixer')({
                                browsers: ['last 2 versions']
                            })
                        ]
                    }
                }
            }
        ]
    },
    // 打包忽略 import，实际上代码中可以包含 import
    externals: {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        axios: 'axios',
        lodash: '_',
        moment: 'moment'
    },
    stats: 'none'
});

module.exports = config;

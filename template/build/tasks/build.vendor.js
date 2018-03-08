'use strict';

const jsLoader = require('../loaders/jsLoader');
const config = require('../webpack.config');
const extend = require('lodash/extend');

module.exports = {
    src: [
        'babel-polyfill/dist/polyfill.js',
        'lodash/lodash.js',
        'vue/dist/vue.js',
        'vue-router/dist/vue-router.js',
        'axios/dist/axios.js',
        'moment/min/moment-with-locales.min.js'
    ].map(file => `../node_modules/${file}`),
    dest: 'assets/js',
    loader: Object.assign(
        {
            'gulp-concat': 'vendor.js'
        },
        jsLoader()
    )
};

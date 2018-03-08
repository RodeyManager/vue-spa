'use strict';

const env = require('../app-env');
const recache = require('./recache');

module.exports = function htmlLoaders(){
    return {
        'gulp-tag-include': {compress: env.isProduction},
        'gulp-recache': recache(env.dest.path)
    }
};
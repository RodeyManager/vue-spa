'use strict';

const env = require('../app-env');
const recache = require('./recache');

module.exports = function cssLoader(fileName){
    return {
        'gulp-sass': null,
        'gulp-merge-css': {fileName: fileName},
        'gulp-recache': recache(env.dest.path + '/assets'),
        'gulp-autoprefixer': {
            browsers: ['> 5%', 'IE > 8', 'last 2 versions']
        },
        'gulp-uglifycss': {_if: env.isProduction}
    }
};
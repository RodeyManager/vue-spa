'use strict';

const jsLoader = require('../loaders/jsLoader');

module.exports = {
    src: 'assets/{fonts,images}/**/*',
    filters: ['assets/js/libs/**/*'],
    dest: 'assets'
};

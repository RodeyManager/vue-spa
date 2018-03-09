'use strict';

const env = require('../app-env');

module.exports = function jsLoaders() {
    return {
        'gulp-jsminer': {
            _if: env.isProduction,
            preserveComments: '!',
            compress: {
                warnings: false,
                drop_console: true
            }
        }
    };
};

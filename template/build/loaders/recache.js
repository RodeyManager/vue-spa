'use strict';

const env = require('../app-env');

module.exports = function recache(path){
    return {
        _if: env.isIf,
        queryKey: '_rvc_',
        // hash值长度
        hashSize: 10,
        // 控制字节大小以内的图片转base64,
        toBase64Limit: 1000,
        basePath: path
    }
};
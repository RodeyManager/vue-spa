import axios from 'axios';
import merge from 'lodash/merge';
import {
  ERROR_CODE
} from './api';

const defaultConfig = {
  timeout: 1000 * 30,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    // 'Content-Type': 'application/x-www-form-urlencoded'
  },
  validateStatus: status => Number(status) >= 200 && Number(status) < 300
};

const config = Object.assign({}, defaultConfig, { ...APP_CONFIG
});
const service = axios.create(config);


// request拦截器
service.interceptors.request.use(
  config => {
    // 如果是本地开发环境，可能需要本地mock json数据
    if (APP_CONFIG.mock) {
      config.url += APP_CONFIG.shuffix || '';
    }
    // 设置一些公共数据，如头部token信息等
    return combine(config);
  },
  error => Promise.reject(error)
);

// response拦截器
service.interceptors.response.use(response => response, error => Promise.reject(error));


function combine(config) {
  const {
    method,
    headers
  } = config;

  // method
  if (['post', 'put', 'patch'].indexOf(method) > -1) {
    config.data = combineParams(config.data);
  } else if (['get', 'delete'].indexOf(method) > -1) {
    config.params = combineParams(config.params);
  }

  // headers
  headers['token'] = 'XXXXXXXXXXXXXXXXXX';
  return config;
}

function combineParams(data) {
  // 接口公共参数配置
  const commonData = {
    _t: Date.now()
  };
  return merge(data, commonData);
}

// 返回接口完整url
export function requestURL(name) {
  return APP_CONFIG.baseURL.replace(/\/$/i, '') + '/' + name.replace(/^\//i, '');
}

export default service;

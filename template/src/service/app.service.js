import axios from 'axios';

const defaultConfig = {
  // baseUrl: window.App.baseUrl,
  timeout: 1000 * 30,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  validateStatus: status => Number(status) >= 200 && Number(status) < 300
};

const config = Object.assign({}, defaultConfig, { ...window.App });
const service = axios.create(config);

// request拦截器
service.interceptors.request.use(
  config => {
    // 如果是本地开发环境，可能需要本地mock json数据
    if (window.App.mock) {
      config.url += window.App.shuffix || '';
    }
    return config;
  },
  error => Promise.reject(error)
);

// response拦截器
service.interceptors.response.use(response => response, error => Promise.reject(error));

export default service;

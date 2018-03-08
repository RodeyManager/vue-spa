import App from '../config/app-config';

const defaultConfig = {
    baseURI: App.getHosts(),
    validateStatus: status => String(status) === '200'
};
let instance;
let restfuls = ['GET', 'POST', 'PUT', 'DELETE', 'PUTCH', 'HEAD', 'OPTIONS'].map(methodName => methodName.toLowerCase());

class AppService {
    constructor() {
        this.config = Object.assign(defaultConfig, App);
        this.ajax = axios.create(this.config);
        this._init();
    }

    _init() {
        // 注入api对应方法
        this._injectApis();
    }

    _injectApis() {
        let apis = this.config.webServiceUrls;

        // 如 api = { test: 'test' }
        // 将产生 test 方法
        // test.prototy将包含 restful api 方法
        // use:
        //    test(data, options).then(res=>res.data.data);
        // 返回一个 Promise，具体data 和 options请参考axios
        // https://github.com/axios/axios

        for (let key in apis) {
            if (apis.hasOwnProperty(key)) {
                let url = this.config.getWebServiceUrl(key);
                this[key] = this._injectObject(url, this._inject(url));
            }
        }
    }

    _injectObject(url, obj) {
        let self = this;
        restfuls.map(method => {
            obj[method] = function() {
                let args = [].slice.call(arguments);
                args.unshift(url);
                return self.ajax[method].apply(self, args);
            };
        });
        return obj;
    }

    _inject(url) {
        return (data, options) => {
            let method = ((data && data['method']) || (options && options['method']) || restfuls[0]).toLowerCase();
            return this.ajax[method](url, data);
        };
    }

    static getInstance() {
        if (!instance && !(instance instanceof AppService)) {
            instance = new AppService();
        }
        return instance;
    }
}
export default AppService.getInstance();

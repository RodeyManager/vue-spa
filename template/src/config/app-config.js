import API from './api';
import _ from 'lodash';
// env/dev会根据编译环境进行重组 (../../build/app-env.js)
import AppConfig from './env/undefined';

const protocolReg = /^(https?:)?\/\//i;

const App = _.extend(
    {
        webServiceUrls: API,
        getWebServiceUrl: function(name, host) {
            let APINAME = App.webServiceUrls[name];
            return protocolReg.test(APINAME)
                ? APINAME
                : App.getHosts((host || App.ServerHost) + APINAME + (App.apiSuffix || ''));
        },
        getHosts: function(page) {
            if (protocolReg.test(page) || /^\.+\//.test(page)) return page;
            return (
                location.protocol +
                '//' +
                location.hostname +
                (location.port ? ':' + location.port : '') +
                (page ? '/' + page : '')
            );
        }
    },
    AppConfig
);

export default App;

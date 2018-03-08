import AppService from './app.service';

class TestService {
    constructor() {}

    test() {
        // 默认GET请求
        AppService.testApi({ id: 1000 }).then(res => console.log(res.data.data));
        AppService.testApi({ id: 1000, method: 'POST' }).then(res => console.log(res.data.data));

        AppService.testApi
            .get({
                params: { id: 1000 }
            })
            .then(res => console.log(res.data.data));

        AppService.testApi.post({ id: 1000 }).then(res => console.log(res.data.data));
        AppService.testApi.put({ id: 1000 }).then(res => console.log(res.data.data));
        AppService.testApi.delete({ id: 1000 }).then(res => console.log(res.data.data));
    }

    error(err) {
        console.log(err);
    }
}

export default new TestService();

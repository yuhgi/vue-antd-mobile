import Vue from 'vue';

import router from './route/router';
import App from '@/app';

import './style/common.less';
import 'vue-antd-mobile/style';

const app = new Vue({
    router,
    template:'\
        <app/>\
    ',
    components:{
        app:App
    }
});
app.$mount('#vue-app');
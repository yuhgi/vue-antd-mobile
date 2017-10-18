import Vue from 'vue';

import router from './route/router';
import store from './store';
import 'normalize.css';
import 'highlight.js/styles/solarized-light.css';
import './style/common.less';
import App from '@/app';

import CodeBox from './app/code-box';
import PhoneBox from './app/phone-box';
Vue.use(CodeBox);
Vue.use(PhoneBox);

const app = new Vue({
    router,
    template:'\
        <app/>\
    ',
    store,
    components:{
        app:App
    }
});
app.$mount('#vue-app');
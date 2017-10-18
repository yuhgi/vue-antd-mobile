import Vue from 'vue';
import './style/index.less';
import WingBlank from './wing-blank.vue';

/* istanbul ignore next */
WingBlank.install = function(Vue){
    Vue.component(WingBlank.name,WingBlank);
};
export default WingBlank; 
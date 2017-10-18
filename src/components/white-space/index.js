import Vue from 'vue';
import './style/index.less';

import WhiteSpace from './white-space.vue';

/* istanbul ignore next */
WhiteSpace.install = function(Vue){
    Vue.component(WhiteSpace.name,WhiteSpace);
};
export default WhiteSpace;
import './style/index.less';
import Drawer from './drawer.vue';

/* istanbul ignore next */
Drawer.install = function(Vue){
    Vue.component(Drawer.name,Drawer);
};

export default Drawer;
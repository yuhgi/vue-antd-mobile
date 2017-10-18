import Button from './button.vue';
import './style/index.less';

/* istanbul ignore next */
Button.install = function(Vue){
    Vue.component(Button.name,Button);
};

export default Button;
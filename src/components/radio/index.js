import './style/index.less';
import Radio from './radio';
import RadioItem from './radio-item';

/* istanbul ignore next */
Radio.install = function(Vue){
    Vue.component(Radio.name,Radio);
};

/* istanbul ignore next */
RadioItem.install = function(Vue){
    Vue.component(RadioItem.name,RadioItem);
};

Radio.RadioItem = RadioItem;

export default Radio;
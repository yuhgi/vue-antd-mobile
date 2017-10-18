import './style/index.less';
import Checkbox from './checkbox';
import CheckboxItem from './checkbox-item';
import AgreeItem from './agree-item';

/* istanbul ignore next */
Checkbox.install = function(Vue){
    Vue.component(Checkbox.name,Checkbox);
};

/* istanbul ignore next */
CheckboxItem.install = function(Vue){
    Vue.component(CheckboxItem.name,CheckboxItem);
};

/* istanbul ignore next */
AgreeItem.install = function(Vue){
    Vue.component(AgreeItem.name,AgreeItem);
};

Checkbox.CheckboxItem = CheckboxItem;
Checkbox.AgreeItem = AgreeItem;

export default Checkbox;
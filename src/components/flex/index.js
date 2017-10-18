import Vue from 'vue';
import './style/index.less';

import Flex from './flex';
import FlexItem from './flex-item';
Flex.FlexItem = FlexItem;

/* istanbul ignore next */
Flex.install = function(Vue){
    Vue.component(Flex.name,Flex);
};

/* istanbul ignore next */
FlexItem.install = function(Vue){
    Vue.component(FlexItem.name,FlexItem);
};

export default Flex;

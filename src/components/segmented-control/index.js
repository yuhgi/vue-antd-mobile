import './style/index.less';
import SegmentedControl from './segmented-control.vue';

/* istanbul ignore next */
SegmentedControl.install = function(Vue){
    Vue.component(SegmentedControl.name,SegmentedControl);
};

export default SegmentedControl;
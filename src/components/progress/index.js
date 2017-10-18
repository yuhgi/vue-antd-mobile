import './style/index.less';
import Progress from './progress';

/* istanbul ignore next */
Progress.install = function(Vue){
    Vue.component(Progress.name,Progress);
};

export default Progress;
import './style/index.less';

import ActivityIndicator from './activity-indicator.vue';

/* istanbul ignore next */
ActivityIndicator.install = function(Vue){
    Vue.component(ActivityIndicator.name,ActivityIndicator);
};

export default ActivityIndicator;
import './style/index.less';

import NavBar from './nav-bar';

/* istanbul ignore next */
NavBar.install = function(Vue){
    Vue.component(NavBar.name,NavBar);
};

export default NavBar;
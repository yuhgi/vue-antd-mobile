
import Vuex from 'vuex';
import state from './state';
import actions from './actions';
import mutation from './mutation';

//Vue.use(Vuex);

export default new Vuex.Store({
    state,
    actions,
    mutation
});
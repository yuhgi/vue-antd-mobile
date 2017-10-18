import './style/index.less';

import ListItem from './list-item.vue';
import List from './list.vue';
import ListItemBrief from './list-item-brief.vue';

List.ListItem = ListItem;
List.ListItem.ListItemBrief = ListItemBrief;

/* istanbul ignore next */
List.install = function(Vue){
    Vue.component(List.name,List);
};

/* istanbul ignore next */
ListItem.install = function(Vue){
    Vue.component(ListItem.name,ListItem);
};

/* istanbul ignore next */
ListItemBrief.install = function(Vue){
    Vue.component(ListItemBrief.name,ListItemBrief);
};

export default List;
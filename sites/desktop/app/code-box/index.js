import CodeBox from './code-box.vue';

CodeBox.install = function(Vue){
    Vue.component(CodeBox.name,CodeBox);
};

export default CodeBox;
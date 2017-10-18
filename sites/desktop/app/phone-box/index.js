import PhoneBox from './phone-box.vue';

PhoneBox.install = function(Vue){
    Vue.component(PhoneBox.name,PhoneBox);
};

export default PhoneBox;
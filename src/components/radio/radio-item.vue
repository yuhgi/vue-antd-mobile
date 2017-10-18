<template>
    <am-list-item 
        :class="wrapCls" 
        :prefixCls="listPrefixCls"
        :arrow="arrow"
        :align="align"
        :error="error"
        :multipleLine="multipleLine"
        :wrap="wrap"
        :activeStyle="activeStyle"
        :platform="platform"
        :disabled="disabled"
        :active="active"
    >
        <template slot="thumb" v-if="thumb">
            <slot name="thumb"></slot>
        </template>
        <slot></slot>
        <template slot="extra">
            <am-radio
                type="radio"
                :name="name"
                :defaultChecked="defaultChecked"
                :checked="checked"
                :disabled="disabled"
                :tabindex="tabindex"
                :value="value"
                @click="onClick"
                @focus="onFocus"
                @blur="onBlur"
                @change="onChange"
            />
        </template>
    </am-list-item>
</template>
<script>
    import List from '../list';
    import Radio from './radio.vue';
    const ListItem = List.ListItem;
    export default {
        name:'AmRadioItem',
        model:{
            prop:'checked',
            event:'change'
        },
        props:{
            prefixCls:{
                type:String,
                default:'am-radio'
            },
            listPrefixCls:{
                type:String,
                default:'am-list'
            },
            arrow: { // 箭头方向
                type: String // horizontal,up,down,empty
            },
            align: {
                type: String,
                default: 'middle' // Flex子元素垂直对齐，可选top, middle, bottom
            },
            error: { // 是否显示报错样式
                type: Boolean,
                default: false
            },
            multipleLine: { // 多行
                type: Boolean,
                default: false
            },
            wrap: { // 是否换行
                type: Boolean,
                default: false
            },
            activeStyle: { // 自定义active的样式
                type: Object
            },
            platform: {
                type: String,
                default: 'cross' // cross,android,ios
            },
            disabled: {
                type: Boolean,
                default: false
            },
            active:{
                type:Boolean,
                default:true
            },
            name:{
                type:String
            },
            defaultChecked:{
                type:Boolean,
                default:false
            },
            checked:{
                type:Boolean
            },
            value:{
                type:String
            },
            tabindex:{
                type:String
            }
        },
        computed:{
            wrapCls(){
                const {prefixCls,disabled} = this.$props;
                return {
                    [`${prefixCls}-item`]:true,
                    [`${prefixCls}-item-disabled`]:disabled
                };
            },
            thumb(){
                if (this.$slots.thumb) {
                    return true;
                } else {
                    return false;
                } 
            }
        },
        methods:{
            onChange(val,e){
                this.$emit('change',val,e);
            },
            onFocus(e){
                this.$emit('focus',e);
            },
            onBlur(e){
                this.$emit('blur',e);
            },
            onClick(e){
                this.$emit('click',e);
            }
        },
        components:{
            'am-list-item':ListItem,
            'am-radio':Radio
        }
    };
</script>


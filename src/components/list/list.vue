<template>
    <div :class="wrapCls">
        <div :class="`${prefixCls}-header`" v-if="header">
            <slot name="header"></slot>
        </div>
        <div :class="`${prefixCls}-body`" v-if="body">
            <slot></slot>
        </div>  
        <div :class="`${prefixCls}-footer`" v-if="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>


<script>
export default {
    name: 'AmList',
    props: {
        prefixCls: {
            type: String,
            default: 'am-list'
        }
    },
    computed:{
        wrapCls(){
            const {prefixCls} = this.$props;
            return {[`${prefixCls}`]:true};
        },
        header(){
            if(this.$slots.header){
                return true;
            }else{
                return false;
            }
        },
        body(){
            if(this.$slots.default){
                return true;
            }else{
                return false;
            }
        },
        footer(){
            if(this.$slots.footer){
                return true;
            }else{
                return false;
            }
        }
    }
};
</script>

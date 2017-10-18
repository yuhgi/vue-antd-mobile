<template>
    <div :class="wrapCls" v-if="animating">
        <div :class="`${prefixCls}-content`" v-if="toast">
            <span :class="spinnerCls" :aria-hidden="text?true:false" :aria-label="text?'':'Loading'" />
            <span :class="`${prefixCls}-toast`" v-if="text">{{text}}</span>
        </div>
        <span :class="spinnerCls" v-if="!toast" :aria-hidden="text?true:false" :aria-label="text?'':'Loading'"/>
        <span :class="`${prefixCls}-tip`" v-if="!toast&&text">{{text}}</span>
    </div>
</template>
<script>
    export default {
        name:'AmActivityIndicator',
        props:{
            prefixCls:{
                type:String,
                default:'am-activity-indicator'
            },
            animating:{
                type:Boolean,
                default:true
            },
            size:{
                type:String, // small, large
                default:'small'
            },
            toast:{
                type:Boolean,
                default:false
            },
            text:{
                type:String
            }
        },
        computed:{
            wrapCls(){
                const {prefixCls,size,toast} = this.$props;
                return {
                    [`${prefixCls}`]:true,
                    [`${prefixCls}-lg`]:size === 'lg',
                    [`${prefixCls}-sm`]:size === 'sm',
                    [`${prefixCls}-toast`]:toast
                };
            },
            spinnerCls(){
                const {prefixCls,size,toast} = this.$props;
                return {
                    [`${prefixCls}-spinner`]: true,
                    [`${prefixCls}-spinner-lg`]: !!toast || size === 'lg'
                };
            }
        }
    };
</script>


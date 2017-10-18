<template>
    <div :class="wrapCls"><slot></slot></div>
</template>

<script>
export default {
    name:'AmWingBlank',
    props:{
        prefixCls:{
            type:String,
            default:'am-wingblank'
        },
        size:{
            type:String,
            default:'md'
        },
    },
    computed:{
        wrapCls(){
            return {
                [`${this.prefixCls}`]:true,
                [`${this.prefixCls}-${this.size}`]:true
            };
        }
    }
};
</script>

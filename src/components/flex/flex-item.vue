<template>
    <div :class="wrapCls">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'AmFlexItem',
        props:{
            prefixCls:{
                type:String,
                default:'am-flexbox'
            }
        },
        computed:{
            wrapCls(){
                let {prefixCls} = this.$props;
                return{
                    [`${prefixCls}-item`]:true
                };
            }
        }
    };
</script>

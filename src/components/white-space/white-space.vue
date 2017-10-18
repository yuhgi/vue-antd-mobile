<template>
    <div :class="wrapCls" />
</template>
<script>
    export default {
        name:'AmWhiteSpace',
        props:{
            'prefixCls':{
                type:String,
                default:'am-whitespace'
            },
            'size':{
                type:String,
                default:'md'
            }
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


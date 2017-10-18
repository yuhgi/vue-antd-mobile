<template>
    <div :class="wrapCls"
        role="progress"
        :aria-valuenow="percent"
        aria-valuemin="0"
        aria-valuemax="100"
    >
        <div :class="`${prefixCls}-bar`"
            ref="bar"
            :style="bStyle"
        />
    </div>
</template>
<script>
    export default {
        name:'AmProgress',
        props:{
            prefixCls:{
                type:String,
                default:'am-progress'   
            },
            barStyle:{
                type:Object,
                default(){
                    return {};
                }
            },
            percent:{
                type:Number,
                default:0
            },
            position:{
                type:String,
                default:'normal' // fixed, normal
            },
            unfilled:{ // hide the unfilled part
                type:String,
                default:'show' // show hide
            },
            appearTransition:{
                type:Boolean,
                default:false
            }
        },
        computed:{
            wrapCls(){
                const {prefixCls,position,unfilled} = this.$props;
                return {
                    [`${prefixCls}-outer`]:true,
                    [`${prefixCls}-fixed-outer`]:position === 'fixed',
                    [`${prefixCls}-hide-outer`]:unfilled === 'hide',
                };
            },
            bStyle(){
                const {percent,appearTransition,barStyle} = this.$props;
                const {noAppearTransition} = this.$data;
                return {
                    ...barStyle,
                    width:noAppearTransition || !appearTransition ? `${percent}%` : 0,
                    height:0
                };
            }
        },
        mounted(){
            const {percent,appearTransition} = this.$props;
            if(appearTransition){
                setTimeout(() => {
                    this.$refs.bar.style.width = `${percent}%`;
                },10);
            }
        },
        beforeUpdate(){
            this.noAppearTransition = true;
        }
    };
</script>


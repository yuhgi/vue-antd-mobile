<template>
    <div :class="wrapCls">
        <div :class="`${prefixCls}-left`" role="button" @click="onLeftClick">
            <span :class="`${prefixCls}-left-icon`" aria-hidden="true">
                <am-icon :type="iconName"></am-icon>
            </span>
            <span :class="`${prefixCls}-left-content`">
                <slot name="leftContent"></slot>
            </span>
        </div>
        <div :class="`${prefixCls}-title`">
            <slot></slot>
        </div>
        <div :class="`${prefixCls}-right`">
            <slot name="rightContent"></slot>
        </div>
    </div>
</template>
<script>
    import Icon from '../icon';
    export default {
        name:'AmNavBar',
        props:{
            prefixCls:{
                type:String,
                default:'am-navbar'
            },
            mode:{
                type:String,
                default:'dark'  // dark, light
            },
            iconName:{
                type:String,
                default:'left' // refer icon component
            }
        },
        computed:{
            wrapCls(){
                const {prefixCls,mode} = this.$props;
                return {
                    [prefixCls]:true,
                    [`${prefixCls}-${mode}`]:true
                };
            }
        },
        methods:{
            onLeftClick(e){
                this.$emit('leftclick',e);
            }
        },
        components:{
            'am-icon':Icon
        }
        
    };
</script>


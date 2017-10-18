<template>
    <div :class="wrapCls">
        <div :class="`${prefixCls}-notice-content`">
            <slot></slot>
        </div>
        <a :class="`${prefixCls}-notice-close`" v-if="closable" @click="close">
            <span :class="`${prefixCls}-notice-close-x`"></span>
        </a>
    </div>
</template>

<script>
    export default {
        name:'AmNotice',
        props:{
            prefixCls:{
                type:String
            },
            duration:{
                type:Number,
                default:1.5
            },
            closable:{
                type:Boolean,
                default:false
            }
        },
        mounted(){
            let {duration} = this.$props;
            if(duration){
                this.closeTimer = setTimeout(() => {
                    this.close();
                },duration * 1000);
            }
        },
        beforeDestroy(){
            this.clearCloseTimer();
        },
        computed:{
            wrapCls(){
                const {prefixCls,closable} = this.$props;
                return {
                    [`${prefixCls}-notice`]:true,
                    [`${prefixCls}-notice-closable`]:closable
                };
            }
        },
        methods:{
            clearCloseTimer(){
                if(this.closeTimer){
                    clearTimeout(this.closeTimer);
                    this.closeTimer = null;
                }
            },
            close(){
                this.clearCloseTimer();
                this.$emit('close',this.key);
            }
        }
    };
</script>

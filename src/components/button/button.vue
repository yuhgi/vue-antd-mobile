<template>
    <a role="button" 
        :class="wrapCls" 
        :style="wrapStyle"
        :disabled="disabled" 
        aria-disabled={disabled}
        @click="onClick"
    >
        <am-icon :type="iconType" v-if="iconType" :size="size==='small'?'xxs':'md'" />
        <slot></slot>
    </a>
</template>

<script>
    import Icon from '../icon';
    export default {
        name: 'AmButton',
        props: {
            prefixCls: {
                type: String,
                default: 'am-button'
            },
            type: {
                type: String // primary, ghost, warning
            },
            size: {
                type: String,
                default: 'large' // large, small
            },
            activeClass:{
                type:'String'
            },
            activeStyle: {
                type: [Object, Boolean],
                default() {
                    return {};
                }
            },
            disabled: {
                type: Boolean,
                default: false
            },
            inline: {
                type: Boolean,
                default: false
            },
            across: {
                type: Boolean,
                default: false
            },
            loading: {
                type: Boolean,
                default: false
            },
            icon: {
                type: [String, Object]
            }
        },
        data(){
            return {
                activeClicked:false
            };
        },
        computed: {
            wrapCls() {
                const { prefixCls, type, size, inline, across, disabled, loading, icon ,activeClass} = this.$props;
                const {activeClicked} = this.$data;
                return {
                    [`${prefixCls}`]: true,
                    [`${prefixCls}-primary`]: type === 'primary',
                    [`${prefixCls}-ghost`]: type === 'ghost',
                    [`${prefixCls}-warning`]: type === 'warning',
                    [`${prefixCls}-small`]: size === 'small',
                    [`${prefixCls}-inline`]: inline,
                    [`${prefixCls}-across`]: across,
                    [`${prefixCls}-disabled`]: disabled,
                    [`${prefixCls}-loading`]: loading,
                    [`${prefixCls}-icon`]:loading || icon,
                    [`${prefixCls}-active`]:activeClicked,
                    [activeClass]:activeClicked && activeClass
                };
            },
            wrapStyle(){
                const {style,activeStyle} = this.$props;
                const {activeClicked} = this.$data;

                if(activeClicked){
                    return {...style,...activeStyle};
                }
                return style;
            },
            iconType(){
                const {loading,icon} = this.$props;
                let iconType = loading ? 'loading':icon;
                return iconType;
            }
        },
        methods:{
            onClick(e){
                if(this.activeStyle !== false){
                    this.activeClicked = true;
                    setTimeout(() => {
                        this.activeClicked = false;
                    },100);
                }
                
                if(this.disabled){
                    return;
                }
                this.$emit('click',e);
            }
        },
        components: {
            'am-icon': Icon
        }
    };
</script>

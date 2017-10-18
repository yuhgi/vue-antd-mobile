<template>
    <div :class="wrapCls" :style="wrapStyle" @click="onClick">
        <div :class="`${prefixCls}-thumb`" v-if="thumb">
            <slot name="thumb"></slot>
        </div>
        <div :class="lineCls">
            <div :class="`${prefixCls}-content`" v-if="content">
                <slot></slot>
            </div>
            <div :class="`${prefixCls}-extra`" v-if="extra">
                <slot name="extra"></slot>
            </div>
            <div :class="arrowCls" aria-hidden="true" v-if="arrow" />
        </div>
        <div :class="rippleCls" :style="coverRippleStyle"></div>
    </div>
</template>

<script>
    export default {
        name: 'AmListItem',
        props: {
            prefixCls: {
                type: String,
                default: 'am-list'
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
            }
        },
        data() {
            return {
                activeClicked: false,
                rippleClicked: false,
                coverRippleStyle: { display: 'none' }
            };
        },
        computed: {
            wrapCls() {
                const { prefixCls, disabled, align, error } = this.$props;
                const { activeClicked } = this.$data;
                return {
                    [`${prefixCls}-item`]: true,
                    [`${prefixCls}-item-active`]: activeClicked,
                    [`${prefixCls}-item-disabled`]: disabled,
                    [`${prefixCls}-item-error`]: error,
                    [`${prefixCls}-item-top`]: align === 'top',
                    [`${prefixCls}-item-middle`]: align === 'middle',
                    [`${prefixCls}-item-bottom`]: align === 'bottom'
                };
            },
            wrapStyle() {
                if (this.activeClicked) {
                    return this.activeStyle;
                } else {
                    return null;
                }
            },
            rippleCls() {
                const { prefixCls } = this.$props;
                const { rippleClicked } = this.$data;
                return {
                    [`${prefixCls}-ripple`]: true,
                    [`${prefixCls}-ripple-animate`]: rippleClicked
                };
            },
            lineCls() {
                const { prefixCls, multipleLine, wrap } = this.$props;
                return {
                    [`${prefixCls}-line`]: true,
                    [`${prefixCls}-line-multiple`]: multipleLine,
                    [`${prefixCls}-line-wrap`]: wrap,
                };
            },
            arrowCls() {
                const { prefixCls, arrow } = this.$props;
                return {
                    [`${prefixCls}-arrow`]: true,
                    [`${prefixCls}-arrow-horizontal`]: arrow === 'horizontal',
                    [`${prefixCls}-arrow-vertical`]: arrow === 'down' || arrow === 'up',
                    [`${prefixCls}-arrow-vertical-up`]: arrow === 'up'
                };
            },
            extra() {
                if (this.$slots.extra) {
                    return true;
                } else {
                    return false;
                }
            },
            thumb(){
                if (this.$slots.thumb) {
                    return true;
                } else {
                    return false;
                } 
            },
            content() {
                if (this.$slots.default) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        methods: {
            onClick(e) {
                if(this.active === false || this.disabled){
                    this.$emit('click',e);
                    return;
                }
                if(this.activeTimer){
                    clearTimeout(this.activeTimer);
                    this.activeTimer = null;
                }
                this.activeClicked = true;
                this.activeTimer = setTimeout(() => {
                    this.activeClicked = false;
                }, 100);
                const { platform } = this.$props;
                const isAndroid = platform === 'android' ||
                    (platform === 'cross' && !!navigator.userAgent.match(/Android/i));
                if (isAndroid) {
                    if (this.debounceTimer) {
                        clearTimeout(this.debounceTimer);
                        this.debounceTimer = null;
                    }
                    let itemEl = e.currentTarget;
                    let rippleWidth = Math.max(itemEl.offsetHeight, itemEl.offsetWidth);
                    const clientRect = itemEl.getBoundingClientRect();
                    let rippleLeft = e.clientX - clientRect.left - rippleWidth / 2;
                    let rippleTop = e.clientY - clientRect.top - rippleWidth / 2;
                    this.coverRippleStyle = {
                        width: `${rippleWidth}px`,
                        height: `${rippleWidth}px`,
                        left: `${rippleLeft}px`,
                        top: `${rippleTop}px`
                    };
                    this.rippleClicked = true;
                    
                    this.$nextTick(() => {
                        this.debounceTimer = setTimeout(() => {
                            this.rippleClicked = false;
                            this.coverRippleStyle = { display: 'none' };
                        }, 1000);
                    });
                }
                this.$emit('click',e);
            },
            destroy() {
                clearTimeout(this.activeTimer);
                clearTimeout(this.debounceTimer);
            }
        }
    };
</script>

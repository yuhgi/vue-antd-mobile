<template>
    <div :class="wrapCls"
        @touchstart="onWrapTouchStart"
        @touchmove="onTouchMove"
        @touchend= "onTouchEnd"
    >
        <div :class="`${prefixCls}-sidebar`" :style="sStyle" ref="sidebar">
            <slot name="sidebar"></slot>
        </div>
        <div :class="`${prefixCls}-overlay`" 
            :style="oStyle" 
            v-if="enableOverlay"
            role="presentation" 
            ref="overlay" 
            @click="onOverlayClick" 
        />
        <div :class="`${prefixCls}-draghandle`" 
            ref="draghandle" 
            v-if="dragHandleShow"
            :style="dragHandleStyle"
            @touchstart="onTouchStart"
            @touchmove="onTouchMove"
            @touchend= "onTouchEnd"
        />
        <div :class="`${prefixCls}-content`" :style="cStyle" ref="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'AmDrawer',
        props: {
            prefixCls: {
                type: String,
                default: 'am-drawer'
            },
            open: { // if sidebar should slide open
                type: Boolean,
                default: false
            },
            position: { // where to place the sidebar
                type: String,
                default: 'left' // left, right , top, bottom
            },
            sidebarStyle: {
                type: Object,
                default() { return {}; }
            },
            contentStyle: {
                type: Object,
                default() { return {}; }
            },
            overlayStyle: {
                type: Object,
                default() { return {}; }
            },
            dragHandleStyle: {
                type: Object,
                default() { return {}; }
            },
            touch: { // if touch gestures are enabled
                type: Boolean,
                default: true
            },
            enableDragHandle: { // if drag are enabled
                type: Boolean,
                default: false
            },
            enableOverlay:{
                type:Boolean,
                default: true
            },
            dragToggleDistance: { // distance we have to drag the sidebar to toggle open state
                type: Number,
                default: 30
            },
            transitions: { // if transitions should be enabled
                type: Boolean,
                default: true
            },
            docked: { // if sidebar should be docked
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                sidebarWidth: 0,
                sidebarHeight: 0,
                sidebarTop: 0,
                dragHandleTop: 0,

                // touch info
                touchIdentifier: null,
                touchStartX: null,
                touchStartY: null,
                touchCurrentX: null,
                touchCurrentY: null,

                // if touch is supported by the browser
                touchSupported: typeof window === 'object' && 'ontouchstart' in window
            };
        },
        computed: {
            wrapCls() {
                const { open, docked, prefixCls, position } = this.$props;
                return {
                    [prefixCls]: true,
                    [`${prefixCls}-${position}`]: true,
                    [`${prefixCls}-docked`]: docked,
                    [`${prefixCls}-open`]: open
                };
            },
            touchSidebarWidth() {
                const { position } = this.$props;
                const { touchCurrentX,sidebarWidth } = this.$data;

                if (position === 'right') {
                    return Math.min(window.innerWidth - touchCurrentX,sidebarWidth);
                }

                if (position === 'left') {
                    return Math.min(sidebarWidth,touchCurrentX);
                }
            },
            touchSidebarHeight() {
                const { position } = this.$props;
                const { touchCurrentY,sidebarHeight } = this.$data;

                if(position === 'top'){
                    return Math.min(touchCurrentY,sidebarHeight);
                }
                if(position === 'bottom'){
                    return Math.min(window.innerHeight - touchCurrentY,sidebarHeight);
                }
            },
            sStyle() { // sidebar style
                const { position, open, transitions } = this.$props;
                let { ...style } = this.$props.sidebarStyle;
                if(this.isTouching() || !transitions){
                    style.transition = 'none';
                    style.WebkitTransition = 'none';
                }
                if(open){
                    style.transform = 'translateX(0)';
                    style.WebkitTransform = 'translateX(0)';
                }
                if(position === 'left' || position === 'left'){
                    if(this.isTouching()){
                        const percentage = this.touchSidebarWidth / this.sidebarWidth;
                        if(position === 'left'){
                            style.transform = `translateX(-${(1-percentage)*100}%)`;
                            style.WebkitTransform = `translateX(-${(1-percentage)*100}%)`;
                        }
                        if(position === 'right'){
                            style.transform = `translateX(${(1-percentage)*100}%)`;
                            style.WebkitTransform = `translateX(${(1-percentage)*100}%)`;
                        }
                    }
                }
                if(position === 'top' || position === 'bottom'){
                    if(this.isTouching()){
                        const percentage = this.touchSidebarHeight / this.sidebarHeight;
                        if(position === 'top'){
                            style.transform = `translateY(-${(1-percentage)*100}%)`;
                            style.WebkitTransform = `translateY(-${(1-percentage)*100}%)`;
                        }
                        if(position === 'bottom'){
                            style.transform = `translateY(${(1-percentage)*100}%)`;
                            style.WebkitTransform = `translateY(${(1-percentage)*100}%)`;
                        }
                    }
                }
                return style;
            },
            oStyle() { // overlay style
                const { position, open, transitions } = this.$props;
                let { ...style } = this.$props.overlayStyle;
                const touching = this.isTouching();
                
                if(touching || !transitions){
                    style.transition = 'none';
                    style.WebkitTransition = 'none';
                }
                if(open){
                    style.opacity = 1;
                    style.visibility = 'visible';
                }
                if(touching){
                    let percentage;
                    if(position === 'left' || position === 'left'){
                        percentage = this.touchSidebarWidth / this.sidebarWidth;
                    }
                    if(position === 'top' || position === 'bottom'){
                        percentage = this.touchSidebarWidth / this.sidebarWidth;
                    }
                    style.opacity = percentage;
                    style.visibility = 'visible';
                }

                return style;
            },
            cStyle() { // content style
                const {open, position, transitions,docked } = this.$props;
                let { ...style } = this.$props.contentStyle;
                const touching = this.isTouching();
                if(touching || !transitions){
                    style.transition = 'none';
                    style.WebkitTransition = 'none';
                }
                if(!docked){
                    return style;
                }
                if(open){
                    if(position === 'left' || position === 'right'){
                        style[`${position}`] = this.sidebarWidth + 'px';
                    }
                    if(position === 'top' || position === 'bottom'){
                        style[`${position}`] = this.sidebarHeight + 'px';
                    }
                }
                if(touching){
                    if(position === 'left' || position === 'right'){
                        style[`${position}`] = this.touchSidebarWidth + 'px';
                    }
                    if(position === 'top' || position === 'bottom'){
                        style[`${position}`] = this.touchSidebarHeight + 'px';
                    }
                }
                
                return style;
            },
            dragHandleShow(){
                if(!this.touchSupported || !this.touch || !this.enableDragHandle || this.open){
                    return false;
                }
                return true;
            }
        },
        methods: {
            onOverlayClick() {
                if(this.$props.open){
                    this.$emit('openchange',false,{overlayClicked:true});
                }
            },
            isTouching() {
                return this.touchIdentifier !== null;
            },
            saveSidebarSize() {
                const { sidebar } = this.$refs;
                this.sidebarWidth = sidebar.offsetWidth;
                this.sidebarHeight = sidebar.offsetHeight;
            },
            onWrapTouchStart(e){
                if(!this.touchSupported || !this.touch){
                    return;
                }
                this.notTouch = true;
                this.onTouchStart(e);
            },
            onTouchStart(e){
                if(!this.touchSupported || !this.touch){
                    return;
                }
                if(!this.isTouching()){
                    const touch = e.targetTouches[0];
                    this.touchIdentifier = !this.notTouch ? touch.identifier : null;
                    this.touchStartX = touch.clientX;
                    this.touchStartY = touch.clientY;
                    this.touchCurrentX = touch.clientX;
                    this.touchCurrentY = touch.clientY;
                }
            },
            onTouchMove(e){
                if(!this.touchSupported || !this.touch){
                    return;
                }
                if(this.isTouching()){
                    for(let idx = 0;idx<e.targetTouches.length;idx++){
                        let touch = e.targetTouches[idx];
                        if(touch.identifier === this.touchIdentifier){
                            this.touchCurrentX = touch.clientX;
                            this.touchCurrentY = touch.clientY;
                        }
                        break;
                    }
                }
            },
            onTouchEnd(){
                if(!this.touchSupported || !this.touch){
                    return;
                }
                this.notTouch = false;
                if(this.isTouching()){
                    const touchWidth = this.touchSidebarWidth;
                    const {open,dragToggleDistance} = this.$props;
                    if(!open && touchWidth > dragToggleDistance){
                        this.$emit('openchange',true);
                    }

                    const touchHeight = this.touchSidebarHeight;
                    if(!open && touchHeight > dragToggleDistance){
                        this.$emit('openchange',true);
                    }
                    this.touchIdentifier = null;
                    this.touchStartX = null;
                    this.touchCurrentX = null;
                    this.touchStartY = null;
                    this.touchCurrentY = null;
                }
            }
        },
        mounted() {
            this.saveSidebarSize();
        },
        updated() {
            if (!this.isTouching()) {
                this.saveSidebarSize();
            }
        }
    };
</script>


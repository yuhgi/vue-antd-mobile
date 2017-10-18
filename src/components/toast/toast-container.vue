<template>
    <transition-group name="am-fade" tag="div" :class="wrapCls">
        <am-notice v-for="notice in notices" 
            :key="notice.key"
            :style="notice.style"
            :class="notice.class"
            :prefixCls="prefixCls"
            :duration="notice.duration"
            :closable="notice.closable"
            @close="onClose(notice.key)"
        >
            <div :class="`${prefixCls}-text ${prefixCls}-text-icon}`"
                role="alert"
                aria-live="assertive"
                v-if="!!iconTypes[notice.type]"
            >
                <am-icon :type="iconTypes[notice.type]" size="lg" />
                <div :class="`${prefixCls}-text-info`">{{notice.content}}</div>
            </div>
            <div :class="`${prefixCls}-text`" role="alert" aria-live="assertive" v-else>
                <div>{{notice.content}}</div>
            </div>
        </am-notice>
    </transition-group>
</template>
<script>
    import {Notice} from '../notification';
    import Icon from '../icon';
    import Vue from 'vue';
    let seed = 0;
    const now = Date.now();
    function getUuid() {
        return `am-toast-${now}-${seed++}`;
    }

    const ToastContainer =  {
        name: 'AmToastContainer',
        props:{
            prefixCls:{
                type:String,
                default:'am-toast'
            },
            transitionName:{
                type:String
            },
            animation:{
                type:String,
                default:'fade'
            },
            mask:{
                type:Boolean,
                default:true
            }
        },
        data() {
            return {
                notices:[],
                iconTypes: {
                    info: '',
                    success: require('./style/assets/success.svg'),
                    fail: require('./style/assets/fail.svg'),
                    offline: require('./style/assets/dislike.svg'),
                    loading: 'loading'
                }
            };
        },
        computed:{
            wrapCls(){
                const {prefixCls,mask} = this.$props;
                return {
                    [`${prefixCls}`]:true,
                    [`${prefixCls}-mask`]: mask,
                    [`${prefixCls}-nomask`]: !mask
                };
            }
        },
        methods:{
            getTransitionName(){
                const {prefixCls,transitionName,animation} = this.$props;
                if(!transitionName && animation){
                    return `${prefixCls}-${animation}`;
                }
                return transitionName;
            },
            add(notice){
                const key = notice.key = notice.key || getUuid();
                if(!this.notices.filter(v => v.key === key).length){
                    this.notices.push(notice);
                }
            },
            remove(key){
                this.notices = this.notices.filter(notice => {
                    return notice.key !== key;
                });
            },
            onClose(key){
                this.notices = this.notices.filter(notice => {
                    if(notice.key === key){
                        setTimeout(() => {
                            notice.onClose && notice.onClose();
                        },0);
                    }
                    return notice.key !== key;
                });
                if(!this.notices.length){
                    this.$emit('close');
                }
            }
        },
        components: {
            'am-notice': Notice,
            'am-icon':Icon
        }
    };

    ToastContainer.newInstance = function(properties){
        const {getContainer,prefixCls,style,animation,transitionName,mask}= properties;
        const document = window.document,
            body = document.body;
        let div;
        if(getContainer && typeof getContainer === 'function'){
            div = getContainer();
        }else{
            div = document.createElement('div');
            body.appendChild(div);
        }
        const toastContainer = new Vue({
            el:div,
            data(){
                return {
                    prefixCls:prefixCls,
                    style:style,
                    mask:mask,
                    animation:animation,
                    transitionName:transitionName
                };
            },
            template:`
                <am-toast-container
                    ref="toastContainer"
                    :prefixCls="prefixCls"
                    :style="style"
                    :animation="animation"
                    :transtionName="transitionName"
                    :mask="mask"
                />
            `,
            methods:{
                add(notice){
                    this.$refs.toastContainer.add(notice);
                },
                remove(key){
                    this.$refs.toastContainer.remove(key);
                }
            },
            components:{
                'am-toast-container':ToastContainer
            }
        });
        
        return {
            notice(notice){
                toastContainer.add(notice);
            },
            removeNotice(key){
                toastContainer.remove(key);
            },
            component:toastContainer,
            destroy(){
                toastContainer.$destroy();
                if(!getContainer){
                    body.removeChild(body.querySelector('.am-toast'));
                }
            }
        };
    };

    export default ToastContainer;
</script>

<template>
    <transition-group :name="getTransitionName()" tag="div" :class="wrapCls">
        <am-notice v-for="notice in notices"
            :key="notice.key"
            :style="notice.style"
            :class="notice.cls"
            :prefixCls="prefixCls"
            :duration="notice.duration"
            :closable="notice.closable"
            @close="onClose(notice.key)"
        >
            <template>{{notice.content}}</template>
        </am-notice>
    </transition-group>
</template>

<script>
    import Notice from './notice';
    import Vue from 'vue';

    let seed = 0;
    const now = Date.now();
    function getUuid(){
        return `am-notification-${now}-${seed++}`;
    }

    const Notification =  {
        name:'AmNotification',
        props:{
            prefixCls:{
                type:String,
                default:'am-notification'
            },
            animation:{
                type:String,
                default:'fade'
            },
            transitionName:{
                type:String
            }
        },
        data(){
            return {
                notices:[]
            };
        },
        computed:{
            wrapCls(){
                const {prefixCls} = this.$props;
                return {
                    [`${prefixCls}`]:true
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
            onClose(key){
                this.notices = this.notices.filter(notice => notice.key !== key);
                if(!this.notices.length){
                    this.$emit('close');
                }
            }
        },
        components:{
            'am-notice':Notice
        }
    };

    Notification.newInstance = function(properties){
        const {getContainer,prefixCls,style,cls,animation,transitionName}= properties;
        const document = window.document,
            body = document.body;
        let div;
        if(getContainer && typeof getContainer === 'function'){
            div = getContainer();
        }else{
            div = document.createElement('div');
            body.appendChild(div);
        }
        const notification = new Vue({
            el:div,
            data(){
                return {
                    prefixCls:prefixCls,
                    style:style,
                    cls:cls,
                    animation:animation,
                    transitionName:transitionName
                };
            },
            template:`
                <am-notification
                    ref="notification"
                    :prefixCls="prefixCls"
                    :style="style"
                    :class="cls"
                    :animation="animation"
                    :transtionName="transitionName"
                />
            `,
            methods:{
                add(notice){
                    const key = notice.key = notice.key || getUuid();
                    const notification = this.$refs.notification;
                    if(!notification.notices.filter(v => v.key === key).length){
                        notification.notices.push(notice);
                    }
                },
                remove(key){
                    const notification = this.$refs.notification;
                    notification.notices = notification.notices.filter(notice => notice.key !== key);
                }
            },
            components:{
                'am-notification':Notification
            }
        });
        return {
            notice(notice){
                notification.add(notice);
            },
            removeNotice(key){
                notification.remove(key);
            },
            component:notification,
            destroy(){
                notification.$destroy();
            }
        };
    };
    export default Notification;
</script>

<style lang="less">
.phone-box {
    @media (min-width: 768px) {
        padding: 0;
        width: 100%;
    }
    @media (min-width:992px) {
        position: absolute;
        right: -405px;
        top: 0;
        width: 405px;
        padding: 0px 0px 0px 30px;
    }
    @media (min-width:1200px) {
        position: absolute;
        right: -405px;
        top: 0;
        width: 405px;
        padding: 0px 0px 0px 30px;
    }

    
    min-height: 300px;
    .phone-box-wrapper {
        width: 377px;
        margin: 0 auto;
    }
    .phone-box-header {
        border-radius: 4px 4px 0 0;
        background: linear-gradient(rgba(55, 55, 55, .98), #545456);
        text-align: center;
        height: 64px;
        .phone-box-statbar {
            height: 20px;
            margin-bottom: 4px;
            img {
                width: 350px;
            }
        }
        .phone-box-url {
            width: 350px;
            height: 50px;
            line-height: 28px;
            color: #fff;
            background-color: #a2a2a2;
            margin: 0 auto;
            border-radius: 4px;
            white-space: nowrap;
            overflow-x: scroll;
            overflow-y: hidden;
            box-sizing: border-box;
        }
    }
    .phone-box-content {
        iframe {
            width: 377px;
            height: 548px;
            border-top: none;
            border-right: 1px solid rgb(247, 247, 247);
            border-bottom: 1px solid rgb(247, 247, 247);
            border-left: 1px solid rgb(247, 247, 247);
            border-image: initial;
            box-shadow: rgb(235, 235, 235) 0px 2px 4px;
        }
    }
}
</style>

<template>
    <div class="phone-box" v-if="show">
        <div class="phone-box-wrapper">
            <div class="phone-box-header">
                <div class="phone-box-statbar">
                    <img :src="require('@/style/img/phone-header.png')" alt="">
                </div>
                <div :style="{height:'28px',overflow:'hidden'}">
                    <div class="phone-box-url">{{src}}</div>
                </div>
            </div>
            <div class="phone-box-content">
                <iframe :src="src" frameborder="0"></iframe>
            </div>
        </div>
    </div>
</template>

<script>
    import server from '@/config/server';
    export default {
        name: 'PhoneBox',
        props:{
            path:{
                type:String
            }
        },
        computed:{
            show(){
                if(/components/.test(this.$route.path)){
                    return true;
                }else{
                    return false;
                }
            },
            src(){
                if(this.path){
                    return server + this.path;
                }
                let component = /\/components\/(.+)/.exec(this.$route.path)[1];
                return server + component + '-demo-0'; 
            }
        }
    };
</script>

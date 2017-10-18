<style>
    .btn-container .btn{
        margin: 0.16rem 0;
    }
</style>
<template>
    <am-wing-blank>
        <div class="btn-container">
            <am-button class="btn" type="primary">primary button</am-button>
            <am-button class="btn" disabled @click="onClick">disabled button</am-button>
            <am-button class="btn" loading>loading button</am-button>
            <am-button class="btn" icon="check-circle-o">with icon</am-button>
            <am-button class="btn" :icon="require('./assets/adduser.svg')">
                with local icon
            </am-button>
            <am-button class="btn" :activeStyle="false">no active</am-button>
            <am-button class="btn" :activeStyle="{backgroundColor:'red'}">custom activeStyle</am-button>
            <div :style="{height:'0.16rem'}"></div>
            <p :style="{margin:'30px 0 18px 0',color:'#999'}">inline / small</p>
            <am-flex :style="{marginBottom:'0.16rem'}">
                <am-button type="primary" inline :style="{marginRight:'0.08rem'}">inline</am-button>
                <am-button type="primary" inline size="small" :style="{marginRight:'0.08rem'}">inline small</am-button>
                <am-button type="primary" inline size="small">inline small</am-button>
            </am-flex>
        </div>
    </am-wing-blank>
</template>
<script>
    import {Button,Flex,WingBlank} from 'vue-antd-mobile';
    export default {
        name: 'ButtonExample',
        methods:{
            onClick(e){
                console.log(e);
            }
        },
        components:{
            'am-button':Button,
            'am-flex':Flex,
            'am-wing-blank':WingBlank
        }
    };
</script>



<template>
    <div>
        <am-nav-bar mode="light" @leftclick="onLeftClick">
            <template slot="leftContent">back</template>
            NavBar
            <template slot="rightContent">
                <am-icon key="0" type="search" :style="{marginRight:'0.32rem'}" />
                <am-icon key="1" type="ellipsis" />
            </template>
        </am-nav-bar>
        <am-nav-bar mode="dark"  @leftclick="onLeftClick">
            <template slot="leftContent">back</template>
            NavBar
            <template slot="rightContent">
                <am-icon key="0" type="search" :style="{marginRight:'0.32rem'}" />
                <am-icon key="1" type="ellipsis" />
            </template>
        </am-nav-bar>
    </div>
</template>
<script>
    import {NavBar,Icon} from 'vue-antd-mobile';
    export default {
        name:'NavBarExample',
        components:{
            'am-nav-bar':NavBar,
            'am-icon':Icon
        },
        methods:{
            onLeftClick(){
                console.log('left click');
            }
        }
    };
</script>


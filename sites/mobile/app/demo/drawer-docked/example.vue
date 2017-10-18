<style>
    .my-drawer {
        position: relative;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }
    .my-drawer .am-drawer-sidebar {
        background-color: #fff;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }
    .my-drawer .am-drawer-sidebar .am-list {
        width: 6rem;
        padding: 0;
    }
</style>

<template>
    <div>
        <am-nav-bar iconName="ellipsis" @leftclick="onOpenChange">Docked in document</am-nav-bar>
        <am-drawer 
            class="my-drawer" 
            :open="open"
            :style="drawStyle"
            :contentStyle="{color:'#A6A6A6',textAlign:'center',paddingTop:'42px'}"
            :sidebarStyle="{border:'1px solid #ddd'}"
            enableDragHandle
            :enableOverlay="false"
            docked
            @openchange="onOpenChange"
        >
            <am-list slot="sidebar">
                <am-list-item v-for="(item,index) in list" :key="index" :multipleLine="index===0">
                    <img src="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png" slot="thumb"> Category{{index?index:undefined}}
                </am-list-item>
            </am-list>
            Click upper-left corner icon
        </am-drawer>
    </div>
</template>

<script>
    import { Drawer, NavBar, List } from 'vue-antd-mobile';
    const ListItem = List.ListItem;
    export default {
        name: 'DrawerExample',
        data() {
            return {
                open: false,
                list: [...Array(20).keys()]
            };
        },
        methods: {
            onOpenChange(...args) {
                console.log(args);
                this.open = !this.open;
            }
        },
        computed: {
            drawStyle() {
                return {
                    minHeight: (window.document.documentElement.clientHeight - 200) + 'px'
                };
            }
        },
        components: {
            'am-drawer': Drawer,
            'am-nav-bar': NavBar,
            'am-list': List,
            'am-list-item': ListItem
        }
    };
</script>


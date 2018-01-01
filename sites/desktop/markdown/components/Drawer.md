# Drawer 抽屉

用于在屏幕边缘显示应用导航等内容的面板。

## 代码演示

::: codebox

## 基本示例

遮罩层模式

```html
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
        <am-nav-bar iconName="ellipsis" @leftclick="onOpenChange">Basic</am-nav-bar>
        <am-drawer 
            class="my-drawer" 
            :open="open" 
            :style="drawStyle"
            :contentStyle="{color:'#A6A6A6',textAlign:'center',paddingTop:'42px'}"
            enableDragHandle
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
                open: true,
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

```

:::

::: codebox

## 嵌入文档模式

嵌入到文档流中(drawer-demo-1)

```html
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

```

:::

## API


| 属性               | 说明                                | 类型               | 默认值                                         |
| ------------------ | ----------------------------------- | ------------------ | ---------------------------------------------- |
| sidebar(slot)      | 抽屉里的内容                        | VNode              | -                                              |
| onOpenChange       | open 状态切换时调用                 | (open: bool): void | -                                              |
| open               | 开关状态                            | Boolean            | false                                          |
| position           | 抽屉所在位置                        | String             | 'left', enum{'left', 'right', 'top', 'bottom'} |
| sidebarStyle       | -                                   | Object             | {}                                             |
| contentStyle       | -                                   | Object             | {}                                             |
| overlayStyle       | -                                   | Object             | {}                                             |
| dragHandleStyle    | -                                   | Object             | {}                                             |
| touch              | 是否开启触摸手势                    | Boolean            | true                                           |
| transitions        | 是否开启动画                        | Boolean            | true                                           |
| docked             | 是否嵌入到正常文档流里              | Boolean            | false                                          |
| enableDragHandle   | 是否禁止 dragHandle                 | Boolean            | false                                          |
| dragToggleDistance | 打开关闭抽屉时距 sidebar 的拖动距离 | Number             | 30                                             |
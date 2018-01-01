# NavBar

## 代码演示

::: codebox

## 基本示例

基础使用

```html
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


```

:::

## API


| 属性               | 说明                     | 类型              | 默认值                       |
| ------------------ | ------------------------ | ----------------- | ---------------------------- |
| mode               | 模式                     | string            | 'dark' enum{'dark', 'light'} |
| iconName           | 出现在最左边的图标占位符 | string            | 'left'                       |
| leftContent(slot)  | 导航左边内容             | any               | 无                           |
| rightContent(slot) | 导航右边内容             | any               | 无                           |
| onLeftClick(event) | 导航左边点击回调         | (e: Object): void | 无                           |
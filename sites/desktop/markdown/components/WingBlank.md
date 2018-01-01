# WingBlank

## 代码演示

::: codebox

## 基本示例

基础使用

```html
<template>
    <div :style="{padding:'0.3rem 0'}">
        <am-wing-blank><place-holder /></am-wing-blank>

        <am-white-space size="lg" />
        <am-wing-blank size="lg"><place-holder /></am-wing-blank>

        <am-white-space size="lg" />
        <am-wing-blank size="sm"><place-holder /></am-wing-blank>
    </div>
</template>

<script>
    import {WingBlank,WhiteSpace} from 'vue-antd-mobile';

    const PlaceHolder = {
        template:  `
            <div :style="wrapStyle">Block</div>
        `,
        data() {
            return {
                wrapStyle: {
                    backgroundColor: '#ebebef',
                    color: '#bbb',
                    textAlign: 'center',
                    height: '0.6rem',
                    lineHeight: '0.6rem',
                    width: '100%'
                }
            };
        }
    };

    export default {
        name:'WingBlankExample',
        components:{
            'am-wing-blank':WingBlank,
            'am-white-space':WhiteSpace,
            'place-holder':PlaceHolder
        }
    };
</script>

```

:::

## API

| 属性 | 说明                               | 类型   | 默认值 |
| ---- | ---------------------------------- | ------ | ------ |
| size | 两翼留白的间距，可选`sm`,`md`,`lg` | string | `lg`   |
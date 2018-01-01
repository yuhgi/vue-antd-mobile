# WhiteSpace 上下留白

布局控件

## 代码演示

::: codebox

## 基本示例

基础使用

```html
<template>
    <div>
        <am-white-space size="xs" />
        <place-holder />

        <am-white-space size="sm" />
        <place-holder />

        <am-white-space />
        <place-holder />

        <am-white-space size="lg" />
        <place-holder />

        <am-white-space size="xl" />
        <place-holder />
    </div>
</template>

<script>
    import {WhiteSpace} from 'vue-antd-mobile';

    const PlaceHolder = {
        template: `
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
        name: 'WhiteSpaceExample',
        components: {
            'am-white-space': WhiteSpace,
            'place-holder':PlaceHolder
        }
    };
</script>

```

:::

## API

| 属性 | 说明                                         | 类型   | 默认值 |
| ---- | -------------------------------------------- | ------ | ------ |
| size | 上下留白的间距，可选`xs`,`sm`,`md`,`lg`,`xl` | string | `md`   |
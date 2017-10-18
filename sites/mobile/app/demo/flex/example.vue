<style>
    .flex-container {
        margin: 0 0.30rem;
    }

    .flex-container .inline {
        width: 1.6rem!important;
        margin: 0.18rem 0.18rem 0.18rem 0;
    }

    .flex-container .small {
        height: 0.4rem!important;
        line-height: 0.4rem!important;
    }

    .sub-title {
        color: #888;
        font-size: .28rem;
        padding: 30px 0 18px 0;
    }
</style>

<template>
    <div class="flex-container">
        <div class="sub-title">基本</div>
        <am-flex>
            <am-flex-item><place-holder /></am-flex-item>
            <am-flex-item><place-holder /></am-flex-item>
        </am-flex>
        <am-white-space size="lg"></am-white-space>
        <am-flex>
            <am-flex-item><place-holder /></am-flex-item>
            <am-flex-item><place-holder /></am-flex-item>
            <am-flex-item><place-holder /></am-flex-item>
        </am-flex>
        <am-white-space size="lg"></am-white-space>
        <am-flex>
            <am-flex-item><place-holder /></am-flex-item>
            <am-flex-item><place-holder /></am-flex-item>
            <am-flex-item><place-holder /></am-flex-item>
            <am-flex-item><place-holder /></am-flex-item>
        </am-flex>
        <am-white-space size="lg"></am-white-space>

        <div class="sub-title">wrap 换行</div>
        <am-flex wrap="wrap">
            <place-holder class="inline" />
            <place-holder class="inline" />
            <place-holder class="inline" />
            <place-holder class="inline" />
            <place-holder class="inline" />
            <place-holder class="inline" />
        </am-flex>

        <div class="sub-title">轴对齐方式</div>
        <am-flex justify="center">
            <place-holder class="inline" />
            <place-holder class="inline" />
            <place-holder class="inline" />
        </am-flex>
        <am-white-space />
        <am-flex justify="end">
            <place-holder class="inline" />
            <place-holder class="inline" />
            <place-holder class="inline" />
        </am-flex>
        <am-white-space />
        <am-flex justify="between">
            <place-holder class="inline" />
            <place-holder class="inline" />
            <place-holder class="inline" />
        </am-flex>
        <am-white-space />
        <am-flex justify="around">
            <place-holder class="inline" />
            <place-holder class="inline" />
            <place-holder class="inline" />
        </am-flex>

        <am-white-space />
        <am-flex align="start">
            <place-holder class="inline" />
            <place-holder class="inline small" />
            <place-holder class="inline" />
        </am-flex>
        <am-white-space />
        <am-flex align="end">
            <place-holder class="inline" />
            <place-holder class="inline small" />
            <place-holder class="inline" />
        </am-flex>
        <am-white-space />
        <am-flex align="baseline">
            <place-holder class="inline" />
            <place-holder class="inline small" />
            <place-holder class="inline" />
        </am-flex>
    </div>
</template>
<script>
    import { Flex , WhiteSpace } from 'vue-antd-mobile';
    const FlexItem = Flex.FlexItem;
    const PlaceHolder = {
        template: `
                <div :style="wrapStyle">Item</div>
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
        name: 'FlexExample',
        components: {
            'place-holder': PlaceHolder,
            'am-flex': Flex,
            'am-flex-item': FlexItem,
            'am-white-space':WhiteSpace
        }
    };
</script>



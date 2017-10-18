<template>
    <div :class="wrapCls">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'AmFlex',
    props: {
        prefixCls: {
            type: String,
            default: 'am-flexbox'
        },
        align: {
            type: String,
            default: 'center'
        },
        direction: {
            type: String
        },
        wrap: {
            type: String
        },
        justify: {
            type: String
        },
        alignContent: {
            type: String
        }
    },
    computed: {
        wrapCls() {
            let { prefixCls, direction, wrap, align, justify, alignContent } = this.$props;
            return {
                [`${prefixCls}`]: true,
                [`${prefixCls}-dir-row`]: direction === 'row',
                [`${prefixCls}-dir-row-reverse`]: direction === 'row-reverse',
                [`${prefixCls}-dir-column`]: direction === 'column',
                [`${prefixCls}-dir-column-reverse`]: direction === 'column-reverse',

                [`${prefixCls}-wrap`]: wrap === 'wrap',
                [`${prefixCls}-nowrap`]: wrap === 'nowrap',
                [`${prefixCls}-wrap-reverse`]: wrap === 'wrap-reverse',

                [`${prefixCls}-justify-start`]: justify === 'start',
                [`${prefixCls}-justify-end`]: justify === 'end',
                [`${prefixCls}-justify-center`]: justify === 'center',
                [`${prefixCls}-justify-between`]: justify === 'between',
                [`${prefixCls}-justify-around`]: justify === 'around',

                [`${prefixCls}-align-top`]: align === 'top' || align === 'start',
                [`${prefixCls}-align-middle`]: align === 'middle' || align === 'center',
                [`${prefixCls}-align-bottom`]: align === 'bottom' || align === 'end',
                [`${prefixCls}-align-baseline`]: align === 'baseline',
                [`${prefixCls}-align-stretch`]: align === 'stretch',

                [`${prefixCls}-align-content-start`]: alignContent === 'start',
                [`${prefixCls}-align-content-end`]: alignContent === 'end',
                [`${prefixCls}-align-content-center`]: alignContent === 'center',
                [`${prefixCls}-align-content-between`]: alignContent === 'between',
                [`${prefixCls}-align-content-around`]: alignContent === 'around',
                [`${prefixCls}-align-content-stretch`]: alignContent === 'stretch',
            };
        }
    }
};
</script>

<template>
    <div :class="wrapCls">
        <segment-item 
            v-for="(val,idx) in values"
            :prefixCls="prefixCls"
            :key="idx" 
            :value="val"
            :index="idx"
            :selectedIndex="currentIndex"
            :disabled="disabled"
            :tintColor="tintColor"
            @click="onItemClick"
        />
    </div>
</template>

<script>
    import SegmentItem from './segment-item';
    export default {
        name: 'AmSegmentedControl',
        props: {
            prefixCls: {
                type: String,
                default: 'am-segment'
            },
            tintColor: {
                type: String,
                default: ''
            },
            disabled: {
                type: [Boolean],
                default: false
            },
            selectedIndex: {
                type: [Number],
                default: 0
            },
            values: {
                type: Array,
                default: []
            }
        },
        data(){
            return {
                currentIndex:this.$props.selectedIndex
            };
        },
        computed: {
            wrapCls() {
                let { prefixCls,disabled } = this.$props;

                return {
                    [prefixCls]: true,
                    [`${prefixCls}-disabled`]: disabled
                };
            }
        },
        methods:{
            onItemClick(e,val,idx){
                this.currentIndex = idx;
                this.$emit('change',e,val,idx);
            }
        },
        components:{
            'segment-item':SegmentItem
        }
    };
</script>


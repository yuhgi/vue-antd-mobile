<template>
    <div :class="itemCls" 
        :style="itemStyle"
        role="tab"  
        :aria-selected="selected && !disabled" 
        :aria-disabled="disabled" 
        @click="onClick"
    >
        <div :class="`${prefixCls}-item-inner`">{{value}}</div>
    </div>
</template>

<script>
export default {
    name: 'AmSegmentItem',
    props: {
        prefixCls: {
            type: String
        },
        value: {
            type: [String, Number]
        },
        disabled: {
            type: Boolean,
            default: false
        },
        selectedIndex: {
            type: Number
        },
        index: {
            type: Number
        },
        tintColor:{
            type:String
        }
    },
    computed: {
        itemCls() {
            const { prefixCls } = this.$props;
            return {
                [`${prefixCls}-item`]: true,
                [`${prefixCls}-item-selected`]: this.selected
            };
        },
        itemStyle(){
            const {tintColor} = this.$props;
            
            let selected = this.selected;
            return {
                color:selected ? '#fff':tintColor,
                backgroundColor:selected?tintColor:'#fff',
                borderColor:tintColor
            };
        },
        selected() {
            return this.index === this.selectedIndex;
        }
    },
    methods:{
        onClick(e){
            const {disabled,index,value}  = this.$props;
            if(disabled){
                return;
            }
            this.$emit('click',e,value,index);
        }
    }
};
</script>


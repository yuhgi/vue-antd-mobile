<template>
    <label :class="wrapCls" for="">
        <span :class="radioCls" v-if="withLabel">
            <input :type="type"
                :class="`${prefixCls}-input`"
                :name="name"
                :checked="innerChecked"
                :readonly="readonly"
                :disabled="disabled"
                :tabindex="tabindex"
                :value="value"
                @click="onClick"
                @focus="onFocus"
                @blur="onBlur"
                @change="onChange"
            >
            <span :class="`${prefixCls}-inner`" />
        </span>
        <slot></slot>
    </label>
</template>

<script>
    export default {
        name:'AmRadio',
        model:{
            prop:'checked',
            event:'change'
        },
        props:{
            prefixCls:{
                type:String,
                default:'am-radio'
            },
            type:{
                type:String,
                default:'radio'
            },
            withLabel:{
                type:Boolean,
                default:true
            },
            name:{
                type:String
            },
            defaultChecked:{
                type:Boolean,
                default:false
            },
            checked:{
                type:Boolean
            },
            value:{
                type:String
            },
            readonly:{
                type:Boolean,
                default:false
            },
            disabled:{
                type:Boolean,
                default:false
            },
            tabindex:{
                type:String
            }
        },
        data(){
            const {checked,defaultChecked} = this.$props;
            return {
                innerChecked:checked ? checked:defaultChecked
            };
        },
        computed:{
            wrapCls(){
                const {prefixCls} = this.$props;
                return {
                    [`${prefixCls}-wrapper`]:true
                };
            },
            radioCls(){
                const {prefixCls,disabled} = this.$props;
                return {
                    [`${prefixCls}`]:true,
                    [`${prefixCls}-checked`]:this.innerChecked,
                    [`${prefixCls}-disabled`]:disabled
                };
            }
        },
        methods:{
            onChange(e){
                this.innerChecked = e.target.checked;
                this.$emit('change',this.innerChecked,e);
            },
            onFocus(e){
                this.$emit('focus',e);
            },
            onBlur(e){
                this.$emit('blur',e);
            },
            onClick(e){
                this.$emit('click',e);
            }
        },
        watch:{
            checked(newVal){
                this.innerChecked = newVal;
            }
        }
    };
</script>


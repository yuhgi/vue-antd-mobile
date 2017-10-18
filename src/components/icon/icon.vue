<template>
    <svg :class="wrapCls" @click="onClick">
        <use :xlink:href="xlinkHref"></use>
    </svg>
</template>

<script>
    export default {
        name:'AmIcon',
        props:{
            prefixCls:{
                type:String,
                default:'am-icon'
            },
            type:{
                type:[String,Object]
            },
            size:{
                type:String,
                default:'md' // xxs xs sm md lg 
            }
        },
        computed:{
            wrapCls(){
                let {prefixCls,size,type} = this.$props;

                return {
                    [`${prefixCls}`]:true,
                    [`${prefixCls}-${type}`]:typeof type === 'string',
                    [`${prefixCls}-${size}`]:true
                };
            },
            xlinkHref(){
                let svg;

                try{
                    svg = require(`./style/assets/${this.type}.svg`);
                    
                }catch(e){
                    //
                }finally{
                    if(!svg && typeof this.type === 'object'){
                        svg = this.type;
                    }
                    if(!svg){
                        console.error('type prop error');
                        return ;
                    }
                    return `#${svg.default.id}`;
                }
            }
        },
        methods:{
            onClick(e){
                this.$emit('click',e);
            }
        }
    };
</script>

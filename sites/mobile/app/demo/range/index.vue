<template>
    <demo-box demoName="Range">
        <range-example></range-example>
    </demo-box>
</template>

<script>
    import RangeExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'RangeDemo',
        components:{
            'demo-box':DemoBox,
            'range-example':RangeExample
        }
    };
</script>
<template>
    <demo-box demoName="Flex">
        <flex-example></flex-example>
    </demo-box>
</template>

<script>
    import FlexExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'FlexDemo',
        components:{
            'demo-box':DemoBox,
            'flex-example':FlexExample
        }
    };
</script>
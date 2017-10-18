<template>
    <demo-box demoName="Radio">
        <radio-example></radio-example>
    </demo-box>
</template>

<script>
    import RadioExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'RadioDemo',
        components:{
            'demo-box':DemoBox,
            'radio-example':RadioExample
        }
    };
</script>
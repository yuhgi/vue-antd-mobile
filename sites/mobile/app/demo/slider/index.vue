<template>
    <demo-box demoName="Slider">
        <slider-example></slider-example>
    </demo-box>
</template>

<script>
    import SliderExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'SliderDemo',
        components:{
            'demo-box':DemoBox,
            'slider-example':SliderExample
        }
    };
</script>
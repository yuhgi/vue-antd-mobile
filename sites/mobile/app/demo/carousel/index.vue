<template>
    <demo-box demoName="Carousel">
        <carousel-example></carousel-example>
    </demo-box>
</template>

<script>
    import CarouselExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'CarouselDemo',
        components:{
            'demo-box':DemoBox,
            'carousel-example':CarouselExample
        }
    };
</script>
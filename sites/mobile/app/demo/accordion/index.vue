<template>
    <demo-box demoName="Accordion">
        <accordion-example></accordion-example>
    </demo-box>
</template>

<script>
    import AccordionExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'AccordionDemo',
        components:{
            'demo-box':DemoBox,
            'accordion-example':AccordionExample
        }
    };
</script>
<template>
    <demo-box demoName="Stepper">
        <stepper-example></stepper-example>
    </demo-box>
</template>

<script>
    import StepperExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'StepperDemo',
        components:{
            'demo-box':DemoBox,
            'stepper-example':StepperExample
        }
    };
</script>
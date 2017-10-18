<template>
    <demo-box demoName="Steps">
        <steps-example></steps-example>
    </demo-box>
</template>

<script>
    import StepsExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'StepsDemo',
        components:{
            'demo-box':DemoBox,
            'steps-example':StepsExample
        }
    };
</script>
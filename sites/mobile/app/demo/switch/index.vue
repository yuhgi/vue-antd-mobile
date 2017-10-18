<template>
    <demo-box demoName="Switch">
        <switch-example></switch-example>
    </demo-box>
</template>

<script>
    import SwitchExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'SwitchDemo',
        components:{
            'demo-box':DemoBox,
            'switch-example':SwitchExample
        }
    };
</script>
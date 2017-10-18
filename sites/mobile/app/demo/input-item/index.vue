<template>
    <demo-box demoName="InputItem">
        <input-item-example></input-item-example>
    </demo-box>
</template>

<script>
    import InputItemExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'InputItemDemo',
        components:{
            'demo-box':DemoBox,
            'input-item-example':InputItemExample
        }
    };
</script>
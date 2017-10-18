<template>
    <demo-box demoName="Checkbox">
        <checkbox-example></checkbox-example>
    </demo-box>
</template>

<script>
    import CheckboxExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'CheckboxDemo',
        components:{
            'demo-box':DemoBox,
            'checkbox-example':CheckboxExample
        }
    };
</script>
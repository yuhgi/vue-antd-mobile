<template>
    <demo-box demoName="Picker">
        <picker-example></picker-example>
    </demo-box>
</template>

<script>
    import PickerExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'PickerDemo',
        components:{
            'demo-box':DemoBox,
            'picker-example':PickerExample
        }
    };
</script>
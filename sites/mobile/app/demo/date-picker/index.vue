<template>
    <demo-box demoName="DatePicker">
        <date-picker-example></date-picker-example>
    </demo-box>
</template>

<script>
    import DatePickerExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'DatePickerDemo',
        components:{
            'demo-box':DemoBox,
            'date-picker-example':DatePickerExample
        }
    };
</script>
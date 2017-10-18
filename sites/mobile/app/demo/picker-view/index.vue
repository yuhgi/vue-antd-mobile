<template>
    <demo-box demoName="PickerView">
        <picker-view-example></picker-view-example>
    </demo-box>
</template>

<script>
    import PickerViewExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'PickerViewDemo',
        components:{
            'demo-box':DemoBox,
            'picker-view-example':PickerViewExample
        }
    };
</script>
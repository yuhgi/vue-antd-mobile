<template>
    <demo-box demoName="ImagePicker">
        <image-picker-example></image-picker-example>
    </demo-box>
</template>

<script>
    import ImagePickerExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'ImagePickerDemo',
        components:{
            'demo-box':DemoBox,
            'image-picker-example':ImagePickerExample
        }
    };
</script>
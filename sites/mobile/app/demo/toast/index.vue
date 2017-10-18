<template>
    <demo-box demoName="Toast">
        <toast-example></toast-example>
    </demo-box>
</template>

<script>
    import ToastExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'ToastDemo',
        components:{
            'demo-box':DemoBox,
            'toast-example':ToastExample
        }
    };
</script>
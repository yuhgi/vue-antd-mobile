<template>
    <demo-box demoName="TextAreaItem">
        <textarea-item-example></textarea-item-example>
    </demo-box>
</template>

<script>
    import TextAreaItemExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'TextAreaItemDemo',
        components:{
            'demo-box':DemoBox,
            'textarea-item-example':TextAreaItemExample
        }
    };
</script>
<template>
    <demo-box demoName="WingBlank">
        <wing-blank-example></wing-blank-example>
    </demo-box>
</template>

<script>
    import WingBlankExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'WingBlankDemo',
        components:{
            'demo-box':DemoBox,
            'wing-blank-example':WingBlankExample
        }
    };
</script>
<template>
    <demo-box demoName="WhiteSpace">
        <white-space-example></white-space-example>
    </demo-box>
</template>

<script>
    import WhiteSpaceExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'WhiteSpaceDemo',
        components:{
            'demo-box':DemoBox,
            'white-space-example':WhiteSpaceExample
        }
    };
</script>


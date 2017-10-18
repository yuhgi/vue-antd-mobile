<template>
    <demo-box demoName="Result">
        <result-example></result-example>
    </demo-box>
</template>

<script>
    import ResultExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'ResultDemo',
        components:{
            'demo-box':DemoBox,
            'result-example':ResultExample
        }
    };
</script>
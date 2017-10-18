<template>
    <demo-box demoName="Progress">
        <progress-example></progress-example>
    </demo-box>
</template>

<script>
    import ProgressExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'ProgressDemo',
        components:{
            'demo-box':DemoBox,
            'progress-example':ProgressExample
        }
    };
</script>
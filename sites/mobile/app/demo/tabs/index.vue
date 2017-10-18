<template>
    <demo-box demoName="Tabs">
        <tabs-example></tabs-example>
    </demo-box>
</template>

<script>
    import TabsExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'TabsDemo',
        components:{
            'demo-box':DemoBox,
            'tabs-example':TabsExample
        }
    };
</script>
<template>
    <demo-box demoName="TabBar">
        <tab-bar-example></tab-bar-example>
    </demo-box>
</template>

<script>
    import TabBarExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'TabBarDemo',
        components:{
            'demo-box':DemoBox,
            'tab-bar-example':TabBarExample
        }
    };
</script>
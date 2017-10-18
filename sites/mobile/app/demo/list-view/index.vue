<template>
    <demo-box demoName="ListView">
        <list-view-example></list-view-example>
    </demo-box>
</template>

<script>
    import ListViewExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'ListViewDemo',
        components:{
            'demo-box':DemoBox,
            'list-view-example':ListViewExample
        }
    };
</script>
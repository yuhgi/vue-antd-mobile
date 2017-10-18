<template>
    <demo-box demoName="List">
        <list-example></list-example>
    </demo-box>
</template>

<script>
    import ListExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'ListDemo',
        components:{
            'demo-box':DemoBox,
            'list-example':ListExample
        }
    };
</script>


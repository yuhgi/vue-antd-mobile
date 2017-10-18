<template>
    <demo-box demoName="Grid">
        <grid-example></grid-example>
    </demo-box>
</template>

<script>
    import GridExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'GridDemo',
        components:{
            'demo-box':DemoBox,
            'grid-example':GridExample
        }
    };
</script>
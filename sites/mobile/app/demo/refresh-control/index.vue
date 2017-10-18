<template>
    <demo-box demoName="RefreshControl">
        <refresh-control-example></refresh-control-example>
    </demo-box>
</template>

<script>
    import RefreshControlExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'RefreshControlDemo',
        components:{
            'demo-box':DemoBox,
            'refresh-control-example':RefreshControlExample
        }
    };
</script>
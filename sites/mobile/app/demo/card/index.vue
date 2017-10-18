<template>
    <demo-box demoName="Card">
        <card-example></card-example>
    </demo-box>
</template>

<script>
    import CardExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'CardDemo',
        components:{
            'demo-box':DemoBox,
            'card-example':CardExample
        }
    };
</script>
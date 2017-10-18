<template>
    <demo-box demoName="Button">
        <button-example></button-example>
    </demo-box>
</template>

<script>
    import ButtonExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'ButtonDemo',
        components:{
            'demo-box':DemoBox,
            'button-example':ButtonExample
        }
    };
</script>
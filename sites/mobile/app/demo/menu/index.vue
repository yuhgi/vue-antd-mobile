<template>
    <demo-box demoName="Menu">
        <menu-example></menu-example>
    </demo-box>
</template>

<script>
    import MenuExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'MenuDemo',
        components:{
            'demo-box':DemoBox,
            'menu-example':MenuExample
        }
    };
</script>
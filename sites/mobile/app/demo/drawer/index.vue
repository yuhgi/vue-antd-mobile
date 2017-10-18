<template>
    <demo-box demoName="Drawer">
        <drawer-example></drawer-example>
    </demo-box>
</template>

<script>
    import DrawerExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'DrawerDemo',
        components:{
            'demo-box':DemoBox,
            'drawer-example':DrawerExample
        }
    };
</script>
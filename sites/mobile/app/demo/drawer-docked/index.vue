<template>
    <demo-box demoName="Drawer" demoTitle="嵌入文档模式">
        <drawer-example></drawer-example>
    </demo-box>
</template>

<script>
    import DrawerExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'DrawerDockedDemo',
        components:{
            'demo-box':DemoBox,
            'drawer-example':DrawerExample
        }
    };
</script>
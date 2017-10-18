<template>
    <demo-box demoName="Popover">
        <popover-example></popover-example>
    </demo-box>
</template>

<script>
    import PopoverExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'PopoverDemo',
        components:{
            'demo-box':DemoBox,
            'popover-example':PopoverExample
        }
    };
</script>
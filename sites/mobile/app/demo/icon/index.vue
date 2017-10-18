<template>
    <demo-box demoName="Icon">
        <icon-example></icon-example>
    </demo-box>
</template>

<script>
    import IconExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'IconDemo',
        components:{
            'demo-box':DemoBox,
            'icon-example':IconExample
        }
    };
</script>
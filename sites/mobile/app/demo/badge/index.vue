<template>
    <demo-box demoName="Badge">
        <badge-example></badge-example>
    </demo-box>
</template>

<script>
    import BadgeExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'BadgeDemo',
        components:{
            'demo-box':DemoBox,
            'badge-example':BadgeExample
        }
    };
</script>
<template>
    <demo-box demoName="Tag">
        <tag-example></tag-example>
    </demo-box>
</template>

<script>
    import TagExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'TagDemo',
        components:{
            'demo-box':DemoBox,
            'tag-example':TagExample
        }
    };
</script>
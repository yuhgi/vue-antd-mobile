<template>
    <demo-box demoName="SegmentedControl">
        <segmented-control-example></segmented-control-example>
    </demo-box>
</template>

<script>
    import SegmentedControlExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'SegmentedControlDemo',
        components:{
            'demo-box':DemoBox,
            'segmented-control-example':SegmentedControlExample
        }
    };
</script>
<template>
    <demo-box demoName="ActivityIndicator">
        <activity-indicator-example></activity-indicator-example>
    </demo-box>
</template>

<script>
    import ActivityIndicatorExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'ActivityIndicatorDemo',
        components:{
            'demo-box':DemoBox,
            'activity-indicator-example':ActivityIndicatorExample
        }
    };
</script>
<template>
    <demo-box demoName="SwipeAction">
        <swipe-action-example></swipe-action-example>
    </demo-box>
</template>

<script>
    import SwipeActionExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'SwipeActionDemo',
        components:{
            'demo-box':DemoBox,
            'swipe-action-example':SwipeActionExample
        }
    };
</script>
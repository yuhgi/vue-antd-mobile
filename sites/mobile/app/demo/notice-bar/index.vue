<template>
    <demo-box demoName="NoticeBar">
        <notice-bar-example></notice-bar-example>
    </demo-box>
</template>

<script>
    import NoticeBarExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'NoticeBarDemo',
        components:{
            'demo-box':DemoBox,
            'notice-bar-example':NoticeBarExample
        }
    };
</script>
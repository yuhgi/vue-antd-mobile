<template>
    <demo-box demoName="Popup">
        <popup-example></popup-example>
    </demo-box>
</template>

<script>
    import PopupExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'PopupDemo',
        components:{
            'demo-box':DemoBox,
            'popup-example':PopupExample
        }
    };
</script>
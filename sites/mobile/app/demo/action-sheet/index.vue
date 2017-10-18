<template>
    <demo-box demoName="ActionSheet">
        <action-sheet-example></action-sheet-example>
    </demo-box>
</template>

<script>
    import ActionSheetExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'ActionSheetDemo',
        components:{
            'demo-box':DemoBox,
            'action-sheet-example':ActionSheetExample
        }
    };
</script>
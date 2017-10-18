<template>
    <demo-box demoName="NavBar">
        <nav-bar-example></nav-bar-example>
    </demo-box>
</template>

<script>
    import NavBarExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'NavBarDemo',
        components:{
            'demo-box':DemoBox,
            'nav-bar-example':NavBarExample
        }
    };
</script>
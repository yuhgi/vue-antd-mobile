<template>
    <demo-box demoName="SearchBar">
        <search-bar-example></search-bar-example>
    </demo-box>
</template>

<script>
    import SearchBarExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'SearchBarDemo',
        components:{
            'demo-box':DemoBox,
            'search-bar-example':SearchBarExample
        }
    };
</script>
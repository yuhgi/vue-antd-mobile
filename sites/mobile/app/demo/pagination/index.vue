<template>
    <demo-box demoName="Pagination">
        <pagination-example></pagination-example>
    </demo-box>
</template>

<script>
    import PaginationExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'PaginationDemo',
        components:{
            'demo-box':DemoBox,
            'pagination-example':PaginationExample
        }
    };
</script>
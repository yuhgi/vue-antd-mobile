<template>
    <demo-box demoName="Modal">
        <modal-example></modal-example>
    </demo-box>
</template>

<script>
    import ModalExample from './example'; 
    import DemoBox from '../../demo-box';
    export default {
        name:'ModalDemo',
        components:{
            'demo-box':DemoBox,
            'modal-example':ModalExample
        }
    };
</script>
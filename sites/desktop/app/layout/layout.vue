<style lang="less">
    .page-wrapper {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif;
        line-height: 1.5;
        color: #666;
        font-size: 14px;
        background: #ECECEC;
        transition: background 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        -webkit-user-select: text !important;
        user-select: text !important;
    }

    .main-wrapper {
        background: #fff;
        width: 92%;
        margin: 0 auto;
        border-radius: 6px;
        overflow: hidden;
        padding: 24px 0 0;
        margin-bottom: 24px;
        position: relative;
    }

    div.main-container {
        padding: 0 6% 120px 4%;
        border-left: 1px solid #e9e9e9;
        background: #fff;
        overflow: hidden;
        position: relative;
        left: -1px;
    }
    .aside-container {
        padding-bottom: 50px;
    }
</style>

<template>
    <div class="page-wrapper">
        <layout-header></layout-header>
        <layout-content></layout-content>
    </div>
</template>
<script>
    import Header from './header.vue';
    import Content from './content.vue';
    export default {
        name:'Layout',
        components:{
            'layout-header':Header,
            'layout-content':Content
        }
    };
</script>


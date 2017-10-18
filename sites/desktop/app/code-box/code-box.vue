<style lang="less">
.code-box {
    @media (min-width: 768px) {
        padding-right:0;
    }
    @media (min-width:992px) {
        padding-right: 408px;
        min-height: 700px;
    }
    @media (min-width:1200px) {
        padding-right: 408px;
        min-height: 700px;
    }
    position: relative;
    width: 100%;
    
    .code-box-wrapper {
        width: 100%;
        position: relative;
        margin: 0 0 16px;
        border-radius: 6px;
        display: inline-block;
        transition: all .5s ease;
        border: 1px solid #e9e9e9;
        &:hover {
            box-shadow: 0 0 6px rgba(0, 0, 0, .15);
            position: relative;
            z-index: 10;
            background: #fff;
        }
    }
    .code-box-header {
        border-bottom: 1px dashed #e9e9e9;
        position: relative;
        padding: 12px 16px;
        border-radius: 6px 6px 0 0;
        transition: background-color .4s ease;
        width: 100%;
        font-size: 12px;
        .code-box-title {
            font-size: 16px;
            color: #222;
            transition: all .4s ease;
        }
    }
    .code-box-content {
        max-height: 600px;
        overflow: auto;
        border-radius: 6px;
        padding: 5px;
        line-height: 1.5;
    }
    pre,code{
        background: #fff;
        border: transparent;
    }
}
</style>


<template>
    <div class="code-box">
        <div class="code-box-wrapper">
            <div class="code-box-header">
                <div class="code-box-title">
                    <slot name="title"></slot>
                </div>
                <div class="code-box-desc">
                    <slot name="desc"></slot>
                </div>
            </div>
            <div class="code-box-content">
                <slot name="code"></slot>
            </div>
            <div class="code-box-demo">
                <slot name="demo"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CodeBox',
        data() {
            return {
                open: false,
                zoomin: false
            };
        }
    };
</script>


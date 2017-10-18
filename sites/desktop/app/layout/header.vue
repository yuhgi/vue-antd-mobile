<style lang="less">
    #header{
        transition: opacity .5s;
        background: #fff;
        border-bottom: 1px solid #eee;
        height: 80px;
        margin-bottom: 24px;
        padding: 0 4%;
        width: 100%;
    }
    a#logo {
        float: left;
        display: flex;
        align-items: center;
        height: 80px;
        text-decoration: none;
        img {
            width: 30px;
            margin-right: 8px;
        }
        span {
            float: right;
            font-size: 16px;
            font-family: 'Raleway', 'Hiragino Sans GB', sans-serif;
            text-transform: uppercase;
        }
    }
</style>

<template>
    <header id="header">
        <div>
            <a href="/" id="logo">
                <img :src="require('@/style/logo.png')" alt="">
                <span>VUE ANT DESIGN MOBILE</span>
            </a>
        </div>
    </header>
</template>
<script>
    export default {
        name:'header'
    };
</script>


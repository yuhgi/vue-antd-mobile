<style lang="less">
    @media (min-width:768px) {
        .main-nav {
            width: 100%;
        }
        .main-container {
            width: 100%;
        }
    }

    @media (min-width:992px) {
        .main-nav {
            float: left;
            width: 25%;
        }
        .main-container {
            float: right;
            width: 75%;
            min-height: 800px;
        }
    }

    @media (min-width:1200px) {
        .main-nav {
            float: left;
            width: 20.83333333%;
        }
        .main-container {
            float: right;
            width: 79.16666667%;
            min-height: 800px;
        }
    }

    .main-container {
        margin-left: -1px;
        position: relative;
    }
</style>
<template>
    <div class="main-wrapper">
        <nav-bar class="main-nav aside-container"></nav-bar>
        <div class="main-container">
            <div class="markdown">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    import NavBar from '../nav-bar';

    export default {
        name: 'header',
        components: {
            'nav-bar': NavBar
        }
    };
</script>
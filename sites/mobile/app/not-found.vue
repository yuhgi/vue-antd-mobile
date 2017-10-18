<template>
    <div>
        <h2>404 Not Found</h2>
        <a :href="address">回到首页</a>
    </div>
</template>
<script>
    import server from '@/config/server.js';
    export default {
        name:'NotFound',
        data(){
            return {
                address:server
            };
        }
    };
</script>
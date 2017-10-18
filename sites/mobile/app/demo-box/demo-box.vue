<template>
    <div class="demo-box">
        <div class="demo-name">
            <a :href="address" class="icon"></a>
            {{demoName}}
        </div>
        <div class="demo-preview">
            <div class="demo-title">{{demoTitle}}</div>
            <div class="demo-container">
                <slot></slot>
            </div>
        </div>
    
    </div>
</template>
<script>
    import server from '@/config/server';
    export default {
        name: 'DemoBox',
        props: {
            'demoName': {
                type: String
            },
            'demoTitle': {
                type: String,
                default: '基本'
            }
        },
        data(){
            return {
                address:server
            };
        },
        mounted() {
            window.scrollTo(0, 0);
        }
    };
</script>


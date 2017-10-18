<style>
.show-info {
    margin-top: 0.36rem;
    display: flex;
    align-items: center;
}

.show-info .progress {
    margin-right: 0.1rem;
    width: 100%;
}
</style>
<template>
    <div class="progress-container">
        <am-progress :percent="30" position="fixed" />
        <div :style="{height:'36px'}"></div>
        <am-progress :percent="40" position="normal" unfilled="hide" appearTransition />
        <div class="show-info">
            <div class="progress">
                <am-progress :percent="percent" position="normal" />
                <div aria-hidden="true">{{percent}}%</div>
            </div>
        </div>
        <am-button inline :style="{marginTop:'20px',marginLeft:'30px'}" @click="add">(+10)</am-button>
    </div>
</template>
<script>
    import { Progress, Button } from 'vue-antd-mobile';
    export default {
        name: 'ProgressExample',
        data() {
            return {
                percent: 50
            };
        },
        methods: {
            add() {
                let p = this.percent + 10;
                this.percent = p > 100 ? 0 : p;
            }
        },
        components: {
            'am-progress': Progress,
            'am-button': Button
        }
    };
</script>


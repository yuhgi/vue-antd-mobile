<style>
    .loading-example {
        display: flex;
        justify-content: flex-start;
    }

    .align {
        display: flex;
        flex-direction: column;
    }

    .sub-title {
        color: #888;
        font-size: .28rem;
        padding: 30px 0 18px 0;
    }
</style>
<template>
    <div>
        <am-wing-blank>
            <div class="loading-container">
                <p class="sub-title">icon without text</p>
                <div class="loading-example">
                    <am-activity-indicator />
                </div>
                <am-white-space size="xl" />

                <p class="sub-title">icon with text</p>
                <div class="loading-example">
                    <am-activity-indicator text="Loading..." />
                </div>
                <am-white-space size="xl" />

                <p class="sub-title">icon with large size and customized text style</p>
                <div class="loading-example">
                    <div class="align">
                        <am-activity-indicator size="lg" />
                        <span :style="{marginTop:'8px'}">Loading...</span>
                    </div>
                </div>

                <div class="toast-container">
                    <am-white-space size="xl" />
                    <am-button @click="showToast">Click to show Toast</am-button>
                    <div class="toast-example">
                        <am-activity-indicator toast text="Loading" :animating="animating" />
                    </div>
                </div>
                
            </div>
        </am-wing-blank>
    </div>
</template>
<script>
    import {ActivityIndicator,WingBlank,WhiteSpace,Button} from 'vue-antd-mobile';
    export default {
        name:'ActivityIndicatorExample',
        data(){
            return {
                animating:false
            };
        },
        destroy(){

        },
        methods:{
            showToast(){
                this.animating = !this.animating;
                this.closeTimer = setTimeout(() => {
                    this.animating = !this.animating;
                },1000);
            }
        },
        components:{
            'am-activity-indicator':ActivityIndicator,
            'am-wing-blank':WingBlank,
            'am-white-space':WhiteSpace,
            'am-button':Button
        }
    };
</script>


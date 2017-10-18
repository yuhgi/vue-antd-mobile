<style>
    .sc-example {
        padding-bottom: 0.26rem;
    }

    .sub-title {
        color: #888;
        font-size: .28rem;
        padding: 30px 0 18px 0;
    }
</style>
<template>
    <am-wing-blank size="lg" class="sc-example">
        <p class="sub-title">Simplest</p>
        <am-segmented-control :values="['切换1','切换2']" />

        <p class="sub-title">Disabled</p>
        <am-segmented-control :values="['切换1','切换2','切换3']" disabled />

        <p class="sub-title">SelectedIndex</p>
        <am-segmented-control :values="['切换1','切换2','切换3']" :selectedIndex="1" />

        <p class="sub-title">TintColor</p>
        <am-segmented-control 
            :values="['切换1','切换2','切换3']"  
            tintColor="#ff0000"
            :style="{height:'0.8rem',width:'5rem'}"
        />

        <p class="sub-title">Change Event</p>
        <am-segmented-control 
            :values="['切换1','切换2','切换3']"  
            @change="onChange"
        />
    </am-wing-blank>
</template>
<script>
    import {SegmentedControl,WingBlank} from 'vue-antd-mobile';
    export default {
        name: 'SegmentedControlExample',
        methods:{
            onChange(e,val,idx){
                console.log(`selectedIndex:${idx}, value:${val}`);
            }
        },
        components: {
            'am-segmented-control': SegmentedControl,
            'am-wing-blank':WingBlank
        }
    };
</script>


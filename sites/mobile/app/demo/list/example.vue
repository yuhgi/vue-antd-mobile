<style>
    .my-list .spe .am-list-extra {
        flex-basis: initial;
    }
</style>
<template>
    <div>
        <am-list class="my-list">
            <template slot="header">Basic Style</template>
            <am-list-item>
                Title
                <template slot="extra">extra content</template>
            </am-list-item>
        </am-list>
        <am-list class="my-list">
            <template slot="header">Subtitle</template>
            <am-list-item arrow="horizontal" multipleLine :active="false">
                Title
                <am-list-item-brief>subtitle</am-list-item-brief>
            </am-list-item>
            <am-list-item arrow="horizontal" multipleLine platform="android" @click="()=>{}">
                listlist-item （Android）
                <am-list-item-brief>There may have water ripple effect of
                    <br /> material if you set the click event.</am-list-item-brief>
            </am-list-item>
            <am-list-item arrow="horizontal" multipleLine @click="()=>{}">
                <img src="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" alt="" slot="thumb"> Title
                <am-list-item-brief>subtitle</am-list-item-brief>
            </am-list-item>
        </am-list>
        <am-list class="my-list">
            <template slot="header">Customized Right Side（Empty Content / Text / Image）</template>
            <am-list-item>
                Title
            </am-list-item>
            <am-list-item arrow="horizontal">Title</am-list-item>
            <am-list-item arrow="horizontal">
                Title
                <template slot="extra">extra content</template>
            </am-list-item>
            <am-list-item align="top" multipleLine>
                <template slot="extra">10:30</template>
                <img src="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" slot="thumb"> Title
                <am-list-item-brief>subtitle</am-list-item-brief>
            </am-list-item>
        </am-list>
        <am-list class="my-list">
            <template slot="header">Align Vertical Center</template>
            <am-list-item multipleLine>
                <template slot="extra">extra content</template>
                Title
                <am-list-item-brief>subtitle</am-list-item-brief>
            </am-list-item>
        </am-list>
        <am-list>
            <template slot="header">Icon in the left</template>
            <am-list-item arrow="horizontal">
                <img src="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" alt="" slot="thumb"> My wallet
            </am-list-item>
            <am-list-item arrow="horizontal" :active="false">
                <img src="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png" alt="" slot="thumb"> My cost Ratio
            </am-list-item>
        </am-list>
        <am-list class="my-list">
            <template slot="header">Text Wrapping</template>
            <am-list-item data-seed="logId">Single line，long text will be hidden with ellipsis；</am-list-item>
            <am-list-item wrap>Multiple line，long text will wrap；Long Text Long Text Long Text Long Text Long Text Long Text</am-list-item>
            <am-list-item multipleLine align="top" wrap>
                <template slot="extra">extra content</template>
                Multiple line and long text will wrap. Long Text Long Text Long Text
            </am-list-item>
            <am-list-item arrow="empty" class="spe" wrap>
                <template slot="extra">no arrow</template>
                In rare cases, the text of right side will wrap in the single line with long text. long text long text long text
            </am-list-item>
        </am-list>
        <am-list class="my-list">
            <template slot="header">Other</template>
            <am-list-item :disabled="disabled" :active="false" @click="onClick">Click to disable</am-list-item>
            <am-list-item>
                <select defaultValue="1">
                    <option value="1">html select element</option>
                    <option value="2" disabled>Unable to select</option>
                    <option value="3">option 3</option>
                </select>
            </am-list-item>
        </am-list>
    </div>
</template>
<script>
import { List } from 'vue-antd-mobile';
const ListItem = List.ListItem;
const ListItemBrief = ListItem.ListItemBrief;
export default {
    data() {
        return {
            disabled: false
        };
    },
    components: {
        'am-list': List,
        'am-list-item': ListItem,
        'am-list-item-brief': ListItemBrief
    },
    methods: {
        onClick() {
            console.log('click', this.disabled);
            this.disabled = true;
        }
    }
};
</script>

<style>
.my-radio .am-radio {
    padding: 0.05rem;
    border: 1px solid #ccc;
    border-radius: 50%;
    margin-right: 0.1rem;
}
</style>

<template>
    <div>
        <am-list>
            <template slot="header">RadioItem Demo</template>
            <am-radio-item v-for="(item,index) in items1" :key="item.value" :checked="value===item.value" @change="onChange(item.value)">
                {{item.label}}
            </am-radio-item>
        </am-list>
        <am-white-space size="lg" />
        <am-list>
            <am-radio-item v-for="(item,index) in items2" :key="item.value" :checked="value2===item.value" @change="onChange2(item.value)">
                {{item.label}}
                <am-list-item-brief>{{item.extra}}</am-list-item-brief>
            </am-radio-item>
        </am-list>
        <am-list>
            <template slot="header">
                Disabled
            </template>
            <am-radio-item v-for="(item,index) in items1" :key="item.value" :checked="value3===item.value" @change="onChange(item.value)" disabled>
                {{item.label}}
            </am-radio-item>
        </am-list>
        <am-white-space size="lg" />
        <am-list>
            <am-radio-item v-for="(item,index) in items2" :key="item.value" :checked="value4===item.value" @change="onChange2(item.value)" disabled>
                {{item.label}}
                <am-list-item-brief>{{item.extra}}</am-list-item-brief>
            </am-radio-item>
        </am-list>
        <am-flex :style="{padding:'0.3rem'}">
            <am-flex-item :style="{padding: '0.3rem 0', color: '#888', flex: 'none'}">
                Radio Demo(Customized style)
            </am-flex-item>
            <am-flex-item>
                <am-radio class="my-radio" @change="onCustomChange">Agree</am-radio>
            </am-flex-item>
        </am-flex>
    </div>
</template>
<script>
    import { List, Radio, Flex, WhiteSpace } from 'vue-antd-mobile';

    export default {
        name: 'RadioExample',
        data() {
            return {
                value: 0,
                value2: 0,
                value3: 0,
                value4: 0,
                items1: [
                    { value: 0, label: 'Doctor' },
                    { value: 1, label: 'Bachelor' }
                ],
                items2: [
                    { value: 0, label: 'Basketball', extra: 'Details' },
                    { value: 1, label: 'Football', extra: 'Details' }
                ]
            };
        },
        methods: {
            onChange(value) {
                this.value = value;
            },
            onChange2(value) {
                this.value2 = value;
            },
            onCustomChange(value, e) {
                console.log(value);
                console.log(e);
            }
        },
        components: {
            'am-white-space': WhiteSpace,
            'am-list': List,
            'am-list-item-brief': List.ListItem.ListItemBrief,
            'am-flex': Flex,
            'am-flex-item': Flex.FlexItem,
            'am-radio': Radio,
            'am-radio-item': Radio.RadioItem
        }
    };
</script>


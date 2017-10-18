<template>
    <div>
        <am-list>
            <template slot="header">CheckboxItem demo</template>
            <am-checkbox-item v-for="(item,index) in items" :key="index" @change="onCheckItemChange(item.value)">
                {{item.label}}
            </am-checkbox-item>
            <am-checkbox-item key="disabled" data-seed="logId" disabled defaultChecked multipleLine>
                undergraduate
                <am-list-item-brief>Auxiliary text</am-list-item-brief>
            </am-checkbox-item>
            <am-checkbox-item key="model" v-model="modelItemChecked" @change="onModelItemChange">
                v-model
            </am-checkbox-item>
        </am-list>
        <am-flex>
            <am-flex-item>
                <am-agree-item data-seed="logId" @change="onAgreeItemChange">
                    Agree
                    <a @click="onLinkClick">agreement</a>
                </am-agree-item>
            </am-flex-item>
        </am-flex>
    </div>
</template>
<script>
    import { List, Checkbox, Flex } from 'vue-antd-mobile';

    export default {
        name: 'CheckboxExample',
        data() {
            return {
                items: [
                    { value: 0, label: 'Ph.D.' },
                    { value: 1, label: 'Bachelor' },
                    { value: 2, label: 'college diploma' }
                ],
                modelItemChecked: null
            };
        },
        methods: {
            onCheckItemChange(val) {
                console.log(val);
            },
            onAgreeItemChange(val, e) {
                console.log('checkbox', e);
            },
            onModelItemChange(val, e) {
                alert('modelItemChecked:' + this.modelItemChecked);
                console.log('checkbox', e);
            },
            onLinkClick(e) {
                e.preventDefault();
                alert('agree it');
            }
        },
        components: {
            'am-list': List,
            'am-list-item-brief': List.ListItem.ListItemBrief,
            'am-flex': Flex,
            'am-flex-item': Flex.FlexItem,
            'am-checkbox': Checkbox,
            'am-checkbox-item': Checkbox.CheckboxItem,
            'am-agree-item': Checkbox.AgreeItem
        }
    };
</script>
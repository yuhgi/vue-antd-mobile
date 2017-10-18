<template>
    <div class="am-demo-page">
        <div class="am-demo-hd">
            <h1 class="am-demo-title">Vue Antd Mobile</h1>
            <h2 class="am-demo-subtitle">移动端组件库</h2>
        </div>
        <div class="am-demo-bd">
            <category v-for="item in components" :key="item.category" :info="item"></category>
        </div>
    </div>
</template>

<script>
    import Category from './category';
    export default {
        name: 'Menu',
        data() {
            return {
                components: [
                    {
                        categoryName:'布局',
                        category: 'Layout',
                        children: [{
                            path: '/demo/flex-demo-0',
                            name: 'Flex',
                            desc: 'Flex布局'
                        }, {
                            path: '/demo/wing-blank-demo-0',
                            name: 'WingBlank',
                            desc: '两翼留白'
                        }, {
                            path: '/demo/white-space-demo-0',
                            name: 'WhiteSpace',
                            desc: '上下留白'
                        }]
                    }, {
                        categoryName:'导航',
                        category: 'Navigation',
                        children: [{
                            path: '/demo/drawer-demo-0',
                            name: 'Drawer',
                            desc: '抽屉-基本'
                        }, {
                            path: '/demo/drawer-demo-1',
                            name: 'Drawer',
                            desc: '抽屉-嵌入文档模式'
                        }, {
                            path: '/demo/menu-demo-0',
                            name: 'Menu',
                            desc: '菜单'
                        }, {
                            path: '/demo/nav-bar-demo-0',
                            name: 'NavBar',
                            desc: '导航栏'
                        }, {
                            path: '/demo/popover-demo-0',
                            name: 'Popover',
                            desc: '气泡'
                        }, {
                            path: '/demo/pagination-demo-0',
                            name: 'Pagination',
                            desc: '分页器'
                        }, {
                            path: '/demo/segmented-control-demo-0',
                            name: 'SegmentedControl',
                            desc: '分段器'
                        }, {
                            path: '/demo/tabs-demo-0',
                            name: 'Tabs',
                            desc: '标签页'
                        }, {
                            path: '/demo/tab-bar-demo-0',
                            name: 'TabBar',
                            desc: '标签栏'
                        }]
                    }, {
                        categoryName:'数据录入',
                        category: 'Data Entry',
                        children: [{
                            path: '/demo/button-demo-0',
                            name: 'Button',
                            desc: '按钮'
                        }, {
                            path: '/demo/checkbox-demo-0',
                            name: 'Checkbox',
                            desc: '复选框'
                        }, {
                            path: '/demo/date-picker-demo-0',
                            name: 'DatePicker',
                            desc: '日期选择'
                        }, {
                            path: '/demo/image-picker-demo-0',
                            name: 'ImagePicker',
                            desc: '图片选择器'
                        }, {
                            path: '/demo/input-item-demo-0',
                            name: 'InputItem',
                            desc: '文本输入'
                        }, {
                            path: '/demo/picker-demo-0',
                            name: 'Picker',
                            desc: '选择器'
                        }, {
                            path: '/demo/picker-view-demo-0',
                            name: 'PickerView',
                            desc: '选择器'
                        }, {
                            path: '/demo/range-demo-0',
                            name: 'Range',
                            desc: '区域选择'
                        }, {
                            path: '/demo/radio-demo-0',
                            name: 'Radio',
                            desc: '单选框'
                        }, {
                            path: '/demo/search-bar-demo-0',
                            name: 'SearchBar',
                            desc: '搜索栏'
                        }, {
                            path: '/demo/slider-demo-0',
                            name: 'Slider',
                            desc: '滑动输入条'
                        }, {
                            path: '/demo/stepper-demo-0',
                            name: 'Stepper',
                            desc: '步进器'
                        }, {
                            path: '/demo/switch-demo-0',
                            name: 'Switch',
                            desc: '滑动开关'
                        }, {
                            path: '/demo/textarea-item-demo-0',
                            name: 'TextAreaItem',
                            desc: '多行输入'
                        }]
                    }, {
                        categoryName:'数据展示',
                        category: 'Data Display',
                        children: [{
                            path: '/demo/accordion-demo-0',
                            name: 'Accordion',
                            desc: '手风琴'
                        }, {
                            path: '/demo/badge-demo-0',
                            name: 'Badge',
                            desc: '徽标数'
                        }, {
                            path: '/demo/card-demo-0',
                            name: 'Card',
                            desc: '卡片'
                        }, {
                            path: '/demo/carousel-demo-0',
                            name: 'Carousel',
                            desc: '走马灯'
                        }, {
                            path: '/demo/grid-demo-0',
                            name: 'Grid',
                            desc: '栅格'
                        }, {
                            path: '/demo/icon-demo-0',
                            name: 'Icon',
                            desc: '图标'
                        }, {
                            path: '/demo/list-demo-0',
                            name: 'List',
                            desc: '列表'
                        }, {
                            path: '/demo/notice-bar-demo-0',
                            name: 'NoticeBar',
                            desc: '通告栏'
                        }, {
                            path: '/demo/steps-demo-0',
                            name: 'Steps',
                            desc: '步骤条'
                        }, {
                            path: '/demo/tag-demo-0',
                            name: 'Tag',
                            desc: '标签'
                        }]
                    }, {
                        categoryName:'操作反馈',
                        category: 'Feedback',
                        children: [{
                            path: '/demo/action-sheet-demo-0',
                            name: 'ActionSheet',
                            desc: '动作面板'
                        }, {
                            path: '/demo/activity-indicator-demo-0',
                            name: 'ActivityIndicator',
                            desc: '活动指示器'
                        }, {
                            path: '/demo/modal-demo-0',
                            name: 'Modal',
                            desc: '对话框'
                        }, {
                            path: '/demo/progress-demo-0',
                            name: 'Progress',
                            desc: '进度条'
                        }, {
                            path: '/demo/popup-demo-0',
                            name: 'Popup',
                            desc: '弹出层'
                        }, {
                            path: '/demo/toast-demo-0',
                            name: 'Toast',
                            desc: '轻提示'
                        }]
                    }, {
                        categoryName:'手势',
                        category: 'Gesture',
                        children: [{
                            path: '/demo/refresh-control-demo-0',
                            name: 'RefreshControl',
                            desc: '下拉刷新'
                        }, {
                            path: '/demo/swipe-action-demo-0',
                            name: 'SwipeAction',
                            desc: '滑动操作'
                        }]
                    }, {
                        categoryName:'组合组件',
                        category: 'Combination',
                        children: [{
                            path: '/demo/list-view-demo-0',
                            name: 'ListView',
                            desc: '长列表'
                        }, {
                            path: '/demo/result-demo-0',
                            name: 'Result',
                            desc: '结果页'
                        }]
                    }
                ]
            };
        },
        components: {
            'category': Category
        }
    };
</script>

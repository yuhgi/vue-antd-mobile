<style lang="less">
    .nav-menu {
        outline: none;
        margin-bottom: 0;
        padding-left: 0;
        list-style: none;
        box-shadow: none;
        color: rgba(0, 0, 0, .65);
        font-weight: normal;
        background: #fff;
        line-height: 46px;
        border-right: 1px solid #e9e9e9;
        .nav-menu-item {
            position: relative;
            padding: 0 16px;
            padding-left: 24px;
            font-size: 14px;
            line-height: 42px;
            height: 42px;
            overflow: hidden;
            text-overflow: ellipsis;
            a {
                color: rgba(0, 0, 0, .65);
                text-decoration: none;
                &:hover {
                    color: #108ee9;
                }
                &:active {
                    color: #108ee9;
                }
                &:before {
                    position: absolute;
                    background-color: transparent;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    content: "";
                }
                .chinese {
                    font-size: 12px;
                    margin-left: 6px;
                    font-weight: 400;
                    opacity: .67;
                }
            }
        }
        .nav-menu-item-selected{
            background-color: #ecf6fd;
            color: #108ee9;
            &>a,
            &>a:hover {
                color: #108ee9;
            }
        }
        .nav-menu-item:after {
            content: "";
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            border-right: 3px solid #108ee9;
            transform: scaleY(.0001);
            transition: all .2s;
        }
        .nav-menu-item-selected:after{
            transform: scaleY(1);
        }

        .nav-menu-submenu{
            position: relative;
            cursor: pointer;
            transition: all .3s;
            .nav-menu-submenu-title{
                position: relative;
                display: block;
                margin: 0;
                padding: 0 16px;
                padding-left:24px; 
                font-size: 12px;
                line-height: 42px;
                height: 42px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                cursor: pointer;
                transition: all .3s;
                h4{
                    font-size: 14px;
                }
            }
        }

        .nav-menu-group{
            .nav-menu-group-title{
                color: rgba(0,0,0,.43);
                font-size: 12px;
                line-height: 1.5;
                padding: 8px 16px;
                padding-left:32px; 
                cursor: default;
            }
            .nav-menu-group-list{
                margin: 0;
                padding: 0;
                .nav-menu-item{
                    padding-left:48px; 
                }
            }
        }
    }
</style>

<template>
    <div class="navbar-container">
        <ul class="nav-menu">
            <router-link to="/get-started" tag="li" class="nav-menu-item" activeClass="nav-menu-item-selected">
                <a>快速上手</a>
            </router-link>
            <li class="nav-menu-submenu" >
                <div class="nav-menu-submenu-title" :style="{'cursor':'default'}"><h4>Components</h4></div>
                <ul class="nav-menu">
                    <li class="nav-menu-group" v-for="categoryData in components" :key="categoryData.category">
                        <div class="nav-menu-group-title">{{categoryData.category}}</div>
                        <ul class="nav-menu-group-list">
                            <router-link 
                                tag="li" 
                                class="nav-menu-item" 
                                activeClass="nav-menu-item-selected"
                                v-for="componentData in categoryData.children"
                                :key="componentData.path"
                                :to="componentData.path" 
                            >
                                <a>
                                    <span>{{componentData.name}}</span>
                                    <span class="chinese">{{componentData.desc}}</span>
                                </a>
                            </router-link>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'nav-bar',
    data(){
        return {
            components:[
                {
                    category:'Layout',
                    children:[{
                        path:'/components/flex',
                        name:'Flex',
                        desc:'Flex布局'
                    },{
                        path:'/components/wing-blank',
                        name:'WingBlank',
                        desc:'两翼留白'
                    },{
                        path:'/components/white-space',
                        name:'WhiteSpace',
                        desc:'上下留白'
                    }]
                },{
                    category:'Navigation',
                    children:[{
                        path:'/components/drawer',
                        name:'drawer',
                        desc:'抽屉'
                    },{
                        path:'/components/menu',
                        name:'Menu',
                        desc:'菜单'
                    },{
                        path:'/components/nav-bar',
                        name:'NavBar',
                        desc:'导航栏'
                    },{
                        path:'/components/popover',
                        name:'Popover',
                        desc:'气泡'
                    },{
                        path:'/components/pagination',
                        name:'Pagination',
                        desc:'分页器'
                    },{
                        path:'/components/segmented-control',
                        name:'SegmentedControl',
                        desc:'分段器'
                    },{
                        path:'/components/tabs',
                        name:'Tabs',
                        desc:'标签页'
                    },{
                        path:'/components/tab-bar',
                        name:'TabBar',
                        desc:'标签栏'
                    }]
                },{
                    category:'Data Entry',
                    children:[{
                        path:'/components/button',
                        name:'Button',
                        desc:'按钮'
                    },{
                        path:'/components/checkbox',
                        name:'Checkbox',
                        desc:'复选框'
                    },{
                        path:'/components/date-picker',
                        name:'DatePicker',
                        desc:'日期选择'
                    },{
                        path:'/components/image-picker',
                        name:'ImagePicker',
                        desc:'图片选择器'
                    },{
                        path:'/components/input-item',
                        name:'InputItem',
                        desc:'文本输入'
                    },{
                        path:'/components/picker',
                        name:'Picker',
                        desc:'选择器'
                    },{
                        path:'/components/picker-view',
                        name:'PickerView',
                        desc:'选择器'
                    },{
                        path:'/components/range',
                        name:'Range',
                        desc:'区域选择'
                    },{
                        path:'/components/radio',
                        name:'Radio',
                        desc:'单选框'
                    },{
                        path:'/components/search-bar',
                        name:'SearchBar',
                        desc:'搜索栏'
                    },{
                        path:'/components/slider',
                        name:'Slider',
                        desc:'滑动输入条'
                    },{
                        path:'/components/stepper',
                        name:'Stepper',
                        desc:'步进器'
                    },{
                        path:'/components/switch',
                        name:'Switch',
                        desc:'滑动开关'
                    },{
                        path:'/components/textarea-item',
                        name:'TextareaItem',
                        desc:'多行输入'
                    }]
                },{
                    category:'Data Display',
                    children:[{
                        path:'/components/accordion',
                        name:'Accordion',
                        desc:'手风琴'
                    },{
                        path:'/components/badge',
                        name:'Badge',
                        desc:'徽标数'
                    },{
                        path:'/components/card',
                        name:'Card',
                        desc:'卡片'
                    },{
                        path:'/components/carousel',
                        name:'Carousel',
                        desc:'走马灯'
                    },{
                        path:'/components/grid',
                        name:'Grid',
                        desc:'栅格'
                    },{
                        path:'/components/icon',
                        name:'Icon',
                        desc:'图标'
                    },{
                        path:'/components/list',
                        name:'List',
                        desc:'列表'
                    },{
                        path:'/components/notice-bar',
                        name:'NoticeBar',
                        desc:'通告栏'
                    },{
                        path:'/components/steps',
                        name:'Steps',
                        desc:'步骤条'
                    },{
                        path:'/components/tag',
                        name:'Tag',
                        desc:'标签'
                    }]
                },{
                    category:'Feedback',
                    children:[{
                        path:'/components/action-sheet',
                        name:'ActionSheet',
                        desc:'动作面板'
                    },{
                        path:'/components/activity-indicator',
                        name:'ActivityIndicator',
                        desc:'活动指示器'
                    },{
                        path:'/components/modal',
                        name:'Modal',
                        desc:'对话框'
                    },{
                        path:'/components/progress',
                        name:'Progress',
                        desc:'进度条'
                    },{
                        path:'/components/popup',
                        name:'Popup',
                        desc:'弹出层'
                    },{
                        path:'/components/toast',
                        name:'Toast',
                        desc:'轻提示'
                    }]
                },{
                    category:'Gesture',
                    children:[{
                        path:'/components/refresh-control',
                        name:'RefreshControl',
                        desc:'下拉刷新'
                    },{
                        path:'/components/swipe-action',
                        name:'SwipeAction',
                        desc:'滑动操作'
                    }]
                },{
                    category:'Combination',
                    children:[{
                        path:'/components/list-view',
                        name:'ListView',
                        desc:'长列表'
                    },{
                        path:'/components/result',
                        name:'Result',
                        desc:'结果页'
                    }]
                }
            ]
        };
    }
};
</script>

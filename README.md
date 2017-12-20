# vue-antd-mobile

> Ant Design mobile of Vue

- 实现基于 [Vue2.0](https://github.com/vuejs/vue)
- 组件库样式使用 [Ant Design Mobile](https://github.com/ant-design/ant-design-mobile)

[![Build Status](https://travis-ci.org/yuhgi/vue-antd-mobile.svg?branch=master)](https://travis-ci.org/yuhgi/vue-antd-mobile)
[![Coverage Status](https://coveralls.io/github/yuhgi/vue-antd-mobile/badge.svg?branch=master)](https://coveralls.io/github/yuhgi/vue-antd-mobile?branch=master)

[Home 主页](https://yuhgi.github.io/vue-antd-mobile/)
[Demo 示例](https://yuhgi.github.io/vue-antd-mobile/mobile/index.html)

## Install 安装

正在开发中...

This module is still working in progress right now, so it is just for placeholder.

## Usage 使用

## Develop 开发

- build 打包
```
npm run build
```

- start docs dev-server 启动文档开发服务器
```
npm run start:desktop
```

- start demo dev-server 启动示例开发服务器
```
npm run start:mobile
```

- test 测试
```
npm test
```

## 目录结构

```
vue-antd-mobile/
|--lib/               组件库打包文件
|--docs/               文档 & 示例
|  |--desktop/         项目文档（for desktop）
|  |--mobile/          项目示例（for mobile）
|--scripts/            Webpack配置文件
|--src/                组件库源码
|  |--index.js         组件库入口
|  |--components/      组件库源文件
|  |--style/           组件库公共样式
|--sites/              文档 & 示例源码
|  |--desktop/         文档源码（for desktop）
|  |--mobile/          示例源码（for mobile）
|--test/               测试
|  |--unit             单元测试

```

## 组件完成情况

### Layout
 * Flex *Flex布局*
 * WingBlank *两翼留白*
 * WhiteSpace *上下留白* 

### Navigation

 * Drawer *抽屉*
 * ~~Menu~~ *菜单*
 * NavBar *导航栏*
 * ~~Pagination~~ *分页器*
 * ~~Popover~~ *气泡*
 * SegmentedControl *分段器*
 * ~~Tabs~~ *标签页*
 * ~~TabBar~~ *标签栏*

### Data Entry
 * Button *按钮*
 * Checkbox *复选框*
 * ~~DatePicker~~ *日期选择*
 * ~~ImagePicker~~ *图片选择*
 * ~~InputItem~~ *文本输入*
 * ~~PickerView~~ *选择器*
 * ~~Picker~~ *选择器*
 * Radio *单选框*
 * ~~Range~~ *区域选择*
 * ~~Switch~~ *滑动开关*
 * ~~SearchBar~~ *搜索栏*
 * ~~Slider~~ *滑动输入条*
 * ~~Stepper~~ *步进器*
 * ~~textareaItem~~ *多行输入*

### DataDisplay 
 * ~~Accordion~~ *手风琴*
 * ~~Badge~~ *徽标数*
 * ~~Carousel~~ *走马灯*
 * ~~Card~~ *卡片*
 * ~~Grid~~ *栅格*
 * Icon *图标*
 * List *列表*
 * ~~NoticeBar~~ *通告栏*
 * ~~Steps~~ *步骤条*
 * ~~Tag~~ *标签*

### Feedback 
 * ~~ActionSheet~~ *动作面板*
 * ActivityIndicator *活动指示器*
 * ~~Modal~~ *对话框*
 * Progress *进度条*
 * ~~Popup~~ *弹出层*
 * ~~Toast~~ *轻提示*

### Gesture 
 * ~~RefreshControl~~ *下拉刷新*
 * ~~SwipeAction~~ *滑动操作*

### Combination 
 * ~~ListView~~ *长列表*
 * ~~Result~~ *结果页*
 
## Reference 参考项目

- [ant-design-mobile](https://github.com/ant-design/ant-design-mobile)
- [element](https://github.com/ElemeFE/element)
- [mint-ui](https://github.com/ElemeFE/mint-ui)
- [vue-beauty](https://github.com/FE-Driver/vue-beauty)

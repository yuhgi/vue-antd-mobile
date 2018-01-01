import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


import GetStarted from '@/markdown/GetStarted.md';
import Tutorial from '@/markdown/Tutorial.md';

// layout
import Flex from '@/markdown/components/Flex.md';
import WingBlank from '@/markdown/components/WingBlank.md';
import WhiteSpace from '@/markdown/components/WhiteSpace.md';

// navigation
import Drawer from '@/markdown/components/Drawer.md';
import Menu from '@/markdown/components/Menu.md';
import NavBar from '@/markdown/components/NavBar.md';
import Popover from '@/markdown/components/Popover.md';
import Pagination from '@/markdown/components/Pagination.md';
import SegmentedControl from '@/markdown/components/SegmentedControl.md';
import Tabs from '@/markdown/components/Tabs.md';
import TabBar from '@/markdown/components/TabBar.md';

// data entry
import Button from '@/markdown/components/Button.md';
import Checkbox from '@/markdown/components/Checkbox.md';
import DatePicker from '@/markdown/components/DatePicker.md';
import ImagePicker from '@/markdown/components/ImagePicker.md';
import InputItem from '@/markdown/components/InputItem.md';
import Picker from '@/markdown/components/Picker.md';
import PickerView from '@/markdown/components/PickerView.md';
import Range from '@/markdown/components/Range.md';
import Radio from '@/markdown/components/Radio.md';
import SearchBar from '@/markdown/components/SearchBar.md';
import Slider from '@/markdown/components/Slider.md';
import Stepper from '@/markdown/components/Stepper.md';
import Switch from '@/markdown/components/Switch.md';
import TextAreaItem from '@/markdown/components/TextAreaItem.md';

// data display
import Accordion from '@/markdown/components/Accordion.md';
import Badge from '@/markdown/components/Badge.md';
import Card from '@/markdown/components/Card.md';
import Carousel from '@/markdown/components/Carousel.md';
import Grid from '@/markdown/components/Grid.md';
import Icon from '@/markdown/components/Icon.md';
import List from '@/markdown/components/List.md';
import NoticeBar from '@/markdown/components/NoticeBar.md';
import Steps from '@/markdown/components/Steps.md';
import Tag from '@/markdown/components/Tag.md';

// feedback
import ActionSheet from '@/markdown/components/ActionSheet.md';
import ActivityIndicator from '@/markdown/components/ActivityIndicator.md';
import Modal from '@/markdown/components/Modal.md';
import Progress from '@/markdown/components/Progress.md';
import Popup from '@/markdown/components/Popup.md';
import Toast from '@/markdown/components/Toast.md';

// gesture
import RefreshControl from '@/markdown/components/RefreshControl.md';
import SwipeAction from '@/markdown/components/SwipeAction.md';

// combination
import ListView from '@/markdown/components/ListView.md';
import Result from '@/markdown/components/Result.md';

const Components = { template: '<router-view></router-view>' };
import NotFound from '@/app/not-found.vue';

const router = new VueRouter({
    routes: [{
        path: '/',
        component: GetStarted
    }, {
        path: '/get-started',
        component: GetStarted
    }, {
        path: '/tutorial',
        component: Tutorial
    }, {
        path: '/components',
        component: Components,
        children: [,{
            path: '/',
            component: Flex
        }, {
            path: 'flex',
            component: Flex
        }, {
            path: 'wing-blank',
            component: WingBlank
        }, {
            path: 'white-space',
            component: WhiteSpace
        }, {
            path: 'drawer',
            component: Drawer
        }, {
            path: 'menu',
            component: Menu
        }, {
            path: 'nav-bar',
            component: NavBar
        }, {
            path: 'popover',
            component: Popover
        }, {
            path: 'pagination',
            component: Pagination
        },{
            path:'segmented-control',
            component:SegmentedControl
        }, {
            path: 'tabs',
            component: Tabs
        }, {
            path: 'tab-bar',
            component: TabBar
        },{
            path:'button',
            component:Button
        }, {
            path: 'checkbox',
            component: Checkbox
        }, {
            path: 'date-picker',
            component: DatePicker
        }, {
            path: 'image-picker',
            component: ImagePicker
        }, {
            path: 'input-item',
            component: InputItem
        }, {
            path: 'picker',
            component: Picker
        }, {
            path: 'picker-view',
            component: PickerView
        }, {
            path: 'range',
            component: Range
        }, {
            path: 'radio',
            component: Radio
        }, {
            path: 'search-bar',
            component: SearchBar
        }, {
            path: 'slider',
            component: Slider
        }, {
            path: 'stepper',
            component: Stepper
        }, {
            path: 'switch',
            component: Switch
        }, {
            path: 'textarea-item',
            component: TextAreaItem
        }, {
            path: 'accordion',
            component: Accordion
        }, {
            path: 'badge',
            component: Badge
        }, {
            path: 'card',
            component: Card
        }, {
            path: 'carousel',
            component: Carousel
        }, {
            path: 'grid',
            component: Grid
        }, {
            path: 'icon',
            component: Icon
        }, {
            path: 'list',
            component: List
        }, {
            path: 'notice-bar',
            component: NoticeBar
        }, {
            path: 'steps',
            component: Steps
        }, {
            path: 'tag',
            component: Tag
        }, {
            path: 'action-sheet',
            component: ActionSheet
        },{
            path:'activity-indicator',
            component:ActivityIndicator
        }, {
            path: 'modal',
            component: Modal
        }, {
            path: 'progress',
            component: Progress
        }, {
            path: 'popup',
            component: Popup
        }, {
            path: 'toast',
            component: Toast
        }, {
            path: 'refresh-control',
            component: RefreshControl
        }, {
            path: 'swipe-action',
            component: SwipeAction
        }, {
            path: 'list-view',
            component: ListView
        }, {
            path: 'result',
            component: Result
        }]
    },{
        path: '*',
        component: NotFound
    }]
});


export default router;
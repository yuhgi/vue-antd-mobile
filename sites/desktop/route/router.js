import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


import GetStarted from '@/docs/GetStarted.md';
import Tutorial from '@/docs/Tutorial.md';

// layout
import Flex from '@/docs/components/Flex.md';
import WingBlank from '@/docs/components/WingBlank.md';
import WhiteSpace from '@/docs/components/WhiteSpace.md';

// navigation
import Drawer from '@/docs/components/Drawer.md';
import Menu from '@/docs/components/Menu.md';
import NavBar from '@/docs/components/NavBar.md';
import Popover from '@/docs/components/Popover.md';
import Pagination from '@/docs/components/Pagination.md';
import SegmentedControl from '@/docs/components/SegmentedControl.md';
import Tabs from '@/docs/components/Tabs.md';
import TabBar from '@/docs/components/TabBar.md';

// data entry
import Button from '@/docs/components/Button.md';
import Checkbox from '@/docs/components/Checkbox.md';
import DatePicker from '@/docs/components/DatePicker.md';
import ImagePicker from '@/docs/components/ImagePicker.md';
import InputItem from '@/docs/components/InputItem.md';
import Picker from '@/docs/components/Picker.md';
import PickerView from '@/docs/components/PickerView.md';
import Range from '@/docs/components/Range.md';
import Radio from '@/docs/components/Radio.md';
import SearchBar from '@/docs/components/SearchBar.md';
import Slider from '@/docs/components/Slider.md';
import Stepper from '@/docs/components/Stepper.md';
import Switch from '@/docs/components/Switch.md';
import TextAreaItem from '@/docs/components/TextAreaItem.md';

// data display
import Accordion from '@/docs/components/Accordion.md';
import Badge from '@/docs/components/Badge.md';
import Card from '@/docs/components/Card.md';
import Carousel from '@/docs/components/Carousel.md';
import Grid from '@/docs/components/Grid.md';
import Icon from '@/docs/components/Icon.md';
import List from '@/docs/components/List.md';
import NoticeBar from '@/docs/components/NoticeBar.md';
import Steps from '@/docs/components/Steps.md';
import Tag from '@/docs/components/Tag.md';

// feedback
import ActionSheet from '@/docs/components/ActionSheet.md';
import ActivityIndicator from '@/docs/components/ActivityIndicator.md';
import Modal from '@/docs/components/Modal.md';
import Progress from '@/docs/components/Progress.md';
import Popup from '@/docs/components/Popup.md';
import Toast from '@/docs/components/Toast.md';

// gesture
import RefreshControl from '@/docs/components/RefreshControl.md';
import SwipeAction from '@/docs/components/SwipeAction.md';

// combination
import ListView from '@/docs/components/ListView.md';
import Result from '@/docs/components/Result.md';

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
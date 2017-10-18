import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import NotFound from '@/app/not-found.vue';

import Menu from '../app/menu';

// layout
import WingBlankDemo from '../app/demo/wing-blank/index.vue';
import WhiteSpaceDemo from '../app/demo/white-space/index.vue';
import FlexDemo from '../app/demo/flex/index.vue';

// navigation
import DrawerDemo from '../app/demo/drawer/index.vue';
import DrawerDockedDemo from '../app/demo/drawer-docked/index.vue';
import MenuDemo from '../app/demo/menu/index.vue';
import NavBarDemo from '../app/demo/nav-bar/index.vue';
import PopoverDemo from '../app/demo/popover/index.vue';
import PaginationDemo from '../app/demo/pagination/index.vue';
import SegmentedControlDemo from '../app/demo/segmented-control/index.vue';
import TabsDemo from '../app/demo/tabs/index.vue';
import TabBarDemo from '../app/demo/tab-bar/index.vue';

// data entry
import ButtonDemo from '../app/demo/button/index.vue';
import CheckboxDemo from '../app/demo/checkbox/index.vue';
import DatePickerDemo from '../app/demo/date-picker/index.vue';
import ImagePickerDemo from '../app/demo/image-picker/index.vue';
import InputItemDemo from '../app/demo/input-item/index.vue';
import PickerDemo from '../app/demo/picker/index.vue';
import PickerViewDemo from '../app/demo/picker-view/index.vue';
import RangeDemo from '../app/demo/range/index.vue';
import RadioDemo from '../app/demo/radio/index.vue';
import SearchBarDemo from '../app/demo/search-bar/index.vue';
import SliderDemo from '../app/demo/slider/index.vue';
import StepperDemo from '../app/demo/stepper/index.vue';
import SwitchDemo from '../app/demo/switch/index.vue';
import TextAreaItemDemo from '../app/demo/textarea-item/index.vue';

// data display
import AccordionDemo from '../app/demo/accordion/index.vue';
import BadgeDemo from '../app/demo/badge/index.vue';
import CardDemo from '../app/demo/card/index.vue';
import CarouselDemo from '../app/demo/carousel/index.vue';
import GridDemo from '../app/demo/grid/index.vue';
import IconDemo from '../app/demo/icon/index.vue';
import ListDemo from '../app/demo/list/index.vue';
import NoticeBarDemo from '../app/demo/notice-bar/index.vue';
import StepsDemo from '../app/demo/steps/index.vue';
import TagDemo from '../app/demo/tag/index.vue';

// feed back
import ActionSheetDemo from '../app/demo/action-sheet/index.vue';
import ActivityIndicatorDemo from '../app/demo/activity-indicator/index.vue';
import ModalDemo from '../app/demo/modal/index.vue';
import ProgressDemo from '../app/demo/progress/index.vue';
import PopupDemo from '../app/demo/popup/index.vue';
import ToastDemo from '../app/demo/toast/index.vue';

// gesture
import RefreshControlDemo from '../app/demo/refresh-control/index.vue';
import SwipeActionDemo from '../app/demo/swipe-action/index.vue';

// combination
import ListViewDemo from '../app/demo/list-view/index.vue';
import ResultDemo from '../app/demo/result/index.vue';

const router = new VueRouter({
    routes: [{
        path: '/',
        component: Menu
    }, {
        path: '/demo',
        component: { template: '<router-view></router-view>' },
        children: [{
            path: 'wing-blank-demo-0',
            component: WingBlankDemo
        }, {
            path: 'white-space-demo-0',
            component: WhiteSpaceDemo
        }, {
            path: 'flex-demo-0',
            component: FlexDemo
        }, {
            path: 'drawer-demo-0',
            component: DrawerDemo
        }, {
            path: 'drawer-demo-1',
            component: DrawerDockedDemo
        }, {
            path: 'menu-demo-0',
            component: MenuDemo
        }, {
            path: 'nav-bar-demo-0',
            component: NavBarDemo
        }, {
            path: 'popover-demo-0',
            component: PopoverDemo
        }, {
            path: 'pagination-demo-0',
            component: PaginationDemo
        }, {
            path: 'segmented-control-demo-0',
            component: SegmentedControlDemo
        }, {
            path: 'tabs-demo-0',
            component: TabsDemo
        }, {
            path: 'tab-bar-demo-0',
            component: TabBarDemo
        }, {
            path: 'button-demo-0',
            component: ButtonDemo
        }, {
            path: 'checkbox-demo-0',
            component: CheckboxDemo
        }, {
            path: 'date-picker-demo-0',
            component: DatePickerDemo
        }, {
            path: 'image-picker-demo-0',
            component: ImagePickerDemo
        }, {
            path: 'input-item-demo-0',
            component: InputItemDemo
        }, {
            path: 'picker-demo-0',
            component: PickerDemo
        }, {
            path: 'picker-view-demo-0',
            component: PickerViewDemo
        }, {
            path: 'range-demo-0',
            component: RangeDemo
        }, {
            path: 'radio-demo-0',
            component: RadioDemo
        }, {
            path: 'search-bar-demo-0',
            component: SearchBarDemo
        }, {
            path: 'slider-demo-0',
            component: SliderDemo
        }, {
            path: 'stepper-demo-0',
            component: StepperDemo
        }, {
            path: 'switch-demo-0',
            component: SwitchDemo
        }, {
            path: 'textarea-item-demo-0',
            component: TextAreaItemDemo
        }, {
            path: 'accordion-demo-0',
            component: AccordionDemo
        }, {
            path: 'badge-demo-0',
            component: BadgeDemo
        }, {
            path: 'card-demo-0',
            component: CardDemo
        }, {
            path: 'carousel-demo-0',
            component: CarouselDemo
        }, {
            path: 'grid-demo-0',
            component: GridDemo
        }, {
            path: 'icon-demo-0',
            component: IconDemo
        }, {
            path: 'list-demo-0',
            component: ListDemo
        }, {
            path: 'notice-bar-demo-0',
            component: NoticeBarDemo
        }, {
            path: 'steps-demo-0',
            component: StepsDemo
        }, {
            path: 'tag-demo-0',
            component: TagDemo
        }, {
            path: 'action-sheet-demo-0',
            component: ActionSheetDemo
        }, {
            path: 'activity-indicator-demo-0',
            component: ActivityIndicatorDemo
        }, {
            path: 'modal-demo-0',
            component: ModalDemo
        }, {
            path: 'progress-demo-0',
            component: ProgressDemo
        }, {
            path: 'popup-demo-0',
            component: PopupDemo
        }, {
            path: 'toast-demo-0',
            component: ToastDemo
        }, {
            path: 'refresh-control-demo-0',
            component: RefreshControlDemo
        }, {
            path: 'swipe-action-demo-0',
            component: SwipeActionDemo
        }, {
            path: 'list-view-demo-0',
            component: ListViewDemo
        }, {
            path: 'result-demo-0',
            component: ResultDemo
        }]
    }, {
        path: '*',
        component: NotFound
    }]
});

export default router;
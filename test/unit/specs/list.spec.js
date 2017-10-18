import Vue from 'vue';
import {createVM,createRenderedComp,triggerEvent} from '../util/util';
import {List} from '../../../src';
const ListItem = List.ListItem;

describe('List',() => {
    beforeAll(() => {
        Vue.use(List);
    });
    it('set the correct default props',() => {
        let vm = createVM(List);
        let {prefixCls} = vm.$props;
        expect(prefixCls).toBe('am-list');
    });

    it('render the correct classes',() => {
        let vm = createRenderedComp(List);
        expect(vm.$el.classList.contains('am-list')).toBe(true);
    });

    it('set the correct slot',() => {
        let vm = createVM('\
            <am-list>\
                <template slot="header">header</template>\
                content\
                <template slot="footer">footer</template>\
            </am-list>\
        ',true);
        let headerEl = vm.$el.querySelector('.am-list-header');
        let bodyEl = vm.$el.querySelector('.am-list-body');
        let footerEl = vm.$el.querySelector('.am-list-footer');
        expect(headerEl.textContent).toBe('header');
        expect(bodyEl.textContent).toMatch(/content/);
        expect(footerEl.textContent).toBe('footer');
    });
});

describe('ListItem',() => {
    describe('set the correct props',() => {
        it('prefixCls',() => {
            let vm = createRenderedComp(ListItem,{prefixCls:'am-prefix-list'});
            expect(vm.$props.prefixCls).toBe('am-prefix-list');
        });
        it('arrow',() => {
            let vm = createRenderedComp(ListItem,{arrow:'horizontal'});
            expect(vm.$props.arrow).toBe('horizontal');
        });
        it('align',() => {
            let vm = createRenderedComp(ListItem,{arrow:'top'});
            expect(vm.$props.arrow).toBe('top');
        });
        it('error',() => {
            let vm = createRenderedComp(ListItem,{error:true});
            expect(vm.$props.error).toBe(true);
        });
        it('multipleLine',() => {
            let vm = createRenderedComp(ListItem,{multipleLine:true});
            expect(vm.$props.multipleLine).toBe(true);
        });
        it('wrap',() => {
            let vm = createRenderedComp(ListItem,{wrap:true});
            expect(vm.$props.wrap).toBe(true);
        });
        it('activeStyle',() => {
            let vm = createRenderedComp(ListItem,{activeStyle:{}});
            expect(vm.$props.activeStyle).toEqual({});
        });
        it('platform',() => {
            let vm = createRenderedComp(ListItem,{});
            expect(vm.$props.platform).toBe('cross');
        });
        it('active',() => {
            let vm = createRenderedComp(ListItem,{});
            expect(vm.$props.active).toBe(true);
        });
    });
    describe('set the correct data',() => {
        beforeAll(() => {
            Vue.use(ListItem);
        });
        it('wrapCls',() => {
            let vm = createRenderedComp(ListItem,{
                disabled:true,
                align:'top',
                error:true
            });
            expect(vm.wrapCls['am-list-item-disabled']).toBe(true);
            expect(vm.wrapCls['am-list-item-top']).toBe(true);
            expect(vm.wrapCls['am-list-item-error']).toBe(true);
        });
        it('wrapStyle',(done) => {
            let vm = createRenderedComp(ListItem,{
                activeStyle:{color:'#F00'}
            });
            triggerEvent(vm.$el,'click');
            vm.$nextTick(() => {
                expect(vm.wrapStyle).toEqual({color:'#F00'});
                done();
            });
        });
        it('rippleClicked',(done) => {
            let vm = createRenderedComp(ListItem,{platform:'android'});
            triggerEvent(vm.$el,'click');
            expect(vm.rippleClicked).toBe(true);
            setTimeout(() => {
                expect(vm.rippleClicked).not.toBe(true);
                done();
            }, 1200);
        });
        it('activeClicked',(done) => {
            let vm = createRenderedComp(ListItem);
            triggerEvent(vm.$el,'click');
            expect(vm.activeClicked).toBe(true);
            setTimeout(() => {
                expect(vm.activeClicked).not.toBe(true);
                done();
            }, 200);
        });
        it('activeTimer',(done) => {
            let vm = createRenderedComp(ListItem);
            expect(vm.activeTimer).toBeUndefined();
            triggerEvent(vm.$el,'click');
            vm.$nextTick(() => {
                expect(vm.activeTimer).not.toBeUndefined();
                done();
            });
        });
        it('debounceTimer',(done) => {
            let vm = createRenderedComp(ListItem,{platform:'android'});
            expect(vm.debounceTimer).toBeUndefined();
            triggerEvent(vm.$el,'click');
            vm.$nextTick(() => {
                expect(vm.debounceTimer).not.toBeUndefined();
                done();
            });
        });
    });
    describe('set the correct slot',() => {
        it('thumb',() => {
            let vm = createVM('\
                <am-list-item>\
                    <template slot="thumb">thumb</template>\
                    content\
                    <template slot="extra">extra</template>\
                </am-list-item>\
            ',true);
            let extraEl = vm.$el.querySelector('.am-list-thumb');
            expect(extraEl.textContent).toEqual('thumb');
        });
        it('extra',() => {
            let vm = createVM('\
                <am-list-item>\
                    <template slot="thumb">thumb</template>\
                    content\
                    <template slot="extra">extra</template>\
                </am-list-item>\
            ',true);
            let extraEl = vm.$el.querySelector('.am-list-extra');
            expect(extraEl.textContent).toEqual('extra');
        });
    });
    describe('set the correct event',() => {
        it('click',(done) => {
            let result;
            let vm = createVM({
                template:'\
                    <am-list-item @click="onClick" platform="android">\
                        <template slot="thumb">thumb</template>\
                        content\
                        <template slot="extra">extra</template>\
                    </am-list-item>\
                ',
                methods:{
                    onClick(){
                        result = 'clicked';
                    }
                }
            },true);
            vm.$el.click();
            vm.$nextTick(() => {
                expect(result).not.toBeUndefined();
                done();
            });
            
        });
    });
});
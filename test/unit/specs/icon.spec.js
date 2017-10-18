import {createVM,createRenderedComp} from '../util/util';
import {Icon} from '../../../src';

describe('Icon',() => {
    describe('set the correct props',() => {
        it('prefixCls',() => {
            let vm = createRenderedComp(Icon,{type:'check'});
            expect(vm.$props.prefixCls).toBe('am-icon');
        });
        it('type',() => {
            let vm = createRenderedComp(Icon,{type:'check-circle'});
            expect(vm.$props.type).toBe('check-circle'); 
        });
        it('size',() => {
            let vm = createRenderedComp(Icon,{type:'check',size:'md'});
            expect(vm.$props.size).toBe('md'); 
        });
    });
    describe('render the correct classes',() => {
        it('type',() => {
            let vm = createRenderedComp(Icon,{
                type:{
                    default:{
                        id:'check'
                    }
                }
            },true);
            
            expect(vm.$el.classList.contains('am-icon')).toBe(true);
            let vm1 = createRenderedComp(Icon,{
                type:'unknown'
            },true);
            expect(vm1.xlinkHref).toBeUndefined();
        });
    });
});
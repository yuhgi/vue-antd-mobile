import {createVM,createRenderedComp} from '../util/util';
import {WhiteSpace} from '../../../src';

describe('WhiteSpace',() => {
    it('set the correct default props',() => {
        let vm = createVM(WhiteSpace);
        let {prefixCls,size} = vm.$props;
        expect(prefixCls).toBe('am-whitespace');
        expect(size).toBe('md');
    });
    it('render the correct classes',() => {
        let vm = createRenderedComp(WhiteSpace);
        expect(vm.$el.className).toBe('am-whitespace am-whitespace-md');
        let vmSM = createRenderedComp(WhiteSpace,{size:'sm'});
        expect(vmSM.$el.className).toBe('am-whitespace am-whitespace-sm');
    });
});
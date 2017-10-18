import {createVM,createRenderedComp} from '../util/util';
import {WingBlank} from '../../../src';

describe('WingBlank',() => {
    it('set the correct default props',() => {
        let vm = createVM(WingBlank);
        let {prefixCls,size} = vm.$props;
        expect(prefixCls).toBe('am-wingblank');
        expect(size).toBe('md');
    });
    it('render the correct classes',() => {
        let vm = createRenderedComp(WingBlank);
        expect(vm.$el.className).toBe('am-wingblank am-wingblank-md');
        let vmSM = createRenderedComp(WingBlank,{size:'sm'});
        expect(vmSM.$el.className).toBe('am-wingblank am-wingblank-sm');
    });
});
import {createVM,createRenderedComp} from '../util/util';
import {Flex} from '../../../src';
const FlexItem = Flex.FlexItem;

describe('Flex',() => {
    it('set the correct default props',() => {
        let vm = createVM(Flex);
        let {prefixCls,align} = vm.$props;
        expect(prefixCls).toBe('am-flexbox');
        expect(align).toBe('center');
    });
    it('render the correct classes',() => {
        let vm = createRenderedComp(Flex);
        expect(vm.$el.className).toBe('am-flexbox am-flexbox-align-middle');

        let dirVM = createRenderedComp(Flex,{direction:'row'});
        expect(dirVM.$el.className).toMatch(/am-flexbox-dir-row/);

        let wrapVM = createRenderedComp(Flex,{wrap:'wrap-reverse'});
        expect(wrapVM.$el.className).toMatch(/am-flexbox-wrap-reverse/);

        let justifyVM = createRenderedComp(Flex,{justify:'between'});
        expect(justifyVM.$el.className).toMatch(/am-flexbox-justify-between/);

        let alignVM = createRenderedComp(Flex,{align:'baseline'});
        expect(alignVM.$el.className).toMatch(/am-flexbox-align-baseline/);

        let alignContentVM = createRenderedComp(Flex,{alignContent:'stretch'});
        expect(alignContentVM.$el.className).toMatch(/am-flexbox-align-content-stretch/);
    });
});

describe('FlexItem',() => {
    describe('set the correct props',() => {
        it('prefixCls',() => {
            let vm = createRenderedComp(FlexItem,{prefixCls:'am-prefix-flexitem'});
            expect(vm.prefixCls).toBe('am-prefix-flexitem');
        });
    });
});
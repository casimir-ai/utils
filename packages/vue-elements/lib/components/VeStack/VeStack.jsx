import './VeStack.scss';

import { convertToUnit } from '@casimir/toolbox';
import { genBreakpointCssVarsStyles, genBreakpointProps, defineComponent } from '../../util';

/**
 * Simple grid that can be displayed as rows or columns
 */
export default defineComponent({
  name: 'VeStack',

  props: {
    ...genBreakpointProps('gap', [Number, String]),
    ...genBreakpointProps(
      'flow',
      [Number, String],
      (val) => ['column', 'row', ''].includes(val),
    ),
    ...genBreakpointProps('templateColumns', [String])
  },

  computed: {
    styles() {
      const transformer = (val) => convertToUnit(val);
      return {
        ...genBreakpointCssVarsStyles.call(this, 'gap', transformer),
        ...genBreakpointCssVarsStyles.call(this, 'flow'),
        ...genBreakpointCssVarsStyles.call(this, 'templateColumns')
      };
    }
  },

  render() {
    return (
      <div
        class='ve-stack'
        style={this.styles}
      >
        {this.$slots.default}
      </div>
    );
  }
});

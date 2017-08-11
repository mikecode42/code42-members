import styled from 'styled-components';
import MaterialButton from 'material-ui/Button';

import config from '../../../../../config';

export default styled(MaterialButton)`
  width: 100%;

  ${config.breakpoint.medium} {
    /* Need extra specificity to override the material styles */
    && { display: none; }
  }
`;

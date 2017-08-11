import styled from 'styled-components';
import MaterialList from 'material-ui/List';

import config from '../../../../config';

export default styled(MaterialList)`
  width: 100%;
  /* 16px is the padding on the material-ui List */
  height: calc(100vh - 16px);
  overflow: auto;
  background-color: #ffffff;

  ${config.breakpoint.medium} {
    max-width: 300px;
  }
`;

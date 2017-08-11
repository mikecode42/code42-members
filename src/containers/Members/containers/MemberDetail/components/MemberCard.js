import styled from 'styled-components';
import MaterialCard, { CardContent as MaterialCardContent, CardMedia as MaterialCardMedia } from 'material-ui/Card';

import config from '../../../../../config';

export default styled(MaterialCard)`
  position: absolute;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  width: 100%;
  /* Need extra specificity to override the material styles */
  && {
    overflow-y: auto;
  }

  ${config.breakpoint.medium} {
    position: relative;
    max-height: calc(100vh - ${config.spacing.TWO});
    margin: ${config.spacing.ONE};
  }
`;

export const CardMedia = styled(MaterialCardMedia)`
  flex: 0;
  margin: auto;
`;

export const CardContent = styled(MaterialCardContent)`
  flex: 1;
`;

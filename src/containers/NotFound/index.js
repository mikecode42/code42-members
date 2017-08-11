import React from 'react';
import styled from 'styled-components';
import Typography from 'material-ui/Typography';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
`;

export default () =>
  (<Container>
    <Typography type="headline">Page not found</Typography>
  </Container>);

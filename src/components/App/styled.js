import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Helvetica';
    font-size: 24px;
    color: #000;
  }
`;

export const StyledWrapper = styled.div`
  width: 1240px;
  margin: 0 auto;
`;

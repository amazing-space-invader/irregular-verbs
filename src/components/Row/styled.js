import styled from 'styled-components';

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledColumn = styled.div`
  padding: 20px;
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 0;
  ${(props) => props.head && 'font-size: 0.75em;'}
  ${(props) => props.head && 'color: #a3a3a3;'}
`;

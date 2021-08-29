import styled from '@emotion/styled';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Card = styled.li`
  display: flex;
  align-items: center;
  width: 400px;
  min-height: 110px;
  padding: 8px 16px;
  background-color: ${props => props.theme.mainBgColor};
  box-shadow: 0 2px 3px 3px ${props => props.theme.boxShadowColor};
`;

export { List, Card };

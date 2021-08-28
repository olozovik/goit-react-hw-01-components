import styled from '@emotion/styled';

const Section = styled.section`
  order: 2;
  font-family: ${props => props.theme.font};
`;

const Title = styled.h2`
  margin: 0;
  max-width: 100%;
  padding: 30px 80px;
  text-align: center;
  color: ${props => props.theme.statisticTitleColor};
  text-transform: uppercase;
  background-color: ${props => props.theme.mainBgColor};
`;

const StatList = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
  color: ${props => props.theme.statisticStatsColor};
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 67px;

  &:nth-of-type(4n + 1) {
    background-color: #50c4f3;
  }
  &:nth-of-type(4n + 2) {
    background-color: #a43cf3;
  }
  &:nth-of-type(4n + 3) {
    background-color: #e64c66;
  }
  &:nth-of-type(4n + 4) {
    background-color: #20b8c5;
  }
`;

const Label = styled.span`
  margin-bottom: 10px;
  font-size: 12px;
`;

export { Section, Title, StatList, Item, Label };

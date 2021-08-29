import styled from '@emotion/styled';

const Table = styled.table`
  width: 870px;
  min-width: 400px;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 1px 2px 3px 2px ${props => props.theme.boxShadowColor};
`;

const TableHead = styled.thead`
  background-color: ${props => props.theme.tableHeadBgColor};
  color: ${props => props.theme.statisticStatsColor};
  text-transform: uppercase;
  & th {
    width: 33%;
    padding: 20px;
    border: 1px solid ${props => props.theme.statisticStatsColor};
    &:nth-of-type(1) {
      padding: 20px 20px 20px 110px;
      text-align: left;
    }
  }
`;

const TR = styled.tr`
  background-color: ${props => props.theme.tableSecondaryBgColor};
  color: ${props => props.theme.statisticTitleColor};
  &:nth-of-type(2n + 1) {
    background-color: ${props => props.theme.mainBgColor};
  }
`;

const TableBody = styled.tbody`
  & td:not(:last-child) {
    border-right: 1px solid ${props => props.theme.borderColor};
  }
`;

const TD = styled.td`
  width: 33%;
  padding: 20px;
  text-align: center;
`;

const Type = styled.td`
  width: 33%;
  text-transform: capitalize;
  text-align: left;
  padding: 20px 20px 20px 110px;
`;

export { Table, TableHead, TableBody, TD, Type, TR };

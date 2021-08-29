import styled from '@emotion/styled';

const Card = styled.div`
  width: 250px;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${props => props.theme.mainBgColor};
  box-shadow: 0 0 2px 1px ${props => props.theme.boxShadowColor};
  font-family: ${props => props.theme.font};
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

const Avatar = styled.img`
  display: block;
  margin-bottom: 30px;
  width: 100px;
  height: 100px;
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 50%;
`;

const Name = styled.p`
  margin: 0 0 10px;
  font-size: 18px;
  font-weight: 700;
  color: ${props => props.theme.mainColor};
`;

const Tag = styled.p`
  margin: 0 0 10px;
  font-size: 14px;
  color: ${props => props.theme.secondaryColor};
`;

const Location = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${props => props.theme.secondaryColor};
`;

const Stats = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
  background-color: ${props => props.theme.secondaryBgColor};
`;

const StatsItem = styled.li`
  width: 100%;
  padding: 15px 5px;
  border: 1px solid ${props => props.theme.borderColor};
`;

const Label = styled.span`
  display: block;
  margin-bottom: 9px;
  font-size: 14px;
  text-align: center;
`;

const Quantity = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
`;

export {
  Card,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  StatsItem,
  Label,
  Quantity,
};

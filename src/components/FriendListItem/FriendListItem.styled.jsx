import styled from '@emotion/styled';

const Status = styled.span`
  display: block;
  margin-right: 15px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${props => {
    if (props.status) {
      return 'green';
    }
    return 'red';
  }};
`;

const Avatar = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 8px;
  margin-right: 15px;
`;

const Name = styled.p`
  font-family: ${props => props.theme.font};
  font-size: 22px;
  font-weight: 700;
`;

export { Status, Avatar, Name };

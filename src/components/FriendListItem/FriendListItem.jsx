import PropTypes from 'prop-types';
import { Status, Avatar, Name } from './FriendListItem.styled';

function FriendListItem({ name, avatar, status }) {
  return (
    <>
      <Status status={status} />
      <Avatar className="avatar" src={avatar} alt={name} width="48" />
      <Name className="name">{name}</Name>
    </>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  status: PropTypes.bool.isRequired,
};

export { FriendListItem };

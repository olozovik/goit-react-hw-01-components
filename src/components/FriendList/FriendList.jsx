import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { List, Card } from './FriendList.styled';

function FriendList({ friends }) {
  return (
    <List>
      {friends.map(item => {
        const { name, avatar, isOnline, id } = item;
        return (
          <Card key={id}>
            <FriendListItem name={name} avatar={avatar} status={isOnline} />
          </Card>
        );
      })}
    </List>
  );
}
export { FriendList };

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

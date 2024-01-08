import { FriendItem } from 'components/FriendItem/FriendItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(friend => (
        < FriendItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};
import css from './FriendsList.module.css';
import FriendsListItem from '../FriendsListItem/FriendsListItem';

export default function FriendsList({ friend }) {
  return (
    <ul className={css.friendsList}>
      {friend.map(friendCard => (
        <li key={friendCard.id} className={css.friendItem}>
          <FriendsListItem friend={friendCard} />
        </li>
      ))}
    </ul>
  );
}

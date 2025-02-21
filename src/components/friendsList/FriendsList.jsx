import css from './FriendsList.module.css';
import FriendsListItem from './FriendsListItem';

export default function FriendsList({ friend }) {
  return (
    <ul>
      {friend.map(friendCard => (
        <li key={friendCard.id}>
          <FriendsListItem friend={friendCard} />
        </li>
      ))}
    </ul>
  );
}

import clsx from 'clsx';
import css from './FrinedsListItem.module.css';

export default function FriendsListItem({
  friend: { avatar, name, isOnline },
}) {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={clsx(css.noMargin, css.friendsName)}>{name}</p>
      <p className={clsx(css.noMargin, isOnline ? css.online : css.offline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}

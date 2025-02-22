import css from './Profile.module.css';
import clsx from 'clsx';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profileCard}>
      <div>
        <img src={image} alt="User avatar" className={css.profilePicture} />
        <p className={css.profileUserName}>{name}</p>
        <p className={css.profilePersonalInfo}>@{tag}</p>
        <p className={css.profilePersonalInfo}>{location}</p>
      </div>

      <ul className={css.userInfoBox}>
        <li className={css.userInfoItem}>
          <span>Followers</span>
          <span className={css.userStats}>{stats.followers}</span>
        </li>
        <li className={clsx(css.userInfoItem, css.border)}>
          <span>Views</span>
          <span className={css.userStats}>{stats.views}</span>
        </li>
        <li className={css.userInfoItem}>
          <span>Likes</span>
          <span className={css.userStats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

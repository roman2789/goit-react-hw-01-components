import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={css.friend__item}>
      <span className={isOnline ? css.status_online : css.status_ofline}></span>
      <img
        className={css.friend__avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.friend__name}>{name}</p>
    </li>
  );
};

import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friends__list}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id} className={css.friend__item}>
          <span
            className={isOnline ? css.status_online : css.status_ofline}
          ></span>
          <img
            className={css.friend__avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.friend__name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      name: PropTypes.string,
    })
  ),
};

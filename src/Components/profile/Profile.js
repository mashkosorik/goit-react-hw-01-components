import React from "react";
import s from "../profile/profile.module.css";
import PropTypes from "prop-types";

const Profile = ({ user }) => {
  const { avatar, name, tag, location } = user;
  const { followers, views, likes } = user.stats;
  return (
    <>
      <div className={s.profile}>
        <div className={s.description}>
          <img src={avatar} alt="Аватар пользователя" className={s.avatar} />
          <p className={s.name}>{name}</p>
          <p className="tag">{tag}</p>
          <p className="location">{location}</p>
        </div>

        <ul className={s.stats}>
          <li>
            <span className="label">Followers: </span>
            <span className="quantity">{followers}</span>
          </li>
          <li>
            <span className="label">Views: </span>
            <span className="quantity">{views}</span>
          </li>
          <li>
            <span className="label">Likes: </span>
            <span className="quantity">{likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

Profile.defaultProps = {
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg',
  name: 'name',
  followers: 0,
  views: 0,
  likes: 0,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
export default Profile;

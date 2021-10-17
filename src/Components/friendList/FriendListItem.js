import React from "react";
import style from "../friendList/FriendList.module.css";
import PropTypes from "prop-types";
const FriendListItem = ({ item }) => {
  const { avatar, name, isOnline } = item;

  return (
    <li className={style.itemList}>
      <span className={isOnline ? style.offline : style.online}></span>
      <img className={style.itemListAvatar} src={avatar} alt="" width="48px" />
      <p className={style.itemListName}>{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  isOnline: false,
  avatar: "https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg",
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  item: PropTypes.object,
};
export default FriendListItem;

import React from "react";
import style from "../friendList/FriendList.module.css";
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <div className={style.profile} >
      <ul className={style.item} >
        {friends.map((item, id) => (
          <FriendListItem item={item} key={id}/>
        ))}
      </ul>
    </div>
  );
};





export default FriendList;

import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ info: { avatar, name, isOnline } }) {
  const finalClass = clsx(isOnline ? css.a : css.b);
  return (
    <div>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
      <p className={finalClass}>{isOnline ? <p>Online</p> : <p>Offline</p>}</p>
    </div>
  );
}

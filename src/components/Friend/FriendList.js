import PropTypes from "prop-types";
import s from "./Friends.module.css";
import FriendListItem from "./FriendsListItem";

const FriendList = ({ friendListItems }) => (
  <ul className={s.list}>
    {friendListItems.map(({ id, isOnline, avatar, name }) => (
      <li key={id} className={s.item}>
        <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friendListItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
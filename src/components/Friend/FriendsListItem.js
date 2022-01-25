import PropTypes from "prop-types";
import s from "./Friends.module.css";

const FriendListItem = ({ isOnline, avatar, name }) => (
  <>
    <span className={isOnline ? s.statusOnline : s.statusOffline}></span>
    <img className={s.avatar} src={avatar} alt={name} width="48" />
    <p className={s.name}>{name}</p>
  </>
);
FriendListItem.defaultProps = {
  name: "no name",
};

FriendListItem.propTypes = {
  status: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
};

export default FriendListItem;
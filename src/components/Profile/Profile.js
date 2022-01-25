import PropTypes from "prop-types";
import s from "./Profile.module.css";

export default function User({
  avatar,
  name = "не известно",
  tag,
  location,
  statsFollowers,
  statsViews,
  statsLikes,
}) {
  // console.log(props);
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img className={s.avatar} src={avatar} alt={name} />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statsItem}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{statsFollowers}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{statsViews}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{statsLikes}</span>
        </li>
      </ul>
    </div>
  );
}

User.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    statsFollowers: PropTypes.number,
    statsViews: PropTypes.number,
    statsLikes: PropTypes.number,
};
import PropTypes from "prop-types";
import s from "./Statistics.module.css";

function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}
function randomColor() {
  return `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(
    0,
    255
  )})`;
}

export default function StatList({ stats, title }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              key={id}
              className={s.item}
              style={{ backgroundColor: randomColor() }}
            >
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

StatList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
}
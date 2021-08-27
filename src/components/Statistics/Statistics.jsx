import PropTypes from 'prop-types';
import style from './Statistics.module.css';
import { getColor } from 'utils/colorGenerator';

export function Statistics({ title, stats }) {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.classList}>
        {stats.map(item => {
          const color = getColor();
          return (
            <li
              className={style.item}
              key={item.id}
              style={{ backgroundColor: color }}
            >
              <span className={style.label}>{item.label}</span>
              <span className={style.percentage}>{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomHexColor } from '../../utils/getrandomHexColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statsList}>
        {stats.map(({ id, label, percentage }) => (
          <>
            <li
              key={id}
              style={{ backgroundColor: getRandomHexColor() }}
              className={css.item}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          </>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

import css from './Statistics.module.css';
import { getRandomHexColor } from 'helpers/getRandomHexColor';

export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      {title.length > 0 && <h2 className={css.title}>{title}</h2>}
      <ul className={css.stat_list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={css.item}
              key={id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className={css.label}>{label} </span>
              <span className={css.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
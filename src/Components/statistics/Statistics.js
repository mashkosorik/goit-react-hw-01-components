import React from "react";
import style from "../statistics/Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ stats, title }) => {
  return (
    <section className={style.statistics}>
      <h2 className={style.h2}>{title}</h2>
      <ul className={style.list}>
        {stats.map(({ label, percentage, id }) => {
          return (
            <li className={style.title} key={id}>
              <span className={style.lebel}>{label}: </span>
              <span className={style.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  label: "",
  percentage: 0,
};

Statistics.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;

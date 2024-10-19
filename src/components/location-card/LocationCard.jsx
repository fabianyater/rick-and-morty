import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

export const LocationCard = ({ name, type, dimension, link, total }) => {
  return (
    <Link className={styles.link} to={link}>
      <article className={styles.location}>
        <span className={styles.name}>{name}</span>
        <div className={styles.info}>
          <p>Total characters: {total}</p>
          <p className={styles.type}>{type}</p>
          <p className={styles.dimension}>{dimension}</p>
        </div>
      </article>
    </Link>
  );
};

LocationCard.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dimension: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  link: PropTypes.number.isRequired,
};

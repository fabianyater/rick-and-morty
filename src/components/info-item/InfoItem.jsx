import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

export const InfoItem = ({ title, value, link }) => {
  const status = (value === "Alive" && "Alive") || (value === "Dead" && "Dead");
  const locationId = link ? link.match(/\/(\d+)$/)?.[1] : null;

  return (
    <div className={styles.info}>
      <h2 className={styles.label}>{title} :</h2>
      {link ? (
        <Link to={`/locations/${locationId}`}>
          <p className={`${styles.value} ${styles.link}`}>{value}</p>
        </Link>
      ) : (
        <p className={`${styles.value} ${styles.status}`} data-status={status}>
          {value}
        </p>
      )}
    </div>
  );
};

InfoItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  link: PropTypes.string,
};

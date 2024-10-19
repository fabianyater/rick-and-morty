import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

export const NavItem = ({ path, label }) => {
  return (
    <Link to={path} className={styles.link}>
      <span className={styles.text}>{label}</span>
    </Link>
  );
};

NavItem.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

import PropTypes from "prop-types";
import { NavItem } from "../nav-item/NavItem";
import styles from "./styles.module.css";

export const Navigation = ({ items }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {items?.map((item) => (
          <li key={item.id}>
            <NavItem path={item.path} label={item.label} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  items: PropTypes.array.isRequired,
};

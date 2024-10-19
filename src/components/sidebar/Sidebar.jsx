import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useState } from "react";
import PropTypes from "prop-types";

export const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={styles.toggleButton} onClick={toggleSidebar}>
        ☰
      </button>

      {isOpen && <div className={styles.overlay} onClick={toggleSidebar}></div>}

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <header className={styles.header}>
          <button className={styles.closeButton} onClick={toggleSidebar}>
            ✕
          </button>
          <Link to="/">
            <img
              className={styles.image}
              src="https://morty-smith.netlify.app/static/media/Logo.f5e1157c.png"
              alt="Rick Sanchez with a tired expression, wide eyes, drool coming from the mouth, and spiky blue hair."
            />
          </Link>
        </header>
        <section className={styles.content}>{children}</section>
      </aside>
    </>
  );
};

Sidebar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

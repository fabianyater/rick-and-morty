import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

export const CharacterCard = ({ image, name, detailLink }) => {
  return (
    <Link to={detailLink}>
      <article className={styles.character}>
        <img className={styles.image} src={image} alt={`Character ${name} `} />
        <span className={styles.name}>{name}</span>
      </article>
    </Link>
  );
};

CharacterCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  detailLink: PropTypes.string.isRequired,
};

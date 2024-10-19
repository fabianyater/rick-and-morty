import PropTypes from "prop-types";
import { InfoItem } from "../info-item/InfoItem";
import styles from "./styles.module.css";

const CharacterInfo = ({ data }) => {
  return (
    <div className={styles.info}>
      <InfoItem title="Species" value={data.species} />
      <InfoItem title="Gender" value={data.gender} />
      <InfoItem
        title="Origin"
        value={data.origin.name}
        link={data.origin.url}
      />
      <InfoItem
        title="Location"
        value={data.location.name}
        link={data.location.url}
      />
      <InfoItem title="Status" value={data.status} link={false} />
    </div>
  );
};

CharacterInfo.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CharacterInfo;

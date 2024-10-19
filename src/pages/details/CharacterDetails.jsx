import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import styles from "./styles.module.css";
import { LoadingAnimation } from "../../components/loading/LoadingAnimation";
import CharacterInfo from "../../components/character-info/CharacterInfo";
import { useEffect } from "react";

export const CharacterDetails = () => {
  const { id: character } = useParams("id");
  const { data, loading } = useFetch(
    `https://rickandmortyapi.com/api/character/${character}`
  );

  useEffect(() => {
    const originalTitle = document.title;

    if (data?.name) {
      document.title = `${originalTitle} | ${data.name}`;
    }

    return () => {
      document.title = originalTitle;
    };
  }, [data]);

  if (loading) return <LoadingAnimation loadingText="Loading Character..." />;

  if (!data) return;

  return (
    <>
      <Link className={styles.back} to="/">
        Volver
      </Link>
      <section className={styles.character}>
        <h1 className={styles.name}>{data?.name}</h1>
        <img
          className={styles.image}
          src={data.image}
          alt={`Character ${data.name} from Rick and Morty`}
        />
        <CharacterInfo data={data} />
      </section>
    </>
  );
};

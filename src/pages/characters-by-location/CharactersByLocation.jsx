import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { CharacterCard } from "../../components/character-card/CharacterCard";
import { LoadingAnimation } from "../../components/loading/LoadingAnimation";
import useFetch from "../../hooks/useFetch";
import styles from "./styles.module.css";

export const CharactersByLocation = () => {
  const { id: locationId } = useParams();
  const [characters, setCharacters] = useState([]);
  const { data, loading } = useFetch(
    `https://rickandmortyapi.com/api/location/${locationId}`
  );
  const loaderRef = useRef(null);

  useEffect(() => {
    if (data?.residents) {
      setCharacters((prevCharacters) => [...prevCharacters, ...data.residents]);
    }
  }, [data]);

  return (
    <>
      <h1 className={styles.title}>
        Characters located in {data?.name || "this location"}{" "}
      </h1>
      <section className={styles.characters}>
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            image={character.image}
            name={character.name}
            detailLink={`/character/${character.id}`}
          />
        ))}
      </section>
      {loading && <LoadingAnimation loadingText="Loading Characters..." />}
      <div ref={loaderRef} className={styles.loader}></div>
    </>
  );
};

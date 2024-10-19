import { useEffect, useRef, useState } from "react";
import { CharacterCard } from "../../components/character-card/CharacterCard";
import { LoadingAnimation } from "../../components/loading/LoadingAnimation";
import useFetch from "../../hooks/useFetch";
import styles from "./styles.module.css";

export const Characters = () => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const { data, loading } = useFetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  const loaderRef = useRef(null);

  useEffect(() => {
    if (data?.results) {
      setCharacters((prevCharacters) => [...prevCharacters, ...data.results]);
      setHasMore(!!data.info.next);
    }
  }, [data]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      {
        root: null,
        rootMargin: "20px",
        threshold: 1.0,
      }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [hasMore, loading]);

  return (
    <>
      <h1 className={styles.title}>All characters</h1>
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

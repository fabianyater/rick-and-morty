import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { CharacterCard } from "../../components/character-card/CharacterCard";
import { LoadingAnimation } from "../../components/loading/LoadingAnimation";
import styles from "./styles.module.css";

const fetchLocationCharacters = async (locationId) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/location/${locationId}`
  );
  const data = await response.json();

  const residents = await Promise.all(
    data.residents.map((residentUrl) =>
      fetch(residentUrl).then((res) => res.json())
    )
  );

  return residents;
};

export const CharactersByLocation = () => {
  const { id: locationId } = useParams();

  const { data: characters = [], isLoading } = useQuery({
    queryKey: ["locationCharacters", locationId],
    queryFn: () => fetchLocationCharacters(locationId),
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  });

  return (
    <>
      <h1 className={styles.title}>
        Characters located in {characters[0]?.location?.name || "this location"}
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
      {isLoading && <LoadingAnimation loadingText="Loading Characters..." />}
    </>
  );
};

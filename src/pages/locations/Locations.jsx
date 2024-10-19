import { useEffect, useRef, useState } from "react";
import { LoadingAnimation } from "../../components/loading/LoadingAnimation";
import { LocationCard } from "../../components/location-card/LocationCard";
import useFetch from "../../hooks/useFetch";
import styles from "./styles.module.css";

export const Locations = () => {
  const [page, setPage] = useState(1);
  const [locations, setLocations] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const { data, loading } = useFetch(
    `https://rickandmortyapi.com/api/location?page=${page}`
  );
  const loaderRef = useRef(null);

  useEffect(() => {
    if (data?.results) {
      setLocations((prevLocations) => [...prevLocations, ...data.results]);
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
      <h1 className={styles.title}>All locations</h1>
      <section className={styles.locations}>
        {locations.map((location) => (
          <LocationCard
            key={location.id}
            name={location.name}
            type={location.type}
            dimension={location.dimension}
            link={`/locations/${location.id}`}
            total={location.residents.length}
          />
        ))}
      </section>
      {loading && <LoadingAnimation loadingText="Loading locations..." />}
      <div ref={loaderRef} className={styles.loader}></div>
    </>
  );
};

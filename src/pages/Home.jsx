import { useStore } from "../store/Store";
import CardList from "../components/CardList";
import { useEffect } from "react";

export default function Home() {
  const { entities, fetchEntities } = useStore();

  useEffect(() => {
    fetchEntities();
  }, []);
  return (
    <>
      <div className="text-center my-4">
        <h1 className="fw-bold">Bienvenido a JIKAN</h1>
        <img
          src="https://jikan.moe/_app/immutable/assets/jikan.f848d5d6.svg"
          className="img-fluid rounded shadow"
        />
      </div>

      <CardList data={entities} />
    </>
  );
}
import { useStore } from "../store/Store";
import { useEffect } from "react";
import CardList from "../components/CardList";

export default function Entities() {
  const { entities, page, fetchEntities } = useStore();

  useEffect(() => {
    fetchEntities(page);
  }, [page]);

  return (
    <>
      <h2 className="mb-3">LISTA</h2>

      <CardList data={entities} />

      <div className="d-flex justify-content-center gap-2 mt-3">
        <button
          className="btn btn-secondary"
          onClick={() => fetchEntities(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>

        <button
          className="btn btn-primary"
          onClick={() => fetchEntities(page + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}


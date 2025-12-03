import Card from "./Card";

export default function CardList({ data = [] }) {
  return (
    <div className="row">
      {data.map((item) => (
        <div className="col-md-4 mb-4" key={item.id}>
          <Card item={item} />
        </div>
      ))}
    </div>
  );
}

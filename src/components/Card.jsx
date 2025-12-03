export default function Card({ item }) {
  return (
    <div className="card shadow-sm">
      <img
        src={item.image}
        alt={item.title}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5>{item.title}</h5>
      </div>
    </div>
  );
}
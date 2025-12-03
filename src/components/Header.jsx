import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Jikan API</Link>

      <div>
        <Link className="btn btn-outline-light mx-1" to="/">Home</Link>
        <Link className="btn btn-outline-light mx-1" to="/entities">Entities</Link>
        <Link className="btn btn-outline-light mx-1" to="/contact">Contact</Link>
      </div>
    </nav>
  );
}


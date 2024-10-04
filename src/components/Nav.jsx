import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <h1>
        <Link to="/">caroline</Link>
      </h1>
      <h1>
        <Link to="/projects">projects</Link>
      </h1>
      <h1>
        <Link to="/contact">contact</Link>
      </h1>
      <div className="fun">

      </div>
    </div>
  );
}

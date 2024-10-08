import { Link, useLocation } from "react-router-dom";
import Ferro from "../components/Ferro"
export default function Nav() {
  const location = useLocation();

  if (location.pathname === "/") {
    return (
        <div className="welcome-section">

            <h1>
              <Link to="/">caroline</Link>
            </h1>


            <h1 className="right">
              <Link to="/projects">projects</Link>
            </h1>
            <h1 className="right">
              <Link to="/contact">contact</Link>
            </h1>


      </div>
    );
  } else {
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
        <div id="fun">
        <Ferro/>
        </div>
      </div>
    );
  }
}

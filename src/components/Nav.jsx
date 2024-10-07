
import { Link, useLocation } from "react-router-dom";


export default function Nav() {
  const location = useLocation();

  const navClass = location.pathname === "/" ? "welcome-section" : "nav";
  if (location.pathname ==="/"){
    
  }
  return (
    <div className={navClass}>

      
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

import React from "react";
import { Link } from "react-router-dom";

const Navegacion = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Inicio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/app">
                GET
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/api">
                POST
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/componentState">
                USE-STATE
              </Link>
            </li>
            <li><Link className="nav-link" to="/useEffect">
              USE-EFFECT
            </Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navegacion;

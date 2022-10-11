import React from "react";

export default function Navbar() {
  return(

    <header className="navbar navbar-expand-lg bg-primary bg-opacity-50">
      <div className="container-fluid">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <h1>Packager</h1>

        <div className="d-flex flex-column">

          <nav className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Docs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Status</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Search</a>
              </li>
            </ul>
          </nav>

          <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
          </form>

        </div>

      </div>
    </header>

  );
};

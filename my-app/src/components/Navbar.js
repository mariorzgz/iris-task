import React from "react";
import { useState } from 'react';
import useFetchFromApi from "./useFetchFromApi";
import Projects from "./Projects";

export default function Navbar() {

  const [{}, doFetch] = useFetchFromApi();
  const [query, setQuery] = useState('grunt');

  const handleChange = (event) =>{
    setQuery(event.target.value);
  }



  //TENGO LOS PROYECTOS, AHORA SOLO TENGO QUE SACARLOS DE AQUÍ PARA PODER PONERLOS EN OTRO COMPONENTE

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

          <form onSubmit={event => {
            doFetch(`https://libraries.io/api/search?q=${query}&api_key=fa203ef05e60f974b8999be7bb8a3d79`);
            event.preventDefault();
          }}>
            <input
              type="text"
              value={query}
              onChange={handleChange}
            />
            <button type="submit">Search</button>
          </form>

        </div>

      </div>

    </header>

  );
};

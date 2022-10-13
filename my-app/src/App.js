import React, { useState } from 'react';
import './App.css';
import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Projects from "./components/Projects";
import useFetchFromApi from "./components/useFetchFromApi";

function App() {

  const [{projects, isLoading, isError, isInitial}, doFetch] = useFetchFromApi();
  const [query, setQuery] = useState('');

  const [sorting, setSorting] = useState("");

  const sortByName = () => {
    setSorting("projectName")
  };

  const sortByOwnerName = () => {
    setSorting("projectOwnerName")
  };

  const sortByStars = () => {
    setSorting("projectStars")
  };


  return (
    <div className="app">

    <header className="navbar navbar-expand-lg bg-primary bg-opacity-50">
      <div className="container-fluid">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <h1><a href="/">Packager</a></h1>

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
              onChange={event => setQuery(event.target.value)}
              placeholder="Enter your search term"
            />
            <button type="submit">Search</button>
          </form>


        </div>

      </div>

    </header>

      <main className='d-flex mt-4'>

        <Sidebar />

        <section className='container'>

        {isInitial ? (
            <div className='d-flex'>
              <h1>Make your first search</h1>
            </div>
          ) : (

            <div>

            <div className='d-flex'>

              <h1>Search Results ( {projects.length} )</h1>

              <div>
                <ul className=''>
                  <li className='d-inline mx-2'>Order by:</li>
                  <li className='d-inline mx-2'><button onClick={sortByName}>Name</button></li>
                  <li className='d-inline mx-2'><button onClick={sortByOwnerName}>Owner name</button></li>
                  <li className='d-inline mx-2'><button onClick={sortByStars}>Stars</button></li>
                </ul>
              </div>

              </div>

              <div className='results mt-5'>

                {isError && <div>Something went wrong...</div>}

                {isLoading ? (
                  <div>Loading...</div>
                ) : (
                  <Projects projects={projects} sorting={sorting}/>
                )}

              </div>

            </div>

          )}


{/*
            <button
            onClick={event => {
              doFetch(`https://libraries.io/api/search?q=${query}&per_page=5&page=2&api_key=fa203ef05e60f974b8999be7bb8a3d79`)
            }}>Page 2</button>

            <button
            onClick={event => {
              doFetch(`https://libraries.io/api/search?q=${query}&per_page=5&page=3&api_key=fa203ef05e60f974b8999be7bb8a3d79`)
            }}>Page 3</button> */}

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default App;

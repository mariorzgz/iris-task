import React, { useState } from 'react';
import './App.css';
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Projects from "./components/Projects";
import useFetchFromApi from "./components/useFetchFromApi";

function App() {

  const [{projects, isLoading, isError, isInitial}, doFetch] = useFetchFromApi();
  const [query, setQuery] = useState('');

  const [sorting, setSorting] = useState("");

  const removeClass = () => {
    const sortingOptions = document.querySelectorAll('.sort-results');
    sortingOptions.forEach(option => {
      option.classList.remove('text-secondary');
    });
  }

  const sortByName = (event) => {
    let clicked = event.target
    removeClass()
    clicked.classList.add("text-secondary")
    setSorting("projectName")
  };

  const sortByOwnerName = (event) => {
    let clicked = event.target
    removeClass()
    clicked.classList.add("text-secondary")
    setSorting("projectOwnerName")
  };

  const sortByStars = (event) => {
    let clicked = event.target
    removeClass()
    clicked.classList.add("text-secondary")
    setSorting("projectStars")
  };

  return (
    <div className="app">

    <header id="mobile-navbar" className='d-sm-block d-md-none'>

      <nav className="navbar bg-primary d-flex justify-content-between align-items-center">

        <div className='d-flex w-100 justify-content-between align-items-center px-2'>

          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <h1 className='m-0 px-2'><a className="text-decoration-none text-black" href="/">Packager</a></h1>

          <form className='search-bar d-flex flex-grow-1 justify-content-end' onSubmit={event => {
                  doFetch(`https://libraries.io/api/search?q=${query}&api_key=fa203ef05e60f974b8999be7bb8a3d79`);
                  event.preventDefault();
                }}>
                  <input
                    className='border-0 rounded-start py-1 px-4'
                    type="text"
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                    placeholder="Enter search term"
                  />
                  <button className='bg-dark text-white border-0 rounded-end px-1' type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                  </button>
          </form>

        </div>

        <div className="offcanvas offcanvas-start bg-primary" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

          <div className="offcanvas-header">
            <h1 className='m-0'><a className="text-decoration-none text-black" href="/">Packager</a></h1>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div className="offcanvas-body ">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link m-0 py-0 px-4" href="/">Docs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link m-0 py-0 px-4" href="/">Status</a>
              </li>
              <li className="nav-item">
                <a aria-current="page" className="nav-link active tw-bold m-0 py-0 px-4" href="/">Search</a>
              </li>
            </ul>
          </div>

        </div>

      </nav>

    </header>

    <header id="desktop-navbar" className="navbar navbar-expand-md bg-primary d-none d-md-block">

      <div className="container-fluid px-5">

        <h1 className='m-0'><a className="text-decoration-none text-black" href="/">Packager</a></h1>

        <div className="d-flex flex-column">

          <nav className="collapse navbar-collapse py-4" id="navbarToggler">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link m-0 py-0 px-4" href="/">Docs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link border-start border-end border-dark border-2 m-0 py-0 px-4" href="/">Status</a>
              </li>
              <li className="nav-item">
                <a aria-current="page" className="nav-link active tw-bold m-0 py-0 px-4" href="/">Search</a>
              </li>
            </ul>
          </nav>

          <form className='search-bar d-flex pb-2' onSubmit={event => {
              doFetch(`https://libraries.io/api/search?q=${query}&api_key=fa203ef05e60f974b8999be7bb8a3d79`);
              event.preventDefault();
            }}>
            <input
              className='border-0 rounded-start py-1 px-4'
              type="text"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Enter your search term"
            />
            <button className='bg-dark text-white border-0 rounded-end px-3' type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </button>
          </form>

        </div>

      </div>

    </header>

      <main className='mt-4'>

        <div className='row min-vh-100'>

          <div className='col d-none d-md-block col-md-3'>

            <Sidebar />

          </div>

          <div className='col col-md-9'>

            <section className='container mt-md-4 mt-2'>

              {isInitial ? (
                  <div className='row'>
                    <div className='col-md-8'>
                      <div className='alert alert-primary d-flex flex-column'>
                        <h3 className=''>Welcome to Packager! Find your favourite repositories.</h3>
                        <p>Make your first search with the search bar.</p>
                        <iframe className='align-self-end' title="Computer Animation" src="https://embed.lottiefiles.com/animation/94162"></iframe>
                      </div>
                    </div>
                  </div>
                ) : (

                  <div>

                  <div className='d-flex flex-column flex-md-row justify-content-between'>

                    <h1>Search Results ( {projects.length} )</h1>

                    <div className='align-self-start align-self-md-end mt-3 mt-md-0 '>
                      <ul className='m-0 p-0 pe-md-5 d-flex flex-row align-items-center '>
                        <li className='d-inline mx-md-2 mx-0 fw-bold flex-grow-1'>Order by:</li>
                        <li className='d-inline mx-md-2 mx-0'><button className="sort-results py-0 btn text-secondary" onClick={sortByName}>Name</button></li>
                        <li className='d-inline mx-md-2 mx-0'><button className="sort-results py-0 btn rounded-0 border-0 border-start border-end border-dark border-2" onClick={sortByOwnerName}>Owner name</button></li>
                        <li className='d-inline mx-md-2 mx-0'><button className="sort-results py-0 btn " onClick={sortByStars}>Stars</button></li>
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

            </section>

          </div>

        </div>

      </main>

      <Footer />

    </div>
  );
}

export default App;

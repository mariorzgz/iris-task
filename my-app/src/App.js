import React, { useState } from 'react';
import './App.css';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Projects from "./components/Projects";
import useFetchFromApi from "./components/useFetchFromApi";

function App() {

  const [{ projects, isLoading, isError }, doFetch] = useFetchFromApi();
  const [query, setQuery] = useState('grunt');


  return (
    <div className="app">

     <Navbar />

      <main className='d-flex mt-4'>

        <Sidebar />

        <section className='container'>

          <form onSubmit={event => {
            doFetch(`https://libraries.io/api/search?q=${query}&page&per_page=10&api_key=fa203ef05e60f974b8999be7bb8a3d79`);
            event.preventDefault();
          }}>
            <input
              type="text"
              value={query}
              onChange={event => setQuery(event.target.value)}
            />
            <button type="submit">Search</button>
          </form>

          <h1>Search Results ( {projects.length} )</h1>

            <div className='results mt-5'>

              {isError && <div>Something went wrong...</div>}

              {isLoading ? (
                <div>Loading...</div>
              ) : (
                <Projects projects={projects}/>
              )}

            </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default App;

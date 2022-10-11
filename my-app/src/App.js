import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {

  return (
    <div className="app">

     <Navbar />

      <main className='d-flex mt-4'>

        <Sidebar />

        <section className='container'>

          <h1>Search Results</h1>

          <div className='results mt-5'>

            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
              </div>
            </div>

          </div>

          <nav id="pagination" aria-label="Search results pages" className='mt-5'>
            <ul className="pagination">
              <li className="page-item"><a className="page-link" href="www.google.com">Previous</a></li>
              <li className="page-item"><a className="page-link" href="www.google.com">1</a></li>
              <li className="page-item"><a className="page-link" href="www.google.com">2</a></li>
              <li className="page-item"><a className="page-link" href="www.google.com">3</a></li>
              <li className="page-item"><a className="page-link" href="www.google.com">Next</a></li>
            </ul>
          </nav>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default App;

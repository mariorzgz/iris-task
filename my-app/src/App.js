import './App.css';

function App() {
  return (
    <div className="app">

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

      <main className='d-flex mt-4'>

        <nav id="sidebar" className='sidebar navbar'>
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#" aria-current="page">Creating Packages</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">API</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Configuration</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pluggable Resolvers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Tools</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
          </ul>
        </nav>

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

      <footer className='bg-black bg-opacity-25 fixed-bottom'>
        Made by Mario Rodríguez
      </footer>

    </div>
  );
}

export default App;

import React from "react";

export default function Sidebar() {
  return(

    <nav id="sidebar" className='sidebar navbar align-items-start ps-5 mt-5 sticky-top'>
      <ul className="navbar-nav mt-5 pt-3">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-secondary" href="/" aria-current="page">Creating Packages</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">API</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Configuration</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Pluggable Resolvers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Tools</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
      </ul>
    </nav>

  );
};

import React from "react";
import { useState, useEffect } from "react";

export default function Projects({projects, sorting}) {

  let [paginate, setPaginate] = useState(5);
  let currentPage = 1;
  const pages = projects.length/5


  const changePage = (event) => {
    currentPage = event.target.innerHTML;
    setPaginate(currentPage*5)
  }

  useEffect(() => {
    console.log(sorting)
  });

  const sort = () => {

  }

  return(

    <div className="projects-container row" >
        {projects.slice(paginate-5, paginate).map((project, index) => {
          return (
            <div className='col-sm-12 col-md-6 col-lg-4' key={index}>
              <div className="card" >
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                  <p>Owner: {project.homepage}</p>
                  <p>Stars:  {project.stars}</p>
                  <button type="button" className="btn btn-dark">&gt; Visit package page</button>
                </div>
              </div>
            </div>
          );
        })}
      <div className="pagination d-flex container justify-content-center">
      {[...Array(pages)].map((x, i) =>
          <button className="btn"
            onClick={changePage} key={i}>{i+1}</button>
        )}
      </div>

  </div>
  );
};

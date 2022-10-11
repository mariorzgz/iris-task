import React from "react";

export default function Projects({projects}) {

  return(

    <div className="posts-container row">
      {projects.map((project, index) => {
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
  </div>
  );
};

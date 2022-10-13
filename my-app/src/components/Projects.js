import React from "react";
import { useState, useEffect } from "react";

export default function Projects({projects, sorting}) {

  let [paginate, setPaginate] = useState(5);
  let [sortingMethod, setSortingMethod] = useState("")
  let currentPage = 1;
  const pages = projects.length/5

  const dynamicSort = (sorting) => {
    let sortOrder = 1;
    if(sorting[0] === "-") {
        sortOrder = -1;
        sorting = sorting.substr(1);
    }
    if(sorting === "projectOwnerName"){
      sorting = "repository_url"
    }else{
      return function (a,b) {
        let result = (a[sorting] < b[sorting]) ? -1 : (a[sorting] > b[sorting]) ? 1 : 0;
        return result * sortOrder;
      }
    }
  }

  const regex = /(?:http?:\/\/|https?:\/\/)?(?:www\.)?github\.com\/(?:\/*)([\w\-\.\/]*)(\/\S+)|(.+)/gm;

  const changePage = (event) => {
    currentPage = event.target.innerHTML;
    setPaginate(currentPage*5)
  }

  const sortByRegex = (arr, regex) => {
    return arr.sort(function(a, b) {
      let x = "";
      let y = "";
      a.repository_url ? x = a.repository_url.split(regex)[1] : x = ""
      b.repository_url ? y = b.repository_url.split(regex)[1] : y = ""
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }


  useEffect(() => {
    switch (sorting) {
      case 'projectName':
        projects.sort(dynamicSort("name"));
        setSortingMethod("name")
        break;
      case 'projectOwnerName':
        sortByRegex(projects, regex)
        setSortingMethod("ownerName")
        break;
      case 'projectStars':
        projects.sort(dynamicSort("-stars"));
        setSortingMethod("stars")
        break;
      default:
        projects.sort(dynamicSort("name"));
        setSortingMethod("name")
      }
  }, [sorting, projects, regex]);

  return(

    <div className="projects-container row" >
        {projects.slice(paginate-5, paginate).map((project, index) => {
          return (
            <div className='col-sm-12 col-md-6 col-lg-4' key={index}>
              <div className="card" >
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                  {project.repository_url && <p>Owner: {project.repository_url.split(regex)[1]}</p>}
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

import React from "react";
import { useState, useEffect } from "react";

export default function Projects({projects, sorting}) {

  let [paginate, setPaginate] = useState(6);
  let [sortingMethod, setSortingMethod] = useState("")

  const removeClass = () => {
    const sortingOptions = document.querySelectorAll('.sorting-options');
    sortingOptions.forEach(option => {
      option.classList.remove('text-secondary');
    });
  }

  let currentPage = 1;
  const pages = projects.length/6
  const regex = /(?:http?:\/\/|https?:\/\/)?(?:www\.)?github\.com\/(?:\/*)([\w\-\.\/]*)(\/\S+)|(.+)/gm;

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

  const changePage = (event) => {
    let clicked = event.target;
    removeClass();
    clicked.classList.add("text-secondary");
    currentPage = event.target.innerHTML;
    setPaginate(currentPage*6);
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

    <div className="projects-container row pe-lg-5" >
        {projects.slice(paginate-6, paginate).map((project, index) => {
          return (
            <div className='col-sm-12 col-md-6 col-lg-4 d-flex pb-5' key={index}>
              <div className="card w-100" >
                <div className="card-header text-bg-secondary d-flex align-items-center">
                  <h5 className="card-title d-flex align-items-center m-0 py-2 text-white fw-bold">{project.name}</h5>
                </div>
                <div className="card-body justify-content-between d-flex flex-column">
                  <p className="card-text d-flex flex-grow-1">{project.description}</p>
                  <div className="py-3 d-flex flex-column flex-shrink justify-content-end">
                    {project.repository_url && <p>Owner: {project.repository_url.split(regex)[1]}</p>}
                    <p>Stars:  {project.stars}</p>
                  </div>
                  <a className="btn btn-dark align-self-start hvr-grow" href={project.repository_url || project.homepage}>&gt; Visit package page</a>
                </div>
              </div>
            </div>
          );
        })}

      <div className="pagination d-flex container justify-content-center mb-5">
      {[...Array(pages)].map((x, i) =>
          <button className="sorting-options btn"
            onClick={changePage} key={i}>{i+1}</button>
        )}
      </div>

  </div>
  );
};

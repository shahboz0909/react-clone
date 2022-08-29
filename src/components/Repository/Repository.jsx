import React, { useState } from "react";

const Repository = () => {
  const [repo, setRepo] = useState([]);

  fetch(" https://api.github.com/users/shahboz0909/repos")
    .then((response) => response.json())
    .then((repo) => setRepo(repo));

  return (
    <>
      <div className="container-fluid">

        <div className="sorting">
          <form action="#" method="get">
          <input
              type="text"
              className="search-repo form-control rounded-3 d-block w-50 ms-3 main-bg-color"
              placeholder="Find a repository..."
            ></input>
          </form>
        </div>

      <ul className="repo-list w-100 list-unstyled d-flex flex-column gap-2 p-0 mx-4 my-3">
        {repo.map((item) => {
          return (
            <li className="repo-items hr w-100 pb-4" key={item.id}>
              <div className="d-flex justify-content-between align-items-center w-100 ">
                <div className="items-info-box w-100">
                  <a
                    className="repo-title text-decoration-none fs-5 me-2"
                    href={item.html_url}
                  >
                    {item.name}
                  </a>
                  <p className="repo-type text-light btn border rounded-pill py-1 px-3 m-0 mb-1">
                    {item.visibility}
                  </p>
                </div>
              
              <div className="stars btn-group">
                
                <button className="star-btn btn btn-dark d-flex align-items-center px-4">
                <i class="bi bi-star me-3"></i>
                  Star
                  </button>
                  <button className="text-center px-2 bg-dark border-0 border-start"><i class="bi bi-chevron-down"></i></button>
              </div>

              </div>
              <div className="item-bottom d-flex align-items-center mt-3">
                <p
                  className={`repo-language m-0 ${
                    item.language === "JavaScript"
                      ? "yellow"
                      : item.language === "HTML"
                      ? "red"
                      : item.language === "CSS"
                      ? "violet"
                      : ""
                  }`}></p>
                  <p className="updated m-0 mx-2 ">
                  {item.language}
                  </p>
                <p className="updated m-0">{`Updated time:
                ${
                  item.updated_at.split("T")[0]
                }`}</p>
              </div>
            </li>
          );
        })}
      </ul>
      </div>
    </>
  );
};

export default Repository;

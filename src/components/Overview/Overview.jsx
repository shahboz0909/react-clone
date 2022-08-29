import React, { useState } from "react";

const overview = () => {
  const [pinnedRepo, setPinnedRepo] = useState([]);

  fetch("https://api.github.com/users/shahboz0909/repos")
    .then((response) => response.json())
    .then((pinnedRepo) => setPinnedRepo(pinnedRepo));

  return (
    <>
      <div className="pinned-repo ms-4 mt-2 w-75">
        <div className="pinned-wrapper">
          <div className="pinned-title d-flex justify-content-between">
            <p className="text-light m-0">Pinned</p>
            <button className="change-pinned text-secondary m-0">
              Customize your pins
            </button>
          </div>

          <ul className="repo-list list-unstyled w-100 d-flex flex-wrap mt-2">
            {pinnedRepo.slice(0, 6).map((item) => {
              return (
                <li className="repo-item p-3 mb-3 mx-2" key={item.id}>
                  <div className="d-flex justify-content-between">
                    <div>
                      <i class="bi bi-journal-bookmark me-2"></i>
                      <a
                        className="repo-title text-decoration-none mx-2"
                        href={item.html_url}
                      >
                        {item.name}
                      </a>
                      <btn className="repo-type btn rounded-pill py-1 px-2 mx-2 text-white">
                        {item.visibility}
                      </btn>
                    </div>
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      data-view-component="true"
                      fill="#fff"
                      class="octicon octicon-grabber"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 13a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zM6 5a1 1 0 100-2 1 1 0 000 2z"
                      ></path>
                    </svg>
                  </div>

                  <div className="language-box d-flex">
                    <p
                      className={`repo-language mt-2 ${
                        item.language === "JavaScript"
                          ? "yellow"
                          : item.language === "HTML"
                          ? "red"
                          : item.language === "CSS"
                          ? "violet"
                          : ""
                      }`}
                    ></p>
                    <p className="text-white mt-1 ms-2">{item.language}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="text-secondary">
            Seeing something unexpected? Take a look at the
            <a className="text-decoration-none" href="#"> GitHub profile guide.</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default overview;

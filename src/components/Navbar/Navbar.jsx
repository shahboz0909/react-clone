import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="py-3 main-bg-color">
        <ul className="nav d-flex justify-content-center">
          <li className="nav-item">
            <NavLink to="/owerview" className="nav-link text-light">
              <p className="nav-text m-0 px-2 py-1">
                <i class="bi bi-book me-2"></i>Overview
              </p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/repo" className="nav-link text-light">
              <p className="nav-text m-0 px-2 py-1">
                <i class="bi bi-journal-bookmark me-2"></i>Repositories
              </p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className="nav-link text-light">
              <p className="nav-text m-0 px-2 py-1"><i class="bi bi-window-sidebar me-2"></i>Projects</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/packages" className="nav-link text-light">
              <p className="nav-text m-0 px-2 py-1"><i class="bi bi-box me-2"></i>Packages</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/stars" className="nav-link text-light ">
              <p className="nav-text m-0 px-2 py-1"> <i class="bi bi-star me-2"></i>Stars</p>
            </NavLink>
          </li>
        </ul>
        <p class="hr m-0"></p>
      </nav>
    </>
  );
};

export default Navbar;

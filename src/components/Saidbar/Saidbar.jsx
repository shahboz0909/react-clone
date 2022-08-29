import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Saidbar.css";
const Saidbar = () => {
  const [data, setData] = useState([]);

  fetch(" https://api.github.com/users/shahboz0909")
    .then((response) => response.json())
    .then((data) => setData(data));
  return (
    <>
          <div className="ms-4 top-minus">
            <img className="rounded-circle" src={data.avatar_url} alt={data.login} width={296} height={296} />
            <h4 className="text-white mt-3 mb-0">{data.name}</h4>
            <p className="h5 text-secondary fw-normal m-0">{data.login}</p>
            <p className="h6 mt-3 mb-3 text-light">{data.bio}</p>

            <button className="follow-btn btn d-block w-100 border border-mute rounded-3 mb-3 text-light fs-6">Follow</button>
            <div className="">
          <NavLink className="followers-link text-decoration-none text-secondary mx-2" to="/followers">
          <i class="bi bi-people me-1"></i>
          <span className="text-white">{data.followers}</span> followers 
          </NavLink>

          <NavLink className="followers-link text-decoration-none text-secondary mx-2 " to="/following">
          <span className="text-white">{data.following}</span> follwing
          </NavLink>
        </div>
          </div>
    </>
  );
}

export default Saidbar;

import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const Following = () => {
  const [data , setData] = useState([]);

  fetch("https://api.github.com/users/shahboz0909/followers")
    .then((response) => response.json())
    .then((data) => setData(data));
  return (
    <>
      <ul className="unstyled d-flex flex-column ms-3 w-100">
        {data.map((item) => {
          return <li className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center w-100">
            <img className="rounded-circle" src={item.avatar_url} alt="item.login" width={50} height={50} />
            <a className="text-decoration-none text-light ms-3" href={item.html_url}>
              {item.login}
            </a>
          </div>

          <button className="btn btn-dark d-flex align-items-center px-4">Unfollow</button>
        </li>
        })}
      </ul>
    </>
  );
};

export default Following;
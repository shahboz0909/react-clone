import React from 'react';
import Navbar from '../Navbar/Navbar';

const Main = () => {

  return (
    <>
      <div className="nav-wrapper">
        <div className="container-fluid p-0">
          <div className="nav-inner">
          <Navbar/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
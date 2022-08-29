import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "./components/Login/Login";
import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Saidbar from "./components/Saidbar/Saidbar";
import Overview from "./components/Overview/Overview";
import Packages from "./components/Packages/Packages";
import Projects from "./components/Projects/Projects";
import Repository from "./components/Repository/Repository";
import Stars from "./components/Stars/Stars";
import Following from "./components/Following/Following";
import Footer from "./components/Footer/Footer";
import Error from "./components/Error/error";

const App = () => {
  const [data, setData] = useState([]);

  const [value, setValue] = useState("");

  useEffect(
    (value) => {
      fetch(`https://api.github.com/search/users?q=${value}`)
        .then((response) => response.json())
        .then((data) => setData(data));
    },
    [value]
  );
  // const {pathname}=useLocation();
  // const [auth, setAuth] = useState(false);
  // const navigate = useNavigate();
  // const user2 = {
  //   username: "shahboz",
  //   password: "2019010",
  // };

  // const useAuth = (params) => {
  //   return user2.username === params.userName &&
  //     user2.password === params.password
  //     ? navigate("/")
  //     : navigate("/");
  // };
  return (
    <>
      {/* isLogin={auth} login={useAuth}  */}
      {/* <Login /> */}
      <Header setValue={setValue} value={value} />
      <BrowserRouter>
        <Main />
        <div className="d-flex container">
          <Saidbar />
          <Routes>
            <Route path="/owerview" element={<Overview />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/repo" element={<Repository />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/stars" element={<Stars />} />
            <Route path="/followers" element={<Following />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;

import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";

// components
// import AppLoader from './components/loaders/AppLoader/AppLoader'
import MainNav from "./components/navbars/MainNav/MainNav";
// import AlertModal from "./components/modals/AlertModal/AlertModal";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";


const App = () => {
  // const nav = useSelector((state) => state.nav)
  // const alert = useSelector((state) => state.alert)

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Poppins:400,500,600,700,800,900', 'Orbitron:400,500,600,700,800,900']
      }
    });
  }, []);

  return (
    <BrowserRouter>
      {/* {nav?.nav === 'main-nav' && <MainNav />} */}
      {/* {alert?.status === 'open' && <AlertModal message={alert?.message} />} */}
      <MainNav />

      <Routes>
        <Route index path="/" exact element={<Home />} />
        <Route path="/etudiant" element={<Login />}/>
        <Route path="/professeur" element={<Login isTeacher />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
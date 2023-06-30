import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Pages/Navbar";
import LandingPage from "./Components/Pages/LandingPage";
import GameStore from "./Components/Pages/GameStore";
import Peripherals from "./Components/Pages/Peripherals";
import Footer from "./Components/Pages/Footer";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/game-store' element={<GameStore />} />
          <Route exact path='/peripherals' element={<Peripherals />} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;

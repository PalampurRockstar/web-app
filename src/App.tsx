import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PetList from "./components/petList";
import AddPet from "./components/addPet";
import Pets from "./components/pets";

function App() {
  const Home = () => {
    return <h3>Welcome to the app</h3>;
  };
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/pets" className="navbar-brand">
            Pet market
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/pets"} className="nav-link">
                Pets
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pets" element={<PetList />} />
            <Route path="/add" element={<AddPet />} />
            <Route path="/pets/:id" element={<Pets />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

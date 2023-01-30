import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PetList from "./components/petList";
import AddPet from "./components/addPet";
import Pets from "./components/pets";

// import AddPet from "./components/AddPet";
// import Pets from "./components/Pets";
// import PetList from "./components/PetList";

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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path={["/", "/pets"]} component={PetList} />
            <Route exact path="/add" component={AddPet} />
            <Route path="/pets/:id" component={Pets} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

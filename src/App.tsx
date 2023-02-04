import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style/common.css";
import Home from "pages/home";
import Pets from "components/pets";
import PetList from "components/petList";
import AddPet from "components/addPet";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Route path="" element={<Header />} />
          <Route path="profile" element={<Footer />} /> */}
          </Route>
          <Route path="/pets" element={<PetList />} />
          <Route path="/add" element={<AddPet />} />
          <Route path="/pets/:id" element={<Pets />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style/common.css";
import Home from "pages/home";
import Pets from "components/pets";
import PetList from "components/petList";
import AddPet from "components/addPet";
import { Button, ConfigProvider, theme } from "antd";
import { AppTheme } from "style/theme";
const App = () => {
  return (
    <div className="App">
      <ConfigProvider theme={AppTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            {/* <Route path="/pets" element={<PetList />} />
            <Route path="/add" element={<AddPet />} />
            <Route path="/pets/:id" element={<Pets />} /> */}
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </div>
  );
};

export default App;

import { Layout } from "antd";
import Home from "components/home";
import AppFooter from "components/footer";
import AppHeader from "components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "components/detail";
const Landing = () => {
  return (
    <Layout>
      <AppHeader />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
      <AppFooter />
    </Layout>
  );
};

export default Landing;

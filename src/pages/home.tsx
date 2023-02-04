import { Layout } from "antd";
import AppBody from "components/body";
import AppFooter from "components/footer";
import AppHeader from "components/header";
import { Link } from "react-router-dom";
const { Header, Content, Footer } = Layout;
const Home = () => {
  return (
    <Layout>
      <AppHeader />
      <AppBody />
      <AppFooter />
    </Layout>
  );
};

export default Home;

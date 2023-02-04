import { Link } from "react-router-dom";

import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Col,
  Divider,
  Row,
  Image,
} from "antd";
import SourabhProfile from "../assets/sourabh.jpg";

import { MenuItems } from "store/items";
import { HeaderRow, StyleProp, useStyles } from "../style/components/header";
import "../style/components/header.css";
const { Header, Content, Footer } = Layout;

const AppHeader = () => {
  const classes = useStyles();
  return (
    <Header className={classes.app_header}>
      <HeaderRow>
        <Col flex={9}>
          <div
            style={{
              float: "left",
              width: 120,
              height: 31,
              color: "white",
            }}
          >
            PetApp
          </div>
        </Col>
        <Col flex={3}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={MenuItems.map((each, index) => ({
              key: index,
              label: each.name,
              icon: each.icon,
            }))}
          />
        </Col>
      </HeaderRow>
    </Header>
  );
};

export default AppHeader;

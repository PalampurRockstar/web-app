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
  Button,
} from "antd";

import { MenuItems } from "store/items";
import { ButtonSetCol, HeaderRow } from "style/components/header";
import { useStyles } from "style/common";
const { Header, Content, Footer } = Layout;

const AppHeader = () => {
  const classes = useStyles();
  return (
    <Header className={classes.app_header}>
      <HeaderRow>
        <Col flex={"60%"}>
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
        <ButtonSetCol flex={"20%"}>
          <div className="">
            <Button>Become a seller</Button>
          </div>
        </ButtonSetCol>
        <Col flex={"20%"}>
          <Menu
            theme="dark"
            mode="horizontal"
            // defaultSelectedKeys={["2"]}
            items={MenuItems.map((each, index) => ({
              key: index,

              icon: each.icon,
            }))}
          />
        </Col>
      </HeaderRow>
    </Header>
  );
};

export default AppHeader;

import { Link } from "react-router-dom";

import { Breadcrumb, Layout, Menu, theme, Image } from "antd";
const { Header, Content, Footer } = Layout;
const AppBody = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Content className="site-layout" style={{ padding: "0 50px" }}>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>

      <div
        style={{ padding: 24, height: "100%", background: colorBgContainer }}
      >
        Content
      </div>
    </Content>
  );
};

export default AppBody;

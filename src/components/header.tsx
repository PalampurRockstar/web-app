import { Button, Col, Layout, Menu, theme } from "antd";
import { MenuItems } from "store/items";
import { useStyles } from "style/common-style";
import {
  ButtonSetCol,
  HeaderContent,
  HeaderRow,
} from "style/components/header-style";
const { Header, Content, Footer } = Layout;

const AppHeader = () => {
  const {
    token: { colorBgContainer, lineHeight },
  } = theme.useToken();
  const classes = useStyles();
  return (
    <HeaderContent style={{ background: colorBgContainer }}>
      <HeaderRow>
        <Col>
          <div>PetApp</div>
        </Col>
        <Col>
          <ButtonSetCol>
            <div>
              <Button>Become a seller</Button>
            </div>
          </ButtonSetCol>
          <ButtonSetCol>
            <Menu
              mode="horizontal"
              items={MenuItems.map((each, index) => ({
                key: index,
                icon: each.icon,
              }))}
            />
          </ButtonSetCol>
        </Col>
      </HeaderRow>
    </HeaderContent>
  );
};

export default AppHeader;

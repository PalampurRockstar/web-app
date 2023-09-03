import { Button, Col, Layout, Menu, theme } from "antd";
import { MenuOptionProp } from "models/model";
import { useNavigate } from "react-router-dom";
import { MenuItems } from "store/items";
import { useStyles } from "style/common-style";
import {
  ButtonSetCol,
  HeaderContent,
  HeaderRow,
} from "style/components/header-style";
const { Header, Content, Footer } = Layout;

interface AppHeaderProp{
  menuList:MenuOptionProp[]
}

const AppHeader = ({menuList}:AppHeaderProp) => {
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
            {menuList.map(menu=>
              <Button onClick={()=>menu.clickHandler(menu.uri)}>{menu.title}</Button>)
              }
            </div>
          </ButtonSetCol>
          <ButtonSetCol>
            <Menu
              mode="horizontal"
              items={MenuItems?.map((each, index) => ({
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

import {
  BellOutlined,
  MessageOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Button, Col, Layout, Menu, theme } from "antd";
import { ROUTES } from "common/constants";
import accessToken from "hooks/useAuth";
import { Gender, MenuOptionProp, User } from "models/model";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuItems } from "store/items";
import { useStyles } from "style/common-style";
import {
  ButtonSetCol,
  HeaderContent,
  HeaderRow,
} from "style/components/header-style";
import { MenuProfileImage } from "style/components/items-style";
import { fetchImage } from "utils/urlFormatter";
const { Header, Content, Footer } = Layout;

interface AppHeaderProp {
  // menuList: MenuOptionProp[];
}
export interface MenuItem {
  content: React.ReactNode | undefined;
}
const menuList: MenuOptionProp[] = [
  {
    title: "Become a seller",
    uri: ROUTES.PET_ONBOARDING,
  },
  {
    title: "Sign In",
    uri: ROUTES.SIGNIN,
  },
  {
    title: "Sign Up",
    uri: ROUTES.SIGNUP,
  },
].map((each) => {
  return {
    ...each,
    clickHandler: (uri: string | undefined) => {
      if (uri) window.location.href = uri;
    },
  };
});
const AppHeader = ({}: AppHeaderProp) => {
  const { getAccessToken } = accessToken();
  const [profilePath, setProfilePath] = useState<string[]>([]);
  useEffect(() => {
    const user = getAccessToken();
    if (user !== null) {
      if (user.profile_picture_path) {
        setProfilePath(user.profile_picture_path.split("/"));
      } else {
        setProfilePath([
          "image-icons",
          `${user.gender === Gender.Female ? "fe" : ""}female.png`,
        ]);
      }
    }
  }, []);

  const MenuItems: MenuItem[] = [
    {
      content: <MessageOutlined />,
    },
    {
      content: <BellOutlined />,
    },
    {
      content: <ShoppingCartOutlined />,
    },
    {
      content: profilePath.length !== 0 && (
        <MenuProfileImage preview={false} src={fetchImage(profilePath)} />
      ),
    },
  ];

  const classes = useStyles();
  const HorizontalMenu = () => (
    <Menu
      mode="horizontal"
      items={MenuItems?.filter((e) => e.content !== undefined).map(
        (each, index) => ({
          key: index,
          icon: each.content,
        })
      )}
    />
  );
  return (
    <HeaderContent>
      <HeaderRow>
        <Col>
          <div>PetApp</div>
        </Col>
        <Col>
          <ButtonSetCol>
            <div>
              {menuList.map((menu, i) => (
                <Button key={i} onClick={() => menu.clickHandler(menu.uri)}>
                  {menu.title}
                </Button>
              ))}
            </div>
          </ButtonSetCol>
          <ButtonSetCol>
            <HorizontalMenu />
          </ButtonSetCol>
        </Col>
      </HeaderRow>
    </HeaderContent>
  );
};

export default AppHeader;

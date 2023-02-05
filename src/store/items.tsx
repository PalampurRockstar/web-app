import {
  BellOutlined,
  MessageOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import SourabhProfile from "../assets/images/sourabh.jpg";
import "../style/components/items.css";
import { Image } from "antd";
import { MenuProfileImage } from "style/components/items-style";
export const MenuItems = [
  {
    icon: <MessageOutlined />,
  },
  {
    icon: <BellOutlined />,
  },
  {
    icon: <ShoppingCartOutlined />,
  },
  {
    icon: <MenuProfileImage preview={false} src={SourabhProfile} />,
  },
];

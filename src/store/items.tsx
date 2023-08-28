import {
  BellOutlined,
  MessageOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "../style/components/items.css";
import { Image } from "antd";
import { MenuProfileImage } from "style/components/items-style";
import { fetchImage } from "utils/urlFormatter";
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
    icon: <MenuProfileImage preview={false} src={fetchImage(['sourabh.jpg'])} />,
  },
];

import {
  BellOutlined,
  MessageOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import SourabhProfile from "../assets/sourabh.jpg";
import "../";
import { Image } from "antd";
export const MenuItems = [
  {
    name: "Message",
    icon: <MessageOutlined />,
  },
  {
    name: "Notification",
    icon: <BellOutlined />,
  },
  {
    name: "Cart",
    icon: <ShoppingCartOutlined />,
  },
  {
    icon: <Image width={"30px"} src={SourabhProfile} />,
  },
];

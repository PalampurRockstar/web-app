import {
  BellOutlined,
  MessageOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import SourabhProfile from "../assets/sourabh.jpg";
import "../style/components/items.css";
import { Image } from "antd";
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
    icon: <Image className="custom-avt" width={"30px"} src={SourabhProfile} />,
  },
];

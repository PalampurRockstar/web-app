import { Image, Col, Layout } from "antd";
import { SIZING } from "common/constants";
import styles from "styled-components";

const { Header, Content, Footer } = Layout;
export const MenuProfileImage = styles(Image)`
    border-radius: 100%;
    width: ${SIZING.X4L} !important;
    position: relative;
    top: 12px;
    height:65% !important;
`;

import { Row, Col, Layout, Image, Input, Pagination } from "antd";
import { SIZING } from "common/constants";
import styles from "styled-components";

const { Header, Content, Footer } = Layout;

export const BodyContent = styles(Content)`
div.ant-image{
        width:100%;
    }
`;

export const LandingPageImage = styles(Image)`
    width:100%;
    display: flex;
    justify-content: center;
`;
export const HeaderRow = styles(Row)`
  div{
    font-size:20px;
  }
  ul{
    justify-content: flex-end;
    border-bottom:0px
  }
`;

export const PaginationStyle = styles(Pagination)`
    width:80%;
    margin:auto;
    display: flex;
    justify-content: center;
    padding:16px;
    li.ant-pagination-options{
      display:none;
    }
`;

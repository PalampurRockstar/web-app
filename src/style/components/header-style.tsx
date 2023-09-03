import { Row, Col, Layout, theme } from "antd";
import { SIZING } from "common/constants";
import styles from "styled-components";

const { Header, Content, Footer } = Layout;

export const HeaderContent = styles(Header)`
  position: fixed;
  width: 100%;
  z-index: 1000;
`;
export const HeaderRow = styles(Row)`
  justify-content: space-between;  
  div{
    font-size:20px;
    padding: 0 5px;
  }
  div.ant-col{
    display:flex;
  }
 
`;
export const ButtonSetCol = styles(Col)`
width:max-content;  
div{
      height: 100%;
      display:flex;
      justify-content: flex-end;
      color:black;
      button{
          height:${SIZING.X4L};
          margin: auto 2px;
          border-radius: 25px;
        }  
    }
    ul{
      justify-content: flex-end;
      border-bottom:0px;
      li{
        padding:5px !important;
        span{
          marging:0px;
        }
      }
    }
`;

export const MenuButtonSet = styles(Col)`
  div{
      height: 100%;
      display:flex;
      justify-content: flex-end;
      color:black;
      button{
          margin-top:auto;
          margin-bottom:auto;
          height:${SIZING.X4L};
          border-radius: 25px;
        }  
    }
`;

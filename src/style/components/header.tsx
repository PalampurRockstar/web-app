import { Row, Col } from "antd";
import { SIZING } from "common/constants";
import styles from "styled-components";
export const HeaderRow = styles(Row)`
  margin-right: ${SIZING.X3L};
  margin-left: ${SIZING.X3L};
  ul{
    justify-content: flex-end;
  }
`;
export const ButtonSetCol = styles(Col)`
  div{
    height: 100%;
    display:flex;
    justify-content: flex-end;
    button{
        margin-top:auto;
        margin-bottom:auto;
        height:${SIZING.X4L};
        border-radius: 25px;
      }  
  }
  
`;

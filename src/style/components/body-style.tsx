import { Row, Col, Layout, Image, Input } from "antd";
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

export const LocationGroup = styles(Input.Group)`
  display:flex !important;
  width: 400px;
  margin:auto;
  div > div{
    height: ${SIZING.X4L} !important;
    border-right: 2px !important;
    width: 130px !important;
  }
  div > span.ant-select-selection-placeholder{
    padding-inline-end: 27px !important; ;
    line-height: 36px !important; ;
  }
  div > span.ant-select-selection-item{
    line-height: 36px !important; 
  }
  .ant-select-selector{
    border-color: #d9d9d9 !important;
    box-shadow: none !important;
    width: 300px;
  }
  .ant-input-affix-wrapper-focused{
    border-color: #d9d9d9 !important;
    box-shadow: none !important;
  }
  .ant-input-affix-wrapper:hover{
    border-color: #d9d9d9 !important;
  }
  .ant-input-affix-wrapper > span{
    position: relative;
    bottom: 5px;
  }
  span.ant-input-group-addon > button{
    height: ${SIZING.X4L} !important;
  }
  span > span > button{
    border-left:0px;
    animation-duration: 0s !important;
  }

  div > .ant-select-selector:after{
    border-bottom: 2px solid red;
  }
  .ant-input-search-button:not(.ant-btn-primary):hover {
    border-color: #d9d9d9 !important;
  }
  span.ant-input-group-addon > button.ant-btn.ant-btn-background-ghost::after {
    border: none !important;
  }
  span > span{
    
    border-left: 0px;
    height: ${SIZING.X4L} !important;
    border-top-left-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
    border-right: 0px;
  }
`;

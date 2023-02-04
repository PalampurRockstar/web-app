import { makeStyles } from "@mui/styles";
import { Row } from "antd";
import { SIZING } from "common/constants";
import styles from "styled-components";

export type StyleProp = { color: string };

export const HeaderRow = styles(Row)`
  margin-right: ${SIZING.X3L}px;
  margin-left: ${SIZING.X3L}px;
  background-color: red;
  ul{
    justify-content: flex-end;
  }

`;
// { position: "sticky", top: 0, zIndex: 1, width: "100%" }
export const useStyles = makeStyles(
  (theme) => ({
    app_header: {
      position: "sticky",
      top: 0,
      zIndex: 1,
      width: "100%",
    },
    description: {},
  }),
  {
    name: "CustomStyle",
  }
);

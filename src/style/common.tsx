import { makeStyles } from "@mui/styles";

export type StyleProp = { color: string };

export const useStyles = makeStyles(
  (theme) => ({
    app_header: {
      position: "sticky",
      top: 0,
      zIndex: 1,
      width: "100%",
    },
    menu_profile_picture: {
      borderRadius: "50%",
      position: "relative",
      width: "200px",
      height: "200px",
    },
    description: {},
  }),
  {
    name: "CustomStyle",
  }
);

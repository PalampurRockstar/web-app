import { makeStyles } from "@mui/styles";

export type StyleProp = { color: string };

export const useStyles = makeStyles(
  (theme) => ({
    menu_profile_picture: {
      borderRadius: "50%",
      position: "relative",
      width: "200px",
      height: "200px",
    },
    location_input_group: {
      display: "flex",
    },
    display_text: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: "28px",
      lineHeight: "35px",
    },
  }),
  {
    name: "CustomStyle",
  }
);

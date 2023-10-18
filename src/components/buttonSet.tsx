import { Button } from "@mui/material";
import { ButtonSetStyle } from "style/components/button-set-style";

export const ButtonSet = ({ disabled }) => {
  return (
    <ButtonSetStyle>
      <Button variant="outlined" disabled={disabled} className="secondary-btn">
        Cancel
      </Button>
      <Button variant="contained" disabled={disabled}>
        Submit
      </Button>
    </ButtonSetStyle>
  );
};

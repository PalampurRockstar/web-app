import { Checkbox, FormGroup, Radio } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import { DeliveryOptionStyle } from "style/components/delivery-option-style";

export const DeliveryOptions = () => {
  return (
    <DeliveryOptionStyle>
      <FormGroup className="delivery-option-box">
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Delivery"
        />
        <FormControlLabel control={<Checkbox />} label="Pickup" />
      </FormGroup>
    </DeliveryOptionStyle>
  );
};

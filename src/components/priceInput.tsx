import TextField from "@mui/material/TextField";
import { PriceInputStyle } from "style/components/price-input-style";

export const PriceInput = () => {
  return (
    <PriceInputStyle>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Basic price"
        variant="outlined"
        size="small"
        type="number"
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Delivery price"
        variant="outlined"
        size="small"
        placeholder="Standard"
        type="number"
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Post delivery support"
        variant="outlined"
        size="small"
        type="number"
        placeholder="price/hours"
      />
    </PriceInputStyle>
  );
};

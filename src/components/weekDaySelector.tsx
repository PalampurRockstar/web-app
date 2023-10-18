import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { WeekDaySelectorStyle } from "style/components/weekday-selector";

// interface CbxProp {
//   label: string;
//   indexList?: number[];
// }
export const WeekDaySelector = () => {
  const options: string[] = ["All days", "Weekdays", "Weekends"];
  const activeIndex = 0;
  return (
    <WeekDaySelectorStyle>
      <FormGroup className="option-box">
        {options.map((o, i) => (
          <FormControlLabel
            control={<Checkbox defaultChecked={activeIndex === i} />}
            label={o}
          />
        ))}
      </FormGroup>
    </WeekDaySelectorStyle>
  );
};

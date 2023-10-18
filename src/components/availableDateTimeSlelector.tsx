import {
  Card,
  CardContent,
  CardHeader,
  Collapse,
  IconButton,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { AvailableDateTimeSelectorStyle } from "style/components/available-datetime-selector";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import AddIcon from "@mui/icons-material/Add";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import BackspaceIcon from "@mui/icons-material/Backspace";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import { TimePicker } from "react-ios-time-picker";
import { INITIAL_TIME } from "common/constants";
import { validateDuration } from "utils/timeProcessing";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface Availability {
  hasDate: boolean;
  date?: string;
  timeSlots: SlotonDuration[];
}
export interface SlotonDuration {
  from: string;
  to: string;
  isEditing?: boolean;
}
export const AvailableDateTimeSlots = () => {
  const [onEditDuration, setOnEditDuration] = useState<SlotonDuration>({
    from: INITIAL_TIME,
    to: INITIAL_TIME,
  });
  const onChange = (
    timeValue: string,
    keyName: keyof SlotonDuration,
    i: number
  ) => {
    setOnEditDuration((duration) => {
      const finalDuration = { ...duration, [keyName]: timeValue };
      if (
        [onEditDuration.from, onEditDuration.to].includes(INITIAL_TIME) ||
        !validateDuration(finalDuration)
      ) {
        return finalDuration;
      } else {
        setAvailList(
          availList.map((ava, ii) => {
            const finalSlots = ava.timeSlots
              ? [...ava.timeSlots, finalDuration]
              : [finalDuration];
            return ii === i
              ? ({ ...ava, timeSlots: finalSlots } as Availability)
              : ava;
          })
        );
      }
      return finalDuration;
    });
  };
  const toggleExand = (i: number) =>
    setAvailList(
      availList.map((e, ei) => {
        return ei === i ? { ...e, hasDate: !e.hasDate } : e;
      })
    );

  const [availList, setAvailList] = useState<Availability[]>([
    {
      hasDate: false,
      timeSlots: [],
    },
  ]);
  const changeHandler = (e: any, index: number) => {
    setAvailList(
      availList.map((a, i) =>
        index === i ? a : { ...a, date: e.target.value }
      )
    );
  };
  return (
    <AvailableDateTimeSelectorStyle>
      {availList.map((avail, i) => (
        <Card className="date-selector">
          <CardHeader
            className="header-date"
            title={
              <div>
                {avail.date || (
                  <DatePicker
                    label="Date"
                    onChange={(d) => changeHandler(d, i)}
                    slotProps={{
                      textField: { size: "small", fullWidth: true },
                    }}
                    className="datepicker"
                  />
                )}
              </div>
            }
            avatar={<LooksOneIcon />}
            action={
              avail.hasDate ? (
                <>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton>
                    <DeleteOutlineIcon onClick={() => toggleExand(i)} />
                  </IconButton>
                </>
              ) : (
                <IconButton onClick={() => toggleExand(i)}>
                  <AddCircleOutlineIcon />
                </IconButton>
              )
            }
          />
          <Collapse in={avail.hasDate} timeout="auto">
            <CardContent className="time-selector">
              {avail.timeSlots?.map((eachSlot, i) => (
                <div className="value-onEditDuration-slot">
                  {i + 1}. {onEditDuration.from} -- {onEditDuration.to}
                </div>
              ))}
              <div className="input-duration-slot">
                Add From{" "}
                <TimePicker
                  onChange={(e) => onChange(e, "from", i)}
                  value={onEditDuration.from}
                />
                To{" "}
                <TimePicker
                  onChange={(e) => onChange(e, "to", i)}
                  value={onEditDuration.to}
                />
              </div>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </AvailableDateTimeSelectorStyle>
  );
};

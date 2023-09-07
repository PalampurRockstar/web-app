import { Col, Divider, Row } from "antd";
import { useSearchParams } from "react-router-dom";
import { Image } from "antd";
import styled, { CSSProperties } from "styled-components";
import { petImages } from "store/pets";
import { ReactElement, useEffect, useState } from "react";
import humanizeDuration from "humanize-duration";
import {
  BreederProp,
  DocumentProp,
  ImageProp,
  PetProp,
  SigninForm,
} from "models/model";
import Service from "services/petService";
import { Gutter } from "antd/es/grid/row";
import { initCap } from "utils/stringFormatter";
import { ReactComponent as Medal } from "../assets/icons/medal.svg";
import { ReactComponent as Star } from "../assets/icons/star.svg";
import { ReactComponent as LocationIcon } from "../assets/icons/location-sign.svg";
import TextField from "@mui/material/TextField";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { fetchImage } from "utils/urlFormatter";
import credService from "services/credentialService";
import accessToken from "hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "common/constants";
import { CustomTimelineItem, SignUpStyle } from "style/components/signup-style";
import CredService from "services/credentialService";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import TimelineContent from "@mui/lab/TimelineContent";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CheckIcon from "@mui/icons-material/Check";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import KeyIcon from "@mui/icons-material/Key";
import InputIcon from "@mui/icons-material/Input";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import EditIcon from "@mui/icons-material/Edit";
import BackupIcon from "@mui/icons-material/Backup";
import RedeemIcon from "@mui/icons-material/Redeem";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
export interface TimelineItemProp {
  header: string;
  content: React.ReactNode;
  time: string;
  doneInput?: boolean;
  icon: React.ReactNode;
  key?: keyof SigninForm;
  height?: string;
  contentColor?:
    | "secondary"
    | "inherit"
    | "grey"
    | "primary"
    | "error"
    | "info"
    | "success"
    | "warning";
}

export const CustomizedTimeline = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [timeline, setTimeline] = useState<TimelineItemProp[]>([]);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [doneList, setDoneList] = useState<Set<keyof SigninForm>>(new Set([]));
  const [state, setState] = useState<SigninForm>({
    date_of_birth: null,
    username: "",
    password: "",
  } as unknown as SigninForm);
  const clickCheckHandler = (key: keyof SigninForm) => {
    console.log("clickCheckHandler ");
    console.log("Before dl : ", doneList, key);
    if (doneList.has(key)) doneList.delete(key);
    else doneList.add(key);
    console.log("After dl : ", doneList, key);
    setDoneList(doneList);
  };
  const changeHandler = (e, key: keyof SigninForm) => {
    setState((s) => {
      const newState = {
        ...s,
        [key]: key === "date_of_birth" ? e.toLocaleString() : e.target.value,
      };
      return newState;
    });
    setDoneList((l) => {
      l.delete(key);
      return l;
    });
  };
  useEffect(() => {
    setTimeline(timelineItems);
  });
  const timelineItems: TimelineItemProp[] = [
    {
      key: "username" as keyof SigninForm,
      header: "Eat",
      content: (
        <Row>
          <Col span={20}>
            <FormControl fullWidth variant="outlined">
              {doneList.has("username") ? (
                state.username
              ) : (
                <>
                  <InputLabel size="small">Email/Phone</InputLabel>
                  <OutlinedInput
                    value={state.username}
                    size="small"
                    type="text"
                    label="Email/Phone"
                    onKeyDown={(e) =>
                      e.key === "Enter" && clickCheckHandler("username")
                    }
                    onChange={(e) => changeHandler(e, "username")}
                  />
                </>
              )}
            </FormControl>
          </Col>
          <Col span={4}>
            {doneList.has("username") ? (
              <Button onClick={() => clickCheckHandler("username")}>
                <EditIcon style={{ color: "green" }} />
              </Button>
            ) : (
              <Button
                fullWidth
                variant="contained"
                className="btn"
                onClick={() => clickCheckHandler("username")}
              >
                <CheckIcon />
              </Button>
            )}
          </Col>
        </Row>
      ),
      time: "9:30 am",
      icon: doneList.has("username") ? (
        <CheckCircleOutlineIcon style={{ color: "green" }} />
      ) : (
        <AlternateEmailIcon />
      ),
    },
    {
      key: "password" as keyof SigninForm,
      header: "Code",
      height: "110px",
      content: (
        <Row className="password-container">
          <Col span={20}>
            <FormControl fullWidth variant="outlined">
              {doneList.has("password") ? (
                <div>Password: **********</div>
              ) : (
                <>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel
                      size="small"
                      htmlFor="outlined-adornment-password"
                    >
                      Password
                    </InputLabel>
                    <OutlinedInput
                      size="small"
                      fullWidth
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => changeHandler(e, "password")}
                      onKeyDown={(e) =>
                        e.key === "Enter" && clickCheckHandler("password")
                      }
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                  <FormControl
                    fullWidth
                    variant="outlined"
                    className="confirm-password"
                  >
                    <InputLabel
                      size="small"
                      htmlFor="outlined-adornment-password"
                    >
                      Confirm Password
                    </InputLabel>
                    <OutlinedInput
                      size="small"
                      fullWidth
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      onChange={(e) => changeHandler(e, "password")}
                      onKeyDown={(e) =>
                        e.key === "Enter" && clickCheckHandler("password")
                      }
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                </>
              )}
            </FormControl>
            <Row>Password must contain:</Row>
            <Row gutter={20}>
              <Col>&#8226; lower-case</Col>
              <Col>&#8226; numbers</Col>
            </Row>
            <Row gutter={20}>
              <Col>&#8226; upper-case</Col>
              <Col>&#8226; 8-16 character</Col>
            </Row>
          </Col>
          <Col span={4} className="password-check-btn">
            {doneList.has("password") ? (
              <CheckIcon style={{ color: "green" }} />
            ) : (
              <Button
                fullWidth
                variant="contained"
                className="btn"
                onClick={() => clickCheckHandler("password")}
              >
                <CheckIcon />
              </Button>
            )}
          </Col>
        </Row>
      ),
      time: "10:00 am",
      icon: <KeyIcon />,
    },
    {
      header: "Sleep",
      content: (
        <Row>
          <Col span={20}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                // value={state.date_of_birth}
                onChange={(d) => changeHandler(d, "date_of_birth")}
                slotProps={{ textField: { size: "small", fullWidth: true } }}
                className="datepicker"
              />
            </LocalizationProvider>
          </Col>
          <Col span={4}>
            {doneList.has("date_of_birth") ? (
              <CheckIcon style={{ color: "green" }} />
            ) : (
              <Button
                fullWidth
                variant="contained"
                className="btn"
                onClick={() => clickCheckHandler("date_of_birth")}
              >
                <CheckIcon />
              </Button>
            )}
          </Col>
        </Row>
      ),
      time: "7:00 am",
      icon: <CalendarMonthIcon />,
    },
    {
      header: "Repeat",
      content: (
        <Button fullWidth variant="contained" className="btn">
          SUBMIT&nbsp;&nbsp;&nbsp;
          <InputIcon />
        </Button>
      ),
      time: "11:00 am",
      icon: <BackupIcon />,
    },
    {
      header: "Bonus",
      content: (
        <div className="highlight-container">
          <div>Get bonus&nbsp;&nbsp;</div>
          <div className="highlighted">
            {" "}
            &nbsp;&nbsp;666 cookies&nbsp;&nbsp;
          </div>
          <img
            src={fetchImage(["icons", "gift.svg"])}
            className="gift-image"
            width="40px"
            height="40px"
          />
        </div>
      ),
      time: "11:00 am",
      icon: <RedeemIcon />,
    },
  ].map((i) => {
    return { ...i, contentColor: "primary" };
  });
  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {timeline.map((item) => (
        <CustomTimelineItem
          color="green"
          inlist={{
            belowHeight: item.height,
          }}
        >
          {/* <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
            {item.time}
          </TimelineOppositeContent> */}
          <TimelineSeparator className="timeline-connector">
            <TimelineConnector sx={{ bgcolor: "red" }} />
            <TimelineDot color={item.contentColor}>{item.icon}</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="timeline-content">
            {item.content}
          </TimelineContent>
        </CustomTimelineItem>
      ))}
    </Timeline>
  );
};

const SignUp = () => {
  return (
    <SignUpStyle
      style={{ backgroundImage: `url(${fetchImage(["signup-3.jpg"])})` }}
    >
      <Row className="signup-container" justify="center">
        <Col span={24} className="timeline-container">
          <CustomizedTimeline />
        </Col>
      </Row>
    </SignUpStyle>
  );
};
export default SignUp;

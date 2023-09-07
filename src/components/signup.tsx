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
enum FormRows {
  EMAIL,
  PASSWORD,
  DOB,
  SUBMIT,
  BONUS,
}
export interface TimelineItemProp {
  // name: keyof FormRows;
  header: string;
  content: React.ReactNode;
  time: string;
  doneInput?: boolean;
  icon: React.ReactNode;
  height?: string;
  topConnectorColor?: string;
  bottomConnectorColor?: string;
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
  const [emailEdit, setEmailEdit] = useState(true);
  const [connectors, setConnectors] = useState<boolean[]>(Array(6).fill(false));
  const [state, setState] = useState<SigninForm>({
    date_of_birth: null,
    username: "",
    password: "",
  } as unknown as SigninForm);
  const clickCheckHandler = () => {
    setEmailEdit((e) => !e);
  };
  const changeHandler = (e, key: keyof SigninForm) => {
    setState((s) => {
      const newState = {
        ...s,
        [key]: key === "date_of_birth" ? e.toLocaleString() : e.target.value,
      };
      return newState;
    });
  };
  useEffect(() => {
    setTimeline(timelineItems);
  });
  const decideColor = (isTrue: boolean) => (isTrue ? "green" : "gray");

  const timelineItems: TimelineItemProp[] = [
    {
      // name: FormRows.EMAIL,
      header: "Eat",
      topConnectorColor: decideColor(connectors[0]),
      bottomConnectorColor: decideColor(connectors[1]),
      content: (
        <Row gutter={4}>
          <Col span={19}>
            <FormControl fullWidth variant="outlined">
              {!emailEdit ? (
                state.username
              ) : (
                <>
                  <InputLabel size="small">Email/Phone</InputLabel>
                  <OutlinedInput
                    value={state.username}
                    size="small"
                    type="text"
                    label="Email/Phone"
                    onTouchStart={() =>
                      setConnectors((c) => {
                        c[0] = true;
                        return c;
                      })
                    }
                    onKeyDown={(e) => e.key === "Enter" && clickCheckHandler()}
                    onChange={(e) => changeHandler(e, "username")}
                  />
                </>
              )}
            </FormControl>
          </Col>
          <Col span={5}>
            {!emailEdit ? (
              <Button onClick={() => clickCheckHandler()} color="primary">
                <EditIcon />
              </Button>
            ) : (
              <Button
                fullWidth
                variant="contained"
                className="btn"
                onClick={() => clickCheckHandler()}
              >
                <CheckIcon />
              </Button>
            )}
          </Col>
        </Row>
      ),
      time: "9:30 am",
      icon: !emailEdit ? (
        <CheckCircleOutlineIcon style={{ color: "green" }} />
      ) : (
        <AlternateEmailIcon />
      ),
    },
    {
      header: "Code",
      height: "110px",
      // name: FormRows.PASSWORD,
      content: (
        <Row className="password-container">
          <Col span={24}>
            <FormControl fullWidth variant="outlined">
              <FormControl fullWidth variant="outlined">
                <InputLabel size="small" htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  size="small"
                  fullWidth
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => changeHandler(e, "password")}
                  onKeyDown={(e) => e.key === "Enter" && clickCheckHandler()}
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
                <InputLabel size="small" htmlFor="outlined-adornment-password">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  size="small"
                  fullWidth
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => changeHandler(e, "password")}
                  onKeyDown={(e) => e.key === "Enter" && clickCheckHandler()}
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
        </Row>
      ),
      time: "4:00 am",
      icon: <KeyIcon />,
    },
    {
      header: "Sleep",
      // name: FormRows.DOB,
      content: (
        <Row>
          <Col span={24}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                // value={state.date_of_birth}
                onChange={(d) => changeHandler(d, "date_of_birth")}
                slotProps={{ textField: { size: "small", fullWidth: true } }}
                className="datepicker"
              />
            </LocalizationProvider>
          </Col>
        </Row>
      ),
      time: "7:00 am",
      icon: <CalendarMonthIcon />,
    },
    {
      header: "Repeat",
      // name: FormRows.SUBMIT,
      content: (
        <Button fullWidth variant="contained" className="btn" color="primary">
          SUBMIT&nbsp;&nbsp;&nbsp;
          <InputIcon />
        </Button>
      ),
      time: "11:00 am",
      icon: <BackupIcon />,
    },
    {
      header: "Bonus",
      // name: FormRows.BONUS,
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
            topConnectorColor: item.topConnectorColor,
            bottomConnectorColor: item.bottomConnectorColor,
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

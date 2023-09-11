import { Col, Divider, Row } from "antd";
import { Image } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";
import { SigninForm } from "models/model";
import {
  Button,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import debounce from "lodash/debounce";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { fetchImage } from "utils/urlFormatter";
import Timeline from "@mui/lab/Timeline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import TimelineContent from "@mui/lab/TimelineContent";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import KeyIcon from "@mui/icons-material/Key";
import InputIcon from "@mui/icons-material/Input";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import BackupIcon from "@mui/icons-material/Backup";
import RedeemIcon from "@mui/icons-material/Redeem";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import useValidateUserName from "hooks/useValidateUserName";
import LoopIcon from "@mui/icons-material/Loop";
import _ from "lodash";
import { COLOR, ROUTES, usernameRegex } from "common/constants";
import useCreateUser from "hooks/useCreateUser";
import { useNavigate } from "react-router-dom";
import GradingIcon from "@mui/icons-material/Grading";
import ThreeRunningDots from "components/threeDot";
import GiftBox from "components/giftBox";
import MyPopup from "components/popup";
import { CustomTimelineItem, SignUpStyle } from "style/pages/signup-style";

export interface TimelineItemProp {
  header: string;
  content: React.ReactNode;
  time: string;
  doneInput?: boolean;
  icon: React.ReactNode;
  height?: string;
  iconColor?: string;
}
const SocialMEdiaOptions = () => {
  return (
    <Row className="social-media-container" justify="space-around">
      <Col>
        <Button>
          <Image
            src={fetchImage(["icons", "google.svg"])}
            preview={false}
            height="25px"
          />
        </Button>
      </Col>
      <Col>
        <Button>
          <Image
            src={fetchImage(["icons", "facebook-colored.svg"])}
            preview={false}
            height="30px"
          />
        </Button>
      </Col>
      <Col>
        <Button>
          <Image
            src={fetchImage(["icons", "instagram-colored.svg"])}
            preview={false}
            height="30px"
          />
        </Button>
      </Col>
    </Row>
  );
};

export const CustomizedTimeline = () => {
  const navigate = useNavigate();
  const [openPopup, setOpenPopup] = useState(false);
  const [checked, setChecked] = useState(false);
  const [state, setState] = useState<SigninForm>({
    date_of_birth: "",
    username: "",
    password: "",
  } as SigninForm);
  const [stateError, setStateError] = useState<SigninForm>({
    date_of_birth: "",
    username: "",
    password: "",
  });
  type PasswordSet = {
    password0: boolean;
    password1: boolean;
  };

  const { loadingValidateUid, recommendation, setLoading, validateUserName } =
    useValidateUserName(setStateError);
  const { loadingSubmit, isCreateed, createUser } = useCreateUser();
  const [hidePassword, setHidePassword] = useState<PasswordSet>({
    password0: true,
    password1: true,
  });
  const [password0, setPassword0] = useState("");
  const togglePassword = (key: keyof PasswordSet) => {
    setHidePassword({ ...hidePassword, [key]: !hidePassword[key] });
  };
  const foundError = (key: keyof SigninForm) => stateError[key].length === 0;

  const changeHandler = (e, key: keyof SigninForm) => {
    setState((s) => {
      const newState = {
        ...s,
        [key]: key === "date_of_birth" ? e.toLocaleString() : e.target.value,
      };
      return newState;
    });
    if (key === "username") debouncedSearch(e.target.value);
    if (key === "password") verifyPassword(false, e.target.value, password0);
    if (key === "date_of_birth") validateDOB(e);
  };
  const validateDOB = (date) => {
    const today = new Date();
    const minDate = new Date(today);
    minDate.setFullYear(today.getFullYear() - 110);
    const maxDate = new Date(today);
    maxDate.setFullYear(today.getFullYear() - 10);
    const dateErr =
      date < minDate || date > maxDate
        ? "Selected dob should be between 10 and 110 years ago"
        : "";
    setStateError({ ...stateError, date_of_birth: dateErr });
  };

  const validateUserNmeInternally = (username: string) => {
    if (usernameRegex.test(username)) {
      validateUserName(username);
    } else {
      setLoading(false);
      setStateError((sr) => {
        return { ...sr, username: "Username is not valid!" };
      });
    }
  };
  const debouncedSearch = useCallback(
    _.debounce(validateUserNmeInternally, 300),
    []
  );

  const invalidPassword = "Invalid parrword!";
  const passwordDoesntMatch = "Password doesn't match!";
  const verifyPassword = useCallback(
    _.debounce((isFirst: boolean, p1: string, p0: string) => {
      let err: string = "";
      if (isFirst) {
        if (p1?.length > 0 && p1 !== p0) {
          err = passwordDoesntMatch;
        } else {
          err = !usernameRegex.test(p0) ? invalidPassword : "";
        }
      } else {
        if (!usernameRegex.test(p0) || !usernameRegex.test(p1)) {
          err = invalidPassword;
        } else if (p1 !== p0) {
          err = passwordDoesntMatch;
        }
      }
      setStateError({
        ...stateError,
        password: err,
      });
    }, 300),
    []
  );

  const ShowSuggestionForUserName = () => {
    if (state.username?.length === 0) return "";

    return loadingValidateUid ? (
      "loading.."
    ) : foundError("username") ? (
      ""
    ) : (
      <>
        <div className="error">{stateError.username}</div>
      </>
    );
  };

  const isDisabled = (key: keyof SigninForm) => {
    if (isCreateed) return true;
    return !(state[key]?.length > 0 && stateError[key]?.length == 0);
  };
  const timelineItems: TimelineItemProp[] = [
    {
      header: "Eat",
      height: "35px",
      content: (
        <div className="username-box">
          <Row gutter={4}>
            <Col span={24}>
              <FormControl fullWidth variant="outlined">
                <>
                  <InputLabel size="small">Email/Phone</InputLabel>
                  <OutlinedInput
                    disabled={isCreateed}
                    value={state.username}
                    size="small"
                    type="text"
                    label="Email/Phone"
                    onChange={(e) => {
                      setLoading(true);
                      changeHandler(e, "username");
                    }}
                  />
                </>
              </FormControl>
            </Col>
          </Row>
          <Row>
            <div className="validate-username-result">
              {ShowSuggestionForUserName()}
              {recommendation.length > 0 && state.username?.length > 0 ? (
                <div className="suggestions">
                  Please choose : {recommendation?.join(", ")}
                </div>
              ) : (
                <div className="instruction-container">
                  You can enter your phone number/email/any username
                </div>
              )}
            </div>
          </Row>
        </div>
      ),
      time: "9:30 am",
      icon: <AlternateEmailIcon />,
      iconColor:
        state.username.length > 0 && stateError.username?.length === 0
          ? "green"
          : "",
    },
    {
      header: "Password",
      height: "110px",
      iconColor:
        state.password.length > 0 && stateError.password?.length === 0
          ? "green"
          : "",
      content: (
        <Row className="password-container">
          <Col span={24}>
            <FormControl fullWidth variant="outlined">
              <FormControl fullWidth variant="outlined">
                <InputLabel size="small" htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  disabled={isDisabled("username")}
                  size="small"
                  fullWidth
                  id="outlined-adornment-password"
                  type={hidePassword.password0 ? "password" : "text"}
                  onChange={(e) => {
                    setPassword0(e.target.value);
                    verifyPassword(true, state.password, e.target.value);
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => togglePassword("password0")}
                        edge="end"
                        disabled={isDisabled("username")}
                      >
                        {hidePassword.password0 ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
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
                  disabled={isDisabled("username")}
                  size="small"
                  fullWidth
                  id="outlined-adornment-password"
                  type={hidePassword.password1 ? "password" : "text"}
                  onChange={(e) => {
                    changeHandler(e, "password");
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => togglePassword("password1")}
                        edge="end"
                        disabled={isDisabled("username")}
                      >
                        {hidePassword.password1 ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </FormControl>
            {stateError?.password?.length ? (
              <div className="error password-error">{stateError?.password}</div>
            ) : (
              ""
            )}
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
      iconColor:
        state.date_of_birth.length > 0 && stateError.date_of_birth?.length === 0
          ? "green"
          : "",
      header: "DOB",
      content: (
        <div className="datepicker-container">
          <Row>
            <Col span={24}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  disabled={isDisabled("password")}
                  label="Date of birth"
                  onChange={(d) => changeHandler(d, "date_of_birth")}
                  slotProps={{ textField: { size: "small", fullWidth: true } }}
                  className="datepicker"
                />
              </LocalizationProvider>
            </Col>
          </Row>
          <Row className="instruction-container">
            {stateError.date_of_birth.length === 0 ? (
              <div>Age must be more than 10 years</div>
            ) : (
              <div className="error">{stateError.date_of_birth}</div>
            )}
          </Row>
        </div>
      ),
      // height: "20px",
      time: "7:00 am",
      icon: <CalendarMonthIcon />,
    },
    {
      height: "5px",
      header: "TNC",
      content: (
        <Row className="tnc-container">
          <Col span={24}>
            <Row className="tnc-instruction">
              By clicking the "I Agree" button, you acknowledge that you have
              read and agree to these <a>terms and conditions</a>. If you do not
              agree to these terms, please do not register or use this service
            </Row>
            <Row className="checkbox-row">
              <Checkbox
                disabled={isDisabled("date_of_birth")}
                onClick={() => setChecked((c) => !c)}
              />
              <Typography>I agree</Typography>
            </Row>
          </Col>
        </Row>
      ),
      time: "11:00 am",
      iconColor: checked ? "green" : "",
      icon: <GradingIcon />,
    },
    {
      header: "SUBMIT",
      content: (
        <Button
          fullWidth
          variant="contained"
          className="btn"
          color="primary"
          disabled={!checked || loadingSubmit || isCreateed}
          onClick={() => createUser(state)}
        >
          {loadingSubmit ? (
            <div className="threedots-container">
              <ThreeRunningDots />
            </div>
          ) : (
            <>
              SUBMIT&nbsp;&nbsp;&nbsp;
              <InputIcon />
            </>
          )}
        </Button>
      ),
      time: "11:00 am",
      iconColor: loadingSubmit ? "#f24d59" : isCreateed ? "green" : "",
      icon: loadingSubmit ? (
        <LoopIcon className="rotate-icon" />
      ) : isCreateed ? (
        <CheckCircleOutlineIcon />
      ) : (
        <BackupIcon />
      ),
    },
    {
      iconColor: isCreateed ? "green" : "",
      header: "Bonus",
      content: (
        <div className="highlight-container">
          <div>Get bonus&nbsp;&nbsp;</div>
          <div className="highlighted">&nbsp;&nbsp;666 cookies&nbsp;&nbsp;</div>
          <GiftBox open={isCreateed} ifOpen={() => setOpenPopup(true)} />
        </div>
      ),
      time: "11:00 am",
      icon: <RedeemIcon />,
    },
  ];

  return (
    <Timeline
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <MyPopup
        open={openPopup}
        onOpen={() => navigate(ROUTES.SIGNIN)}
        onClose={() => navigate(ROUTES.HOME)}
      />
      {timelineItems.map((item, i) => (
        <CustomTimelineItem
          key={i}
          color="green"
          inlist={{
            belowHeight: item.height,
          }}
        >
          <TimelineSeparator className="timeline-connector">
            <TimelineConnector sx={{ bgcolor: "gray" }} />
            <TimelineDot sx={{ bgcolor: item.iconColor || COLOR.PRIMARY }}>
              {item.icon}
            </TimelineDot>
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
const HeaderText = ({ header, text }) => (
  <div className="text-container">
    <div className="text header-text">{header}</div>
    <div className="text">{text}</div>
  </div>
);
const RedirectToSigin = () => {
  const navigate = useNavigate();
  return (
    <div className="redirect-signin-container">
      Do you have an account? &nbsp;&nbsp;
      <h4 className="signin-text">
        <a onClick={() => navigate(ROUTES.SIGNIN)}>Sign In</a>
      </h4>
    </div>
  );
};
const SignUp = () => {
  return (
    <SignUpStyle
      style={{ backgroundImage: `url(${fetchImage(["signup-3.jpg"])})` }}
    >
      <Row className="signup-form" justify="center">
        <Col span={24} className="timeline-container">
          <HeaderText header="Simple Registration" text="with social media" />
          <SocialMEdiaOptions />
          <Divider>
            <Chip label="OR" />
          </Divider>
          <CustomizedTimeline />
          <RedirectToSigin />
        </Col>
      </Row>
    </SignUpStyle>
  );
};
export default SignUp;

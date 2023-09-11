import { Col, Divider, Row } from "antd";
import { Image } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";
import { SigninForm } from "models/model";
import {
  Button,
  Chip,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
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
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import useValidateUserName from "hooks/useValidateUserName";
import LoopIcon from "@mui/icons-material/Loop";
import _ from "lodash";
import { COLOR, ROUTES, usernameRegex } from "common/constants";
import useCreateUser from "hooks/useCreateUser";
import { useNavigate } from "react-router-dom";
import { UserOnboardingStyle } from "style/pages/user-onboarding-style";

const UserOnboarding = () => {
  return (
    <UserOnboardingStyle
      style={{ backgroundImage: `url(${fetchImage(["signup-3.jpg"])})` }}
    >
      <Row className="signup-form" justify="center">
        <Col span={24} className="timeline-container">
          <Timeline>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Eat</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Code</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>Sleep</TimelineContent>
            </TimelineItem>
          </Timeline>
        </Col>
      </Row>
    </UserOnboardingStyle>
  );
};
export default UserOnboarding;

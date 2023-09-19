import { Col, Row } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";
import { fetchImage } from "utils/urlFormatter";
import Timeline from "@mui/lab/Timeline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import _ from "lodash";
import { UserOnboardingStyle } from "style/pages/user-onboarding-style";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import CustomSwitch from "components/customSwitch";
import PersonIcon from "@mui/icons-material/Person";
import ContactsIcon from "@mui/icons-material/Contacts";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { OnboardingProp } from "models/model";
import { Button } from "@mui/material";
import styled from "styled-components";

const iconStyle = { width: "20px", height: "20px" };
export const renderList: OnboardingProp[] = [
  {
    header: "Decide",
    icon: <PersonIcon style={iconStyle} />,
    content: (
      <>
        <Row className="decision-input">Some</Row>
        <Row className="button-set">
          <Button>Next</Button>
        </Row>
      </>
    ),
  },
  {
    header: "Personal information",
    icon: <PersonIcon style={iconStyle} />,
  },
  {
    header: "Contact information",
    icon: <ContactsIcon style={iconStyle} />,
  },
  {
    header: "Preference",
    icon: <FavoriteIcon style={iconStyle} />,
  },
];

export const SellerOnboardingForm = () => {
  const [chooseIndex, setChooseIndex] = useState<number>(0);
  return (
    <SellerOnboardingStyle>
      <Row justify="center" className="timeline-container">
        <Col>
          <Timeline>
            {renderList.map((item, i) => (
              <TimelineItem key={i}>
                <TimelineOppositeContent className="opposite-header" />
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot color="secondary">{item.icon}</TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </Col>
        <Col>
          <div className="input-section">
            <div>{renderList[chooseIndex].header}</div>
            <div>{renderList[chooseIndex].content}</div>
          </div>
        </Col>
      </Row>
    </SellerOnboardingStyle>
  );
};

export const SellerOnboardingStyle = styled.div`
  .timeline-container {
    .opposite-header {
      background: red;
      display: none;
    }
    .input-section {
      padding: 35px 15px;
      min-width: 100px;
      .decision-input {
        display: flex;
      }
      .button-set {
        position: absolute;
        bottom: 0;
        left: 50%; /* You can adjust this value to center it horizontally */
        transform: translateX(-50%);
      }
    }
    justify-content: unset;
  }
`;

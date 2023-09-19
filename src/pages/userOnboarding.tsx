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
import { BuyerOnboardingForm } from "components/onboardBuyer";
import { SellerOnboardingForm } from "components/onboardSeller";
import MyPopup from "components/popup";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "common/constants";

const UserOnboarding = () => {
  const [checked, setChecked] = useState<boolean>(false);
  const buyer = useState(false);
  const [isBuyer, setIfBuyer] = buyer;
  const [openPopup, setOpenPopup] = useState(false);
  const navigate = useNavigate();
  return (
    <UserOnboardingStyle
      style={{ backgroundImage: `url(${fetchImage(["signup-3.jpg"])})` }}
    >
      <MyPopup
        type="success"
        onClose={() => {}}
        open={openPopup}
        headerText="You have succesfully onboarded!"
        content="We will redirect you to the home page"
        buttonSet={[
          {
            label: "Ok",
            onClick: () => navigate(ROUTES.HOME),
          },
        ]}
        perform={{ duration: 3000, to: () => navigate(ROUTES.HOME) }}
      />
      <div className="onboarding-container">
        <Row className="porpose-decision">
          <Col className="label">Are you a</Col>
          <Col>
            <CustomSwitch
              width={220}
              sliderWidth={100}
              height={40}
              buyer={buyer}
            />
          </Col>
        </Row>
        {isBuyer ? (
          <SellerOnboardingForm />
        ) : (
          <BuyerOnboardingForm onDone={(s) => setOpenPopup(true)} />
        )}
      </div>
    </UserOnboardingStyle>
  );
};
export default UserOnboarding;

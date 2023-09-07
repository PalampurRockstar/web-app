import TimelineItem from "@mui/lab/TimelineItem";
import styled from "styled-components";

export const SignUpStyle = styled.div`
  .signup-container {
    .MuiTimeline-root {
      background: rgb(249 236 236 / 88%);
      border-radius: 12px;
      padding: 25px;
      margin: 20px;
    }
    .timeline-container {
      max-width: 500px;
    }
  }

  //   background-size: 50% auto;
  //   opacity: 0.6;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const CustomTimelineItem = styled(TimelineItem)`
  .timeline-connector {
    .MuiTimelineConnector-root {
      background-color: ${(props) => props.color || "red"};
    }
    span:nth-child(1) {
      background-color: ${(props) => props.inlist.topConnectorColor};
      height: ${(props) => props.inlist.aboveHeight || "10px"};
      min-height: ${(props) => props.inlist.aboveHeight || "10px"};
      max-height: ${(props) => props.inlist.aboveHeight || "10px"};
    }
    span:nth-child(3) {
      background-color: ${(props) => props.inlist.bottomConnectorColor};
      height: ${(props) => props.inlist.belowHeight || "10px"};
    }
  }
  .timeline-content {
    display: flex;
    align-items: center;
    .ant-row {
      width: 100%;
    }
    .password-container {
      // position: relative;
      // top: 22px;
      position: relative;
      top: 13px;
      div {
        margin-bottom: 4px;
      }
      .password-check-btn {
        display: flex;
        align-items: flex-start;
        position: relative;
        top: 49px;
      }
      .pwd-inst-container {
        display: flex;
      }
    }
    .datepicker {
      width: 100%;
    }
    .gift-image {
      position: absolute;
      right: 22px;
      top: 15px;
    }
  }
  .MuiTimelineOppositeContent-positionRight {
    max-width: 100px;
  }

  .MuiFormControl-fullWidth {
    width: 100%;
  }
  .btn {
    padding: 8px;
  }
  .highlighted {
    background: #dbcad5;
  }
  .highlight-container {
    display: flex;
  }
`;

import TimelineItem from "@mui/lab/TimelineItem";
import { COLOR } from "common/constants";
import styled from "styled-components";

export const SignUpStyle = styled.div`
  .signup-form {
    .redirect-signin-container {
      display: flex;
      justify-content: center;
      h4 {
        margin: 0px;
      }
    }
    .timeline-container {
      .tnc-container {
        position: relative;
        top: 13px;
        .checkbox-row {
          background: rgba(249, 236, 236, 0.88);
          width: max-content;
          svg {
            font-size: 13px;
          }
          p {
            font-size: 15px;
            padding-right: 5px;
          }
          span {
            padding: 0px;
            padding: 5px;
          }
        }
        .tnc-instruction {
          display: flow;
          font-size: 12px;
        }
      }
      .threedots-container {
        height: 24px;
        width: 100%;
        position: relative;
        top: 6px;
        margin: auto 10px;
      }
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      .rotate-icon {
        animation: spin 2s linear infinite; /* Adjust the animation duration as needed */
      }
      .username-box {
        width: 100%;
        .done-username {
          padding: 5px;
        }
      }
      .validate-username-result {
        height: 25px;
      }
      .password-error {
        position: relative;
        bottom: 6px;
        margin: 0px;
      }
      .error {
        color: red;
        font-size: 11px;
      }
      .success {
        color: green;
      }
      .suggestions {
        color: ${COLOR.PRIMARY};
        font-size: 12px;
      }
      max-width: 500px;
      background: rgb(249 236 236 / 88%);
      border-radius: 12px;
      padding: 25px;
      margin: 20px;
      .ant-divider-horizontal.ant-divider-with-text {
        margin: 8px 0;
      }
      .text-container {
        margin-top: 20px;
        .text {
          display: flex;
          justify-content: center;
          margin: 3px;
        }
        .header-text {
          font-size: x-large;
          font-weight: bold;
        }
      }
      .social-media-container {
        margin: 14px 20% 14px;

        button {
          border-radius: 31px;
          background: #c5b5b5;
          height: 50px;
          width: 36px;
          min-width: 50px;
        }
      }
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
  .instruction-container {
    font-size: 11px;
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
    .datepicker-container {
      position: relative;
      width: 100%;
      top: 8px;
      .datepicker {
      }
    }
    .gift-image {
      position: absolute;
      left: 118px;
      top: 89px;
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
    height: 24px;
  }
  .highlight-container {
    display: flex;
  }
`;

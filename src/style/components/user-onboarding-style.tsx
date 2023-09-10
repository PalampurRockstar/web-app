import styled from "styled-components";

export const UserOnboardingStyle = styled.div`
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

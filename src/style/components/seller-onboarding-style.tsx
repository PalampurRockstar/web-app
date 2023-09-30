import styled from "styled-components";

export const SellerOnboardingStyle = styled.div`
  .timeline-container {
    .header-section {
      height: 30px;
      margin: 2px;
      h3 {
        margin: 0px;
      }
    }
    .opposite-header {
      background: red;
      display: none;
    }
    .input-section {
      padding: 6px 14px;
      .MuiFormControl-fullWidth {
        // margin: 5px 0px;
      }
      .input-area {
        height: 145px;
      }
      .picture-input {
        .upload-photo {
          display: flex;
          justify-content: center;
        }
      }
      .picture-input {
        img {
          display: flex;
          margin: 10px auto;
        }
      }
      .personal-input {
        .select-checkbox {
          display: flex;
          flex-direction: row;
          align-items: center;
          .each-checkbox {
            display: flex;
            item-align: center;
            margin: 0px 5px;
          }
          .MuiFormControlLabel-root {
            margin: 0px 10px;
          }
          .MuiCheckbox-sizeMedium {
            padding: 0px;
          }
          h4 {
            margin: 0px;
            margin-right: 10px;
          }
          div {
            margin-right: 5px;
          }
          span,
          svg {
            font-size: 14px;
          }
          label {
            width: max-content;
            margin: 0px;
          }
        }
      }
      .contact-input {
        .preferred-media {
          span,
          svg {
            font-size: 14px;
          }
          label {
            margin: 0px;
          }
        }
      }
      .button-set {
        display: flex;
        justify-content: space-between;
        margin: 5px auto;
      }
    }
    .error {
      height: 14px;
      color: red;
      font-size: 11px;
    }
    justify-content: unset;
  }
`;

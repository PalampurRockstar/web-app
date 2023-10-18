import { Switch } from "@mui/material";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import { fetchImage } from "utils/urlFormatter";

export const PetOnboardingStyle = styled.div`
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  opacity: 0.8;
  .header-blank {
    margin: 25px;
  }
  .pet-container {
    // min-height: 500px;
    display: flex;
    justify-content: center;
    .input-box {
      background: rgba(249, 236, 236, 50%);
      border-radius: 20px;
      margin: 16px;
      .each-card {
        width: 300px;
        margin: 10px;
        margin-bottom: 0px;
        // background: rgba(249, 236, 236, 40%);
        border-radius: 18px;
        .card-header {
          padding: 10px;
          background: rgba(249, 236, 236);
        }
      }
      .each-card:last-child {
        margin: 10px;
      }
      .picture-input {
        display: flex;
        justify-content: center;
        flex-direction: column;
        // padding: 10px;
        .upload-photo {
          display: flex;
          justify-content: center;
        }
      }
      .MuiDivider-root {
        padding-bottom: 10px;
      }
    }
  }
`;

import { Switch } from "@mui/material";
import styled from "styled-components";
import { styled as muiStyled } from "@mui/material/styles";
import { fetchImage } from "utils/urlFormatter";

export const PetOnboardingStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .threedots-container {
    height: 24px;
    width: 100%;
    position: relative;
    top: 6px;
    margin: auto 10px;
  }
  .onboarding-container {
    .porpose-decision {
      display: flex;
      justify-content: center;
      margin: 0px 10px;
    }
    ul {
      padding: 6px;
    }
    background: rgb(249 236 236 / 88%);
    border-radius: 12px;
    margin: 20px;
    padding: 20px 10px;
    .label {
      display: flex;
      align-items: center;
    }
  }
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

import styled from "styled-components";
import { useCallback, useState } from "react";
import { PetProp } from "models/model";
import {
  Button,
  FormControlLabel,
  FormGroup,
  Switch,
  SwitchProps,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "common/constants";
import CredService from "services/credentialService";
import LoopIcon from "@mui/icons-material/Loop";
import _ from "lodash";
import GiftBox from "./giftBox";
import MyPopup from "./popup";
import CustomSwitch from "./customSwitch";
import styles from "./styles.module.css";

interface LocationState {
  from: PetProp;
}

const TestView = () => {
  const search = (query) => console.log(`Searching for: ${query}`);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useCallback(_.debounce(search, 500), []);
  const navigate = useNavigate();
  function handleSearchChange(event) {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    debouncedSearch(newSearchTerm);
  }

  const { verify, check } = CredService();
  const [text, setText] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <TestViewStyle>
      Login success :
      <Button
        onClick={() => {
          verify()
            .then(({ data }) => {
              setText(data);
            })
            .catch((e) => console.log(e));
        }}
      >
        Click to access resource
      </Button>
      [--]
      <Button
        onClick={() => {
          check()
            .then(({ data }) => {
              setText(data);
            })
            .catch((e) => console.log(e));
        }}
      >
        Check
      </Button>
      [
      <div className="snippet" data-title="dot-floating">
        <div className="stage">
          <div className="dot-floating"></div>
        </div>
      </div>
      ]
      <LoopIcon className="fas fa-spinner rotate-icon" />
      <GiftBox open={true} ifOpen={() => console.log("Gift is opened")} />
      <Button onClick={() => setOpenPopup(true)}>Open popup</Button>
      <Switch
        checked={checked}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setChecked(event.target.checked)
        }
        color={"success"}
      />
      {/* <CustomSwitch width={400} height={50} ifOn={() => console.log("ifOn")} /> */}
    </TestViewStyle>
  );
};

export default TestView;

export const TestViewStyle = styled.div`
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
  margin: 50px;
  .snippet {
    position: relative;
    background: #fff;
    padding: 32px 5%;
    margin: 24px 0;
    box-shadow: 0 4px 12px -2px rgba(0, 32, 128, 0.1),
      0 0 0 1px rgba(60, 80, 120, 0.1);
    border-radius: 16px;
  }

  .snippet::before {
    display: inline-block;
    position: absolute;
    top: 6px;
    left: 6px;
    padding: 0 8px;
    content: attr(data-title);
    font-size: 12px;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    color: white;
    background-color: rgb(255, 25, 100);
    border-radius: 10px;
    line-height: 20px;
  }

  .snippet:hover {
    cursor: pointer;
    outline: 2px solid rgb(255, 25, 100);
  }
  .stage {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 32px 0;
    margin: 0 -5%;
    overflow: hidden;
  }
  .dot-floating {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #9880ff;
    color: #9880ff;
    animation: dot-floating 3s infinite cubic-bezier(0.15, 0.6, 0.9, 0.1);
  }
  .dot-floating::before,
  .dot-floating::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
  }
  .dot-floating::before {
    left: -12px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #9880ff;
    color: #9880ff;
    animation: dot-floating-before 3s infinite ease-in-out;
  }
  .dot-floating::after {
    left: -24px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #9880ff;
    color: #9880ff;
    animation: dot-floating-after 3s infinite cubic-bezier(0.4, 0, 1, 1);
  }

  @keyframes dot-floating {
    0% {
      left: calc(-50% - 5px);
    }
    75% {
      left: calc(50% + 105px);
    }
    100% {
      left: calc(50% + 105px);
    }
  }
  @keyframes dot-floating-before {
    0% {
      left: -50px;
    }
    50% {
      left: -12px;
    }
    75% {
      left: -50px;
    }
    100% {
      left: -50px;
    }
  }
  @keyframes dot-floating-after {
    0% {
      left: -100px;
    }
    50% {
      left: -24px;
    }
    75% {
      left: -100px;
    }
    100% {
      left: -100px;
    }
  }
`;

import { Col, Divider, Row } from "antd";
import { useSearchParams } from "react-router-dom";
import { Image } from "antd";
import styled from "styled-components";
import { petImages } from "store/pets";
import { ReactElement, useEffect, useState } from "react";
import humanizeDuration from "humanize-duration";
import {
  BreederProp,
  DocumentProp,
  ImageProp,
  PetProp,
  SigninProp,
} from "models/model";
import Service from "services/petService";
import { Gutter } from "antd/es/grid/row";
import { initCap } from "utils/stringFormatter";
import { ReactComponent as Medal } from "../assets/icons/medal.svg";
import { ReactComponent as Star } from "../assets/icons/star.svg";
import { ReactComponent as LocationIcon } from "../assets/icons/location-sign.svg";
import dayjs from "dayjs";
import { PetShow } from "./petToShow";
import { SignInStyle } from "style/components/signIn-style";
import TextField from "@mui/material/TextField";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { fetchImage } from "utils/urlFormatter";
import accessToken from "hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { COLOR, ROUTES } from "common/constants";
import CredService from "services/credentialService";
interface LocationState {
  from: PetProp;
}

const SignIn = () => {
  const { login } = CredService();
  const navigate = useNavigate();
  const { setAccessToken } = accessToken();
  const [show, setShow] = useState(true);
  const [state, setState] = useState<SigninProp>({} as SigninProp);
  const [showPassword, setShowPassword] = useState(false);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => event.preventDefault();
  const HeaderText = (text: string) => (
    <div className="welcome-text">{text}</div>
  );
  const handleLoginClick = () => {
    login({ ...state })
      .then(({ data }) => {
        setAccessToken(data.access_token);
        navigate(ROUTES.HOME);
      })
      .catch((e) => console.log(e));
  };
  const LoginPage = () => (
    <div className="login-page">
      <img src={fetchImage(["login-pet.jpg"])} className="background-image" />
      <Row justify="center">
        <Col className="login-form">
          <Row className="generat-text">
            <img
              width="80"
              height="80"
              src={fetchImage(["icons", "login.svg"])}
            />
          </Row>
          <Row className="generat-text">{HeaderText("Welcome back!")}</Row>
          <Row className="generat-text">Please enter your details</Row>
          <Row>
            <FormControl fullWidth variant="standard">
              <InputLabel>Email</InputLabel>
              <Input
                id="standard-basic"
                value={state.username}
                onChange={(e) =>
                  setState((s) => {
                    return { ...s, username: e.target.value };
                  })
                }
              />
            </FormControl>
          </Row>
          <Row>
            <FormControl fullWidth variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                onChange={(e) =>
                  setState((s) => {
                    return { ...s, password: e.target.value };
                  })
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => {
                        setShowPassword((p) => !p);
                      }}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Row>
          <Row>
            <Col span={13}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox size="small" />}
                  label={<Typography className="text">Remember me</Typography>}
                />
              </FormGroup>
            </Col>
            <Col span={11}>
              <div className="forgot-password text">Forgot password?</div>
            </Col>
          </Row>
          <Row>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className="login-button"
              onClick={handleLoginClick}
            >
              Log In
            </Button>
          </Row>
          <Row>
            <Button
              fullWidth
              variant="contained"
              color="light"
              className="login-button"
              startIcon={
                <Image
                  src={fetchImage(["icons", "google.svg"])}
                  preview={false}
                  height="25px"
                />
              }
            >
              Log in with Google
            </Button>
          </Row>
          <Row
            justify="center"
            align="bottom"
            className="signup-text generat-text"
          >
            Don't have an account? &nbsp;&nbsp;
            <h4 className="signin-text">
              <a onClick={() => navigate(ROUTES.SIGNUP)}>Sign Up</a>
            </h4>
          </Row>
        </Col>
      </Row>
    </div>
  );

  return <SignInStyle>{show && LoginPage()}</SignInStyle>;
};

export default SignIn;

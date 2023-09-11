import { Col, Row } from "antd";
import { Image } from "antd";
import { useState } from "react";
import { PetProp, SigninProp } from "models/model";
import { SignInStyle } from "style/pages/signIn-style";
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
import { useNavigate } from "react-router-dom";
import { ROUTES } from "common/constants";
import useUserLogin from "hooks/useLogin";

const SignIn = () => {
  const { loadingLogin, isLoginError, userLogin } = useUserLogin();
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [state, setState] = useState<SigninProp>({} as SigninProp);
  const [showPassword, setShowPassword] = useState(false);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => event.preventDefault();
  const HeaderText = (text: string) => (
    <div className="welcome-text">{text}</div>
  );

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
                  control={
                    <Checkbox
                      size="small"
                      onClick={() =>
                        setState((s) => {
                          return { ...s, isremember: !state.isremember };
                        })
                      }
                    />
                  }
                  label={<Typography className="text">Remember me</Typography>}
                />
              </FormGroup>
            </Col>
            <Col span={11}>
              <div className="forgot-password text">
                <a onClick={() => navigate(ROUTES.FORGOT_PASSWORD)}>
                  Forgot password?
                </a>
              </div>
            </Col>
          </Row>
          <Row>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className="login-button"
              onClick={() => userLogin(state, () => navigate(ROUTES.HOME))}
            >
              Log In
            </Button>
          </Row>
          <div className="error" hidden={!isLoginError}>
            Invalid username or password!
          </div>
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

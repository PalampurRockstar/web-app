import { Col, Divider, Row } from "antd";
import {  useSearchParams } from "react-router-dom";
import { Image } from "antd";
import styled from "styled-components";
import { petImages } from "store/pets";
import { ReactElement, useEffect, useState } from "react";
import humanizeDuration from "humanize-duration";
import { BreederProp,  DocumentProp, ImageProp, PetProp } from "models/model";
import Service from "services/petService";
import { Gutter } from "antd/es/grid/row";
import { initCap } from "utils/stringFormatter";
import { ReactComponent as Medal } from "../assets/icons/medal.svg";
import { ReactComponent as Star } from "../assets/icons/star.svg";
import { ReactComponent as LocationIcon } from "../assets/icons/location-sign.svg";
import TextField from '@mui/material/TextField';
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, IconButton, Input, InputAdornment, InputLabel, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { fetchImage } from "utils/urlFormatter";
import credService from "services/credentialService";
import accessToken from "hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "common/constants";
import { SignUpStyle } from "style/components/signup-style";
import CredService from "services/credentialService";
interface LocationState {
  from: PetProp;
}

const SignUp = () => {
  const {verify,check}=CredService();
  const [text,setText]=useState(false)
  return (
    <SignUpStyle>
      Login success : 
      <Button onClick={()=>{
        verify()
        .then(({data})=>{
          setText(data)
        })
        .catch(e=>console.log(e))
      }}>Click to access resource</Button>[--]
      <Button onClick={()=>{
        check()
        .then(({data})=>{
          setText(data)
        })
        .catch(e=>console.log(e))
      }}>Check</Button>
      check
      <h1>{JSON.stringify(text)}</h1>
    </SignUpStyle>
  );
};


export default SignUp;

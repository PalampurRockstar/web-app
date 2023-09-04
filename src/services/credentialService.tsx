import axios from "axios";
import { identityHost, onboardingHost } from "common/constants";
import { LoginCredRequest } from "models/model";

const identityHttp = axios.create({
  // baseURL: "http://34.117.217.185/pet-onboarding",
  baseURL: identityHost,
  headers: {
    "Content-type": "application/json",
  },
});
const headers = {
  'Content-Type': 'application/json'
};
const Service = {
  login:(cred:LoginCredRequest) => {
    return identityHttp.post(`/credentials/login`,cred,{headers});
  },
};

export default Service;

import axios from "axios";
import { identityHost, onboardingHost } from "common/constants";
import accessToken from "hooks/useAuth";
import useIdentityHttp from "hooks/useAxiosPrivate";
import { LoginCredRequest } from "models/model";


export const identityHttp = axios.create({
  baseURL: identityHost,
  headers: { 'Content-Type': 'application/json' },
});

const CredService = ()=>{
  const identityUrl=useIdentityHttp()
  const {getAccessToken}=accessToken();
  return {
    login:(cred:LoginCredRequest) => {
      return identityUrl.post(`/credentials/login`,cred, { withCredentials: true });
    },
    verify:() => {
      return identityUrl.get(`/credentials/verify`);
    },
    check:() => {
      return identityUrl.get(`/credentials/set-cookie`);
    },
  }
};

export default CredService;

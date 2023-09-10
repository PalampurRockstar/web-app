import { SigninForm, SigninProp, ValidateUserNameResponse } from "models/model";
import { useState, useEffect } from "react";
import CredService from "services/credentialService";
import accessToken from "./useAuth";

const useUserLogin = () => {
  const { setAccessToken, setRemember } = accessToken();
  const [loadingLogin, setLoadingLogin] = useState<boolean>(false);
  const [isLoginError, setIsLoginError] = useState<boolean>(false);
  const { login } = CredService();

  const userLogin = async (cred: SigninProp, ifSuccess: () => void) => {
    setLoadingLogin(true);
    try {
      login({ username: cred.username, password: cred.password })
        .then(({ data }) => {
          if (data.access_token) {
            setAccessToken(data.access_token);
            ifSuccess();
            if (cred.isremember) setRemember();
          } else {
            setIsLoginError(true);
          }
        })
        .catch((e) => {
          setIsLoginError(true);
          console.log(e);
        })
        .finally(() => setLoadingLogin(false));
    } catch (error) {
      console.error("Error fetching data from useCreateUser:", error);
    }
  };

  return { loadingLogin, isLoginError, userLogin };
};

export default useUserLogin;

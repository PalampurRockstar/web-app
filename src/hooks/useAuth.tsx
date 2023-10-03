import { decodeJwt } from "utils/jwtUtil";

const accessToken = () => {
  return {
    setRemember: () => {
      localStorage.setItem("is_remember", "true");
    },
    isRemember: () => {
      return localStorage.getItem("is_remember");
    },
    setAccessToken: (token: string) => {
      localStorage.setItem("access_token", token);
    },
    getAccessToken: () => {
      if (localStorage.getItem("access_token")) {
        return decodeJwt(localStorage.getItem("access_token"));
      }
      return null;
    },
    removeAccessToken: () => {
      localStorage.removeItem("access_token");
    },
  };
};

export default accessToken;

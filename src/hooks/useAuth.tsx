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
      if (localStorage.getItem("is_remember") === "true")
        return localStorage.getItem("access_token");
      return null;
    },
    removeAccessToken: () => {
      localStorage.removeItem("access_token");
    },
  };
};

export default accessToken;

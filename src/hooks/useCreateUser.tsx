import { SigninForm, User, ValidateUserNameResponse } from "models/model";
import { useState, useEffect } from "react";
import CredService from "services/credentialService";

const useCreateUser = () => {
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);
  const [isCreateed, setIsCreateed] = useState<boolean>(false);
  const [user, setUser] = useState<User>({} as User);
  const { insertUser } = CredService();
  const createUser = async (user: SigninForm) => {
    setLoadingSubmit(true);
    try {
      insertUser(user)
        .then((r) => {
          setTimeout(() => {
            setIsCreateed(true);
            setLoadingSubmit(false);
            setUser(r.data);
          }, 5000);
        })
        .catch(() => {
          setIsCreateed(false);
          setLoadingSubmit(false);
        })
        .finally(() => {});
    } catch (error) {
      console.error("Error fetching data from useCreateUser:", error);
    }
  };

  return { loadingSubmit, isCreateed, createUser, user };
};

export default useCreateUser;

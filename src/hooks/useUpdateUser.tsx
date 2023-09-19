import {
  BuyerForm,
  SigninForm,
  User,
  ValidateUserNameResponse,
} from "models/model";
import { useState, useEffect } from "react";
import CredService from "services/credentialService";

const useBuyerUser = () => {
  const [loadingUpdate, setloadingUpdate] = useState<boolean>(false);
  const [isUpdated, setIsUpdated] = useState<boolean>(false);
  const { updateUser } = CredService();
  const updateBuyer = async (
    userId: string,
    buyer: User,
    ifDone: (s: boolean) => void
  ) => {
    setloadingUpdate(true);
    try {
      updateUser(userId, buyer)
        .then((r) => {
          setTimeout(() => {
            setIsUpdated(true);
            setloadingUpdate(false);
            ifDone(true);
          }, 2000);
        })
        .catch(() => {
          setIsUpdated(false);
          setloadingUpdate(false);
          ifDone(false);
        })
        .finally(() => {});
    } catch (error) {
      console.error("Error fetching data from useCreateUser:", error);
    }
  };

  return { loadingUpdate, isUpdated, updateBuyer };
};

export default useBuyerUser;

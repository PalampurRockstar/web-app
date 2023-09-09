import { SigninForm, ValidateUserNameResponse } from "models/model";
import { useState, useEffect } from "react";
import CredService from "services/credentialService";

const useValidateUserName = (
  setStateError: React.Dispatch<React.SetStateAction<SigninForm>>
) => {
  const [loadingValidateUid, setLoading] = useState<boolean>(false);
  const [recommendation, setRecommendation] = useState<string[]>([]);
  const { findUserName } = CredService();
  const validateUserName = async (userName: string) => {
    setLoading(true);
    try {
      findUserName(userName)
        .then((r) => {
          setLoading(false);
          setRecommendation(r.data?.name_recommendation || []);
          setStateError((sr) => {
            return {
              ...sr,
              username: r.data?.found ? "Username already exist" : "",
            };
          });
        })
        .finally(() => setLoading(false));
    } catch (error) {
      console.error("Error fetching data from useValidateUserName:", error);
    }
  };

  return { loadingValidateUid, setLoading, recommendation, validateUserName };
};

export default useValidateUserName;

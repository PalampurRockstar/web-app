import { buckets } from "common/constants";
import { SigninForm, User, ValidateUserNameResponse } from "models/model";
import { useState, useEffect } from "react";
import CredService from "services/credentialService";
import ObjectService from "services/objectService";

const useUploadImage = () => {
  const [loadingUploadImage, setLoadingUploadImage] = useState<boolean>();
  const [isSuccessUpload, setSuccessUpload] = useState<boolean>();
  const { upload } = ObjectService();
  const uploadImage = async (
    file: File,
    ifDone: (status: boolean, name: string) => void
  ) => {
    setLoadingUploadImage(true);
    try {
      upload(buckets.PROFILE_PICTYRE, file)
        .then((r) => {
          setSuccessUpload(true);
          ifDone(true, file.name);
        })
        .catch(() => {
          setSuccessUpload(false);
          ifDone(false, file.name);
        })
        .finally(() => setLoadingUploadImage(false));
    } catch (error) {
      console.error("Error fetching data from uploadImage:", error);
    }
  };

  return { loadingUploadImage, isSuccessUpload, uploadImage };
};

export default useUploadImage;

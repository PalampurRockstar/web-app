import axios from "axios";
import { objectStorage } from "common/constants";

export const identityHttp = axios.create({
  baseURL: objectStorage,
});

const ObjectService = () => {
  return {
    upload: (bucket: string, file: File) => {
      const formData = new FormData();
      formData.append("files", file);
      return identityHttp.post(`/upload?path=${bucket}`, formData, {
        headers: {
          "Content-Type": "text/plain;charset=UTF-8",
        },
      });
    },
  };
};

export default ObjectService;

import { objectStorage } from "common/constants";
import { User } from "models/model";

export const decodeJwt = (jwt: string | null) => {
  const empty = {} as User;
  if (jwt == null) return empty;
  if (jwt?.split(".").length !== 3) return empty;
  const response = JSON.parse(atob(jwt.split(".")[1])).info as User;
  return response;
};

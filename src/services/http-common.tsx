import axios from "axios";

export default axios.create({
  baseURL: "http://34.117.217.185/pet-onboarding",
  headers: {
    "Content-type": "application/json",
  },
});

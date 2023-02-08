import { PetProp } from "components/petToShow";
import { zeroPad } from "utils/stringFormatter";

const importAll = (require) =>
  require.keys().reduce((acc, next) => {
    acc[next.replace("./", "")] = require(next);
    return acc;
  }, {});
declare global {
  interface NodeRequire {
    /** A special feature supported by webpack's compiler that allows you to get all matching modules starting from some base directory.  */
    context: (
      directory: string,
      useSubdirectories: boolean,
      regExp: RegExp
    ) => any;
  }
}

const images: string[] = Object.values(
  importAll(
    require.context("../assets/images/pet-show", false, /\.(png|jpe?g|svg)$/)
  )
);
const single: PetProp = {
  id: "P001",
  bread: "Beagle",
  title: "pet title",
  type_code: "",
  type: "cat",
  image: "",
  gender: "male",
  price: {
    amount: 3422,
    currencyCode: "INR",
  },
  breader: {
    name: "Alfard",
    code: "B001",
    location: {
      name: "Bangkok",
      longitude: "",
      latitide: "",
      address: {
        street: "",
        pin: "",
      },
    },
  },
  location: {
    name: "Bangkok",
    longitude: "",
    latitide: "",
    address: {
      street: "",
      pin: "",
    },
  },
};

export const petList: PetProp[] = Array(30)
  .fill(single)
  .map((each, i) => {
    return {
      ...each,
      id: `P${zeroPad(i, 3)}`,
      image: images[i % images.length],
    };
  });

export const favouriteList = new Set(["P001", "P004", "P004", "P007", "P010"]);

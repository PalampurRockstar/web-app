import { DocumentProp, PetProp, Review } from "models/model";
import { zeroPad } from "utils/stringFormatter";

export const importAll = (require) =>
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

export const petImages: string[] = Object.values(
  importAll(
    require.context("../assets/images/pet-show", false, /\.(png|jpe?g|svg)$/)
  )
);
export const single: PetProp = {
  id: "P001",
  breed: "Beagle",
  title: "Adorable Silver Chinchilla Persian",
  type_code: "",
  type: "cat",
  image: "",
  gender: "male",
  rating: 3,
  dob: "2023-01-28T16:44:03.520Z",
  description:
    "Lorem ipsum dolor sit amet consectetur. Feugiat eget ullamcorper aliquam lorem odio et cras ut vivamus. Non malesuada scelerisque sociis aliquam elit eget aliquam nam.",
  documents: [
    {
      id: "8687",
      name: "Health certificate",
      validUntil: "2023-01-28T16:44:03.520Z",
      docNumber: "123333",
    },
    {
      id: "8687",
      name: "Vaccine passport",
      validUntil: "2023-01-29T16:44:03.520Z",
      docNumber: "123333",
    },
  ],
  price: {
    amount: 3422,
    currencyCode: "INR",
  },
  breeder: {
    id: "8687",
    name: "Alfard",
    code: "B001",
    pets: [],
    location: {
      name: "Bangkok",
      longitude: "",
      latitude: "",
      address: {
        street: "",
        pin: "",
      },
    },
    rating: 3,
    images: [],
    reviews: [
      {
        id: "8687",
        comment: "Breeder has good experience",
        likeCount: 2,
        disLikeCount: 3,
        evidence: [
          {
            id: "8687",
            path: "some/path",
            file: "image1.jpg",
            cdn: "host1",
          },
        ],
      },
      {
        id: "8687",
        comment: "All documents are prvided",
        likeCount: 2,
        disLikeCount: 3,
        evidence: [
          { id: "8687", path: "some/path", file: "image1.jpg", cdn: "host1" },
        ],
      },
    ],
  },
  location: {
    name: "Bangkok",
    longitude: "",
    latitude: "",
    address: {
      street: "",
      pin: "",
    },
  },
  reviews: [
    {
      id: "8687",
      comment: "Hi",
      likeCount: 1,
      disLikeCount: 2,
      evidence: [
        { id: "8687", path: "some/path", file: "image1.jpg", cdn: "host1" },
      ],
    },
  ],
  images: [
    { id: "8687", path: "some/path", file: "image1.jpg", cdn: "host1" },
    { id: "8687", path: "some/path", file: "image2.jpg", cdn: "host2" },
  ],
};

export const petList: PetProp[] = Array(30)
  .fill(single)
  .map((each, i) => {
    return {
      ...each,
      id: `P${zeroPad(i, 3)}`,
      image: petImages[i % petImages.length],
    };
  });

export const favouriteList = new Set(["P001", "P004", "P004", "P007", "P010"]);

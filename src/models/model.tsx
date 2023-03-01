import { CurrencyCode } from "../common/constants";

type Gender = "male" | "female";
export interface SearchCriteria {
  location: string;
  breed: string;
  gender: string;
  type: string;
  priceFilterd: {
    from: number;
    to: number;
  };
}
export interface DetailProp {}

export interface PetProp {
  id: string;
  breed: string;
  gender: Gender;
  title: string;
  type_code: string;
  type: string;
  price: PriceProp;
  breeder: BreederProp;
  location: LocatoinProp;
  image: string;
  rating: number;
  images: ImageProp[];
  reviews: Review[];
  dob: string;
  description: string;
  documents: DocumentProp[];
}
export interface ImageProp {
  file: string;
  path: string;
}
export interface DocumentProp {
  name: string;
  docNumber: string;
  validUntil: string;
}
export interface Review {
  comment: string;
  likeCount: number;
  disLikeCount: number;
  evidence: ImageProp[];
}

export interface BreederProp {
  name: string;
  code: string;
  location: LocatoinProp;
  rating: number;
  images: ImageProp[];
  reviews: Review[];
}

export interface ImageProp {
  path: string;
  file: string;
  cdn: string;
}

export interface LocatoinProp {
  name: string;
  longitude: string;
  latitude: string;
  address: AddressProp;
}

interface AddressProp {
  street: string;
  pin: string;
}

export interface PriceProp {
  amount: number;
  currencyCode: keyof CurrencyCode;
}

export interface PetShowProp {
  petlist: PetProp[];
}
export interface FavIconProp {
  each: PetProp;
}

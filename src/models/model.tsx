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
  profilePicture: ImageProp;
  reviews: Review[];
  dob: string;
  description: string;
  documents: DocumentProp[];
}
export interface ImageProp {
  id: string;
  file: string;
  path: string;
}
export interface DocumentProp {
  id: string;
  name: string;
  docNumber: string;
  validUntil: string;
}
export interface ImageProp {
  id: string;
  file: string;
  path: string;
  cdn: string;
}
export interface Review {
  id: string;
  comment: string;
  likeCount: number;
  disLikeCount: number;
  evidence: ImageProp[];
}

export interface BreederProp {
  id: string;
  name: string;
  code: string;
  location: LocatoinProp;
  rating: number;
  images: ImageProp[];
  reviews: Review[];
  pets: PetProp[];
  profilePicture: ImageProp;
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
  style: React.CSSProperties;
}
export interface FavIconProp {
  each: PetProp;
}

export interface MenuOptionProp {
  title: string;
  clickHandler: (uri: string | undefined) => void;
  uri?: string;
}

export interface AppRouter {
  uri: string;
  to: React.ReactNode;
}

export interface SigninProp {
  username: string;
  password: string;
  isremember: boolean;
}

export interface LoginCredRequest {
  username: string;
  password: string;
}

export interface SigninForm {
  username: string;
  password: string;
  date_of_birth: string;
}

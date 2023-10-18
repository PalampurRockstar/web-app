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

export interface DocumentProp {
  id: string;
  name: string;
  docNumber: string;
  validUntil: string;
}
export interface ImageProp {
  id?: string;
  path: string;
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

export interface ValidateUserNameResponse {
  found: boolean;
  recommendation?: string[];
}

export interface OnboardingProp {
  content?: React.ReactNode;
  header: string;
  icon: React.ReactNode;
}

export const Gender = {
  Male: "MALE",
  Female: "FEMALE",
};

export interface BuyerForm {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  imgPath: string;
  gender: Gender;
}

export interface SellerForm {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  imgPath: string;
  gender: Gender;
}

export interface Contact {
  email: string;
  preferred: string;
  phone_number: string;
}
export interface User {
  id: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  username: string;
  password: string;
  created_at: string;
  updated_at: string;
  type: string;
  gender: Gender;
  profile_picture_path: string;
  preferred_pet_type: string;
  contact: Contact;
}
export interface PetOnboarrding {
  images: ImageProp[];
  image: string;
}

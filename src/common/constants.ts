export const THEME = {};
export const INITIAL_TIME="00:00"

export const SIZING = {
  XS: "2px",
  SM: "4px",
  MD: "8px",
  LG: "12px",
  XL: "16px",
  XXL: "24px",
  X3L: "32px",
  X4L: "40px",
  X5L: "48px",
};

export const COLOR = {
  PRIMARY:"#3f51b5"
};

export type CurrencyCode = { [n: string]: string };
export const currencyCode: CurrencyCode = {
  THB: "\u0E3F",
  INR: "\u20B9",
  DOLLAR: "\u0024",
};


export const objectStorage:string="http://localhost:8888/api/images/"
export const onboardingHost:string="http://localhost:8080"
export const identityHost:string="http://localhost:8998"


export const buckets = {
  PET_SHOW: 'pet-show',
  PET_DETAIL: 'pet-detail',
  ICON_PET_SLIDER: 'icon-pet-slider',
  PROFILE_PICTYRE: 'profile-pictures',
  POST_IMAGES: 'post-images',
};

export const ROUTES = {
  HOME: '/',
  DETAIL: '/detail',
  SIGNIN: '/sigin',
  SIGNUP: '/sigup',
  FORGOT_PASSWORD: '/foprgot-password',
  USER_ONBOARDING: '/user-onboarding',
  PET_ONBOARDING: '/pet-onboarding',
  TESTVIEW: '/test-view',
};

export const usernameRegex = /^(?=[a-zA-Z0-9._]{5,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
export const passwordRegex = /"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"/;


export const hideHeaderList=new Set([ROUTES.SIGNIN,ROUTES.SIGNUP,ROUTES.USER_ONBOARDING])

export const THEME = {};

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

export type CurrencyCode = { [n: string]: string };
export const currencyCode: CurrencyCode = {
  THB: "\u0E3F",
  INR: "\u20B9",
  DOLLAR: "\u0024",
};


export const objectStorage:string="http://localhost:8888/api/images/"


export const buckets = {
  PET_SHOW: 'pet-show',
  PET_DETAIL: 'pet-detail',
  ICON_PET_SLIDER: 'icon-pet-slider',
};
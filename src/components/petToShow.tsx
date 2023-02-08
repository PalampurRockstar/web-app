import styled from "styled-components";
import { Image } from "antd";
import { initCap, titleCase } from "utils/stringFormatter";
import { ReactComponent as LocationIcon } from "../assets/icons/location-sign.svg";
import { CurrencyCode, currencyCode } from "common/constants";
import { favouriteList } from "store/pets";
import { HeartOutlined } from "@ant-design/icons";
type Gender = "male" | "female";
export interface PetProp {
  id: string;
  bread: string;
  gender: Gender;
  title: string;
  type_code: string;
  type: string;
  price: PriceProp;
  breader: BreaderProp;
  location: LocatoinProp;
  image: string;
}

interface BreaderProp {
  name: string;
  code: string;
  location: LocatoinProp;
}

interface LocatoinProp {
  name: string;
  longitude: string;
  latitide: string;
  address: AddressProp;
}

interface AddressProp {
  street: string;
  pin: string;
}

interface PriceProp {
  amount: number;
  currencyCode: keyof CurrencyCode;
}

interface PetShowProp {
  petlist: PetProp[];
}

export const PetShow = ({ petlist }: PetShowProp) => {
  const isHidden = (id: string) => !favouriteList.has(id);
  console.log(favouriteList);
  return (
    <DIV>
      {petlist.map((each, i) => {
        return (
          <div className="each-pet" key={i}>
            <HeartOutlined
              className="favourite"
              style={{ visibility: isHidden(each.id) ? "hidden" : "visible" }}
            />
            <Image src={each.image} preview={false} />
            <div className="detail-box">
              <div className="title">{initCap(each.title)}</div>
              <div className="bread-and-gender">
                {initCap(`${each.bread} • ${each.gender}`)}
              </div>
              <div>
                <LocationIcon
                  width="16px"
                  height="12px"
                  className="location-icon"
                />
                {each.location.name}
              </div>
              <div className="price">
                {currencyCode[each.price.currencyCode]} {each.price.amount}
              </div>
            </div>
          </div>
        );
      })}
    </DIV>
  );
};
const DIV = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  flex-wrap: wrap;
  .each-pet {
    .favourite {
      height: 0px;
      font-size: 30px;
      position: relative;
      top: 40px;
      z-index: 1;
      left: 112px;
      color: #fcfcfd;
    }
    width: 150px;
    padding: 10px;
    flex-grow: 1;
    .detail-box {
      padding: 8px;
      .title {
        color: #344054;
        font-family: "Poppins";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
      }
      .bread-and-gender {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #667085;
      }
      .location-icon {
        position: relative;
        position: relative;
        top: 1px;
        right: 3px;
        color: #667085;
      }
      .price {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #344054;
      }
    }
  }
`;

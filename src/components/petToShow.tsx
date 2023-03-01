import { HeartFilled, HeartTwoTone } from "@ant-design/icons";
import { Image, Rate } from "antd";
import { CurrencyCode, currencyCode } from "common/constants";
import { FavIconProp, PetShowProp } from "models/model";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { favouriteList } from "store/pets";
import styled from "styled-components";
import { initCap } from "utils/stringFormatter";
import { ReactComponent as LocationIcon } from "../assets/icons/location-sign.svg";

const FavouriteIcon = ({ each }: FavIconProp) => {
  const [isFav, setIsFav] = React.useState<boolean>(isHidden(each.id));
  const prop = {
    twoToneColor: "#f79999",
    className: "favourite",
    style: {
      color: "#f79999",
    } as React.CSSProperties,
  };
  const toggle = () => setIsFav((b) => !b);
  return isFav ? (
    <HeartFilled {...prop} onClick={toggle} />
  ) : (
    <HeartTwoTone {...prop} onClick={toggle} />
  );
};

const isHidden = (id: string) => favouriteList.has(id);
export const PetShow = ({ petlist }: PetShowProp) => {
  const navigate = useNavigate();
  const openDetail = (id: string) => {
    navigate(`/detail?pet-id=${id}`);
  };
  const rating = (rating: number) => {
    return (
      <Rate
        className="rating"
        allowHalf
        defaultValue={rating >= 0 && rating <= 5 ? rating : 1}
        style={{ fontSize: 11 }}
      />
    );
  };

  return (
    <DIV>
      <div className="pet-show">
        {petlist.map((each, i) => {
          return (
            <div className="each-pet" key={i}>
              <Image src={each.image} preview={false} />
              <div className="detail-box">
                <div className="title-and-fav">
                  <div className="title" onClick={() => openDetail(each.id)}>
                    {initCap(each.title)}
                  </div>
                  <FavouriteIcon each={each} />
                </div>
                <div
                  className="breed-and-gender"
                  onClick={() => openDetail(each.id)}
                >
                  {initCap(`${each.breed} • ${each.gender}`)}
                </div>
                <div>
                  <LocationIcon
                    width="16px"
                    height="12px"
                    className="location-icon"
                  />
                  {each.location.name}
                </div>
                <div className="price-and-rating">
                  <div className="price" onClick={() => openDetail(each.id)}>
                    {currencyCode[each.price.currencyCode]} {each.price.amount}{" "}
                  </div>
                  {rating(each.rating)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </DIV>
  );
};
const DIV = styled.div`
  .pet-show {
    justify-content: center;
    display: flex;
    width: 80%;
    margin: auto;
    flex-wrap: wrap;
    .title {
      cursor: pointer;
    }
    .price {
      cursor: pointer;
    }
    .each-pet {
      width: 270px;
      max-width: 270px;
      padding: 10px;
      flex-grow: 1;
      .detail-box {
        padding: 8px;
        .title-and-fav {
          display: flex;
          justify-content: space-between;
          color: #344054;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          .favourite {
            height: 0px;
            font-size: 20px;
            position: relative;
            bottom: 212px;
            z-index: 1;
            filter: blur(0.5px);
          }
        }
        .breed-and-gender {
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 22px;
          color: #667085;
          cursor: pointer;
        }
        .location-icon {
          position: relative;
          position: relative;
          top: 1px;
          right: 3px;
          color: #667085;
        }
        .price-and-rating {
          display: flex;
          justify-content: space-between;
          .rating {
            li {
              margin-inline-end: 1px;
            }
          }

          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          color: #344054;
        }
      }
    }
  }
`;

import { HeartFilled, HeartTwoTone } from "@ant-design/icons";
import { Image, Rate } from "antd";
import { currencyCode } from "common/constants";
import { FavIconProp, PetProp } from "models/model";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { initCap } from "utils/stringFormatter";
import { ReactComponent as LocationIcon } from "../assets/icons/location-sign.svg";
export const PetCard = (pet: PetProp) => {
  const navigate = useNavigate();
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
  const openDetail = (id: string) => {
    navigate(`/detail?pet-id=${id}`);
  };

  return (
    <DIV>
      <div className="pet-pet">
        <Image src={pet.image} preview={false} />
        <div className="detail-box">
          <div className="title-and-fav">
            <div className="title" onClick={() => openDetail(pet.id)}>
              {initCap(pet.title)}
            </div>
            <FavouriteIcon each={pet} />
          </div>
          <div className="breed-and-gender" onClick={() => openDetail(pet.id)}>
            {initCap(`${pet.breed} • ${pet.gender}`)}
          </div>
          <div>
            <LocationIcon
              width="16px"
              height="12px"
              className="location-icon"
            />
            {pet.location.name}
          </div>
          <div className="price-and-rating">
            <div className="price" onClick={() => openDetail(pet.id)}>
              {currencyCode[pet.price.currencyCode]} {pet.price.amount}{" "}
            </div>
            {rating(pet.rating)}
          </div>
        </div>
      </div>
    </DIV>
  );
};
export const FavouriteIcon = ({ each }: FavIconProp) => {
  const [isFav, setIsFav] = useState<boolean>(false);
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

const DIV = styled.div`
  .pet-pet {
    width: 270px;
    max-width: 270px;
    padding: 10px;
    flex-grow: 1;
    .detail-box {
      padding: 8px;
      .title-and-fav {
        .title {
          cursor: pointer;
        }
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
        .price {
          cursor: pointer;
        }
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
`;

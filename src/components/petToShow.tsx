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
import { FavouriteIcon, PetCard } from "./petCard";

export const PetShow = ({ petlist }: PetShowProp) => {
  return (
    <DIV>
      <div className="pet-show">
        {petlist.map((each, i) => (
          <PetCard {...each} key={i} />
        ))}
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
  }
`;

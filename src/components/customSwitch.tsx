import React, { CSSProperties, useEffect, useState } from "react";
import { useSpring, animated, useTransition, config } from "react-spring";
import styled from "styled-components";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SellIcon from "@mui/icons-material/Sell";
interface CustomSwitchProp {
  width: number;
  sliderWidth: number;
  height: number;
  buyer: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const CustomSwitch = ({
  width,
  height,
  buyer,
  sliderWidth,
}: CustomSwitchProp) => {
  const limitWidth = true;
  const [isBuyer, setIfBuyer] = buyer;
  const half = width / 2;
  const internalWitdth = limitWidth
    ? sliderWidth > half
      ? half
      : sliderWidth
    : sliderWidth;
  const paddingAround = 5;
  const maxTranslation = width - internalWitdth;
  const sliderTranslation = isBuyer
    ? `translateX(${maxTranslation}px)`
    : "translateX(0)";
  return (
    <CustomSwitchStyle>
      <div
        className="sliding-switch"
        onClick={() => {
          setIfBuyer((s) => !s);
        }}
        style={{ width, paddingLeft: paddingAround }}
      >
        <div className={`slider`} style={{ height: height }}>
          <div
            className="slider-handle"
            style={{
              transform: sliderTranslation,
              width: internalWitdth - 2 * paddingAround,
            }}
          ></div>
        </div>

        <div className="info-container" style={{ width }}>
          <div className="text-box" style={{ width: internalWitdth }}>
            BUYER&nbsp;&nbsp;
            <SellIcon />
          </div>
          <div className="text-box" style={{ width: internalWitdth }}>
            SELLER&nbsp;&nbsp;
            <ShoppingCartIcon />
          </div>
        </div>
      </div>
    </CustomSwitchStyle>
  );
};

export const CustomSwitchStyle = styled.div`
  .sliding-switch {
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    margin-right: 5px;
    margin-left: 5px;
    // border: 1px solid #8d8989;
    border-radius: 10px;
    background-color: #e3d8d8;
    .info-container {
      position: absolute;
      display: flex;
      justify-content: space-between;
      .text-box {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .slider {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    transition: background-color 0.2s ease;
  }

  .slider-handle {
    height: 80%;
    background-color: white;
    border-radius: 8px;
    position: absolute;
    transition: transform 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export default CustomSwitch;

import styled from "styled-components";

import { ReactElement } from "react";
import React from "react";
import { Button } from "antd";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

export interface IconProp {
  icon: ReactElement;
  name: string;
}
interface IconSliderProp {
  displaySize: number;
  list: IconProp[];
}

export const IconSlider = ({ displaySize, list }: IconSliderProp) => {
  const [pointer, changePointer] = React.useState<number>(0);
  const iconList = list;
  const finalList = () =>
    (iconList.length > displaySize
      ? iconList.slice(pointer, pointer + displaySize)
      : iconList
    ).map((each, i) => (
      <Button key={i} className="each-icon">
        {each.icon}
      </Button>
    ));
  const moveRight = () => changePointer((p) => (p - 1 >= 0 ? p - 1 : p));
  const moveLeft = () =>
    changePointer((p) => (p < iconList.length - displaySize ? p + 1 : p));
  console.log(pointer);
  return (
    <DIV>
      <Button
        icon={<LeftCircleOutlined />}
        onClick={moveRight}
        disabled={pointer == 0}
      />
      {finalList()}
      <Button
        icon={<RightCircleOutlined />}
        onClick={moveLeft}
        disabled={pointer === iconList.length - displaySize}
      />
    </DIV>
  );
};
const DIV = styled.div`
  padding: 20px 0px;
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: space-around;
  .ant-btn-icon-only {
    margin: auto 0;
    border: 0;
  }
  .each-icon {
    height: auto;
    border: 0;
  }
`;

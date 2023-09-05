import { Input, Select } from "antd";
import { SIZING } from "common/constants";
import { LocatoinProp } from "models/model";
import React from "react";
import Service from "services/petService";
import styled from "styled-components";

const { Search } = Input;
const { Option } = Select;

export interface LocationSelectorProp {
  locationSelected: (value: string) => void;
  locationSearched: (value: string) => void;
}
export const LocationSelector = ({
  locationSelected,
  locationSearched,
}: LocationSelectorProp) => {
  const [locationList, setLocationList] = React.useState<string[]>([]);
  React.useEffect(() => {
    getAllLocations();
  }, []);
  const getAllLocations = () => {
    Service.getAllLocations()
      .then((response: any) => {
        const responsePetList = (response.data as LocatoinProp[]).map(
          (each) => each.name
        );
        const uniqueLocations = responsePetList.filter(function (item, pos) {
          return responsePetList.indexOf(item) === pos;
        });
        setLocationList(uniqueLocations);
      })
      .catch((e: any) => {
        console.log(e);
      });
  };
  return (
    <LocationGroup compact>
      <Select placeholder="All Locations" onChange={locationSelected}>
        {locationList.map((e, i) => (
          <Option key={i} value={e}>
            {e}
          </Option>
        ))}
      </Select>
      <Search
        placeholder="Which pet are you looking for?"
        allowClear
        onAnimationStart={() => {}}
        onSearch={locationSearched}
      />
    </LocationGroup>
  );
};

export const LocationGroup = styled(Input.Group)`
  padding: 16px 0px;
  display: flex !important;
  width: 400px;
  margin: auto;
  div > div {
    height: ${SIZING.X4L} !important;
    border-right: 2px !important;
    width: 130px !important;
  }
  div > span.ant-select-selection-placeholder {
    padding-inline-end: 27px !important;
    line-height: 36px !important;
  }
  div > span.ant-select-selection-item {
    line-height: 36px !important;
  }
  .ant-select-selector {
    border-top-left-radius: 25px !important;
    border-bottom-left-radius: 25px !important;
    border-color: #d9d9d9 !important;
    box-shadow: none !important;
    width: 300px;
  }
  .ant-input-affix-wrapper-focused {
    border-color: #d9d9d9 !important;
    box-shadow: none !important;
  }
  .ant-input-affix-wrapper:hover {
    border-color: #d9d9d9 !important;
  }
  .ant-input-affix-wrapper > span {
    position: relative;
    bottom: 5px;
  }
  span.ant-input-group-addon > button {
    border-top-right-radius: 25px !important;
    border-bottom-right-radius: 25px !important;
    height: ${SIZING.X4L} !important;
  }
  span > span > button {
    border-left: 0px;
    animation-duration: 0s !important;
  }

  div > .ant-select-selector:after {
    border-bottom: 2px solid red;
  }
  .ant-input-search-button:not(.ant-btn-primary):hover {
    border-color: #d9d9d9 !important;
  }
  span.ant-input-group-addon > button.ant-btn.ant-btn-background-ghost::after {
    border: none !important;
  }
  span > span {
    border-left: 0px;
    height: ${SIZING.X4L} !important;
    border-top-left-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
    border-right: 0px;
  }
`;

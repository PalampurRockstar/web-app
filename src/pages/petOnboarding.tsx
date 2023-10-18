import { Col, Row, Image } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";
import { fetchImage } from "utils/urlFormatter";
import Timeline from "@mui/lab/Timeline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import _ from "lodash";
import { PetOnboardingStyle } from "style/pages/pet-onboarding-style";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import CustomSwitch from "components/customSwitch";
import { OnboardingForm } from "components/onboardForm";
import MyPopup from "components/popup";
import { useNavigate } from "react-router-dom";
import { ROUTES, buckets } from "common/constants";
import {
  BuyerForm,
  ImageProp,
  PetOnboarrding,
  PetProp,
  SellerForm,
} from "models/model";
import ContactsIcon from "@mui/icons-material/Contacts";
import Collapse from "@mui/material/Collapse";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import {
  CardContent,
  Divider,
  Fab,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Skeleton,
  TextField,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { ReactPhotoCollage } from "react-photo-collage";
import { exampleImages, typedImages } from "store/images";
import { ComplexPhotoAlbum } from "components/ComplexPhotoAlbum";
import { CustomizeUploadImages } from "components/customizeUploadImages";
import useUploadImage from "hooks/useUploadImage";
import { CheckBox } from "@mui/icons-material";
import { ButtonSet } from "components/buttonSet";
import { PriceInput } from "components/priceInput";
import { DeliveryOptions } from "components/deliveryOption";
import { AvailableDateTimeSlots } from "components/availableDateTimeSlelector";
import { WeekDaySelector } from "components/weekDaySelector";

export interface PenOnboardingList {
  content?: React.ReactNode;
  header: string;
  icon: React.ReactNode;
}
export interface UploadImageButtonProp {
  handleUpload: (e: any) => void;
  label: string;
}

const PetOnboarding = () => {
  const [{ images, image }, setState] = useState<PetOnboarrding>({
    images: [],
    image: "",
  } as PetOnboarrding);
  const [selectedDate, handleDateChange] = useState(null);
  const { uploadImage } = useUploadImage();
  const navigate = useNavigate();
  const [expandIndex, setExpandIndex] = useState<number>(0);
  const updateState = (e: any, key: keyof PetOnboarrding) => {};
  const handleFileChange = (e: any, key: keyof PetOnboarrding) => {
    uploadImage(
      key === "image" ? buckets.PROFILE_PICTYRE : buckets.POST_IMAGES,
      e.target.files[0],
      (_, name) => {
        console.log("inside : uploadImage ", key);
        setState((s) => {
          const rsp = {
            ...s,
            [key]:
              key === "image"
                ? `http://localhost:8888/api/images/${buckets.PROFILE_PICTYRE}/${name}`
                : [
                    ...images,
                    {
                      path: `http://localhost:8888/api/images/${buckets.POST_IMAGES}/${name}`,
                    } as ImageProp,
                  ],
          };
          return rsp;
        });
      }
    );
  };
  const inputList: PenOnboardingList[] = [
    {
      content: (
        <div>
          <div className="picture-input">
            <CustomizeUploadImages
              images={image.length > 0 ? [image] : []}
              handleUpload={handleFileChange}
              limit={1}
              keyName="image"
              label="Display"
            />
          </div>
          <div className="picture-input">
            <CustomizeUploadImages
              images={images.map(({ path }) => path)}
              limit={7}
              handleUpload={handleFileChange}
              keyName="images"
              label="Post"
            />
          </div>
        </div>
      ),
      icon: <PhotoSizeSelectActualIcon />,
      header: "Upload photos",
    },

    {
      content: <PriceInput />,
      icon: <MonetizationOnIcon />,
      header: "Price",
    },
    {
      content: <DeliveryOptions />,
      icon: <LocalShippingIcon />,
      header: "Handover",
    },
    {
      content: <WeekDaySelector />,
      icon: <EventAvailableIcon />,
      header: "Available time slots",
    },
    {
      content: (
        <div>
          This is the content of the collapsible card. You can add any
          components or text here.
        </div>
      ),
      icon: <LocationOnIcon />,
      header: "Location",
    },
  ];
  const toggleExand = (i: number) =>
    expandIndex === i ? setExpandIndex(-1) : setExpandIndex(i);
  return (
    <PetOnboardingStyle
      style={{
        backgroundImage: `url(${fetchImage(["hd-pictures", "dog-cat.jpg"])})`,
      }}
    >
      <Row className="header-blank" />
      <div className="pet-container">
        <div className="input-box">
          {inputList.map((each, i) => (
            <Card className="each-card">
              <CardHeader
                className="card-header"
                onClick={() => toggleExand(i)}
                title={each.header}
                avatar={each.icon}
                action={
                  <IconButton
                    aria-expanded={expandIndex === i}
                    onClick={() => toggleExand(i)}
                  >
                    {expandIndex === i ? (
                      <ArrowDropUpIcon />
                    ) : (
                      <ArrowDropDownIcon />
                    )}
                  </IconButton>
                }
              />
              <Collapse in={expandIndex === i} timeout="auto" unmountOnExit>
                <CardContent>{each.content}</CardContent>
              </Collapse>
            </Card>
          ))}
          <ButtonSet disabled={false} />
        </div>
      </div>
    </PetOnboardingStyle>
  );
};
export default PetOnboarding;

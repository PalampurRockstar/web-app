import { BuyerForm, Gender, OnboardingProp, User } from "models/model";
import PersonIcon from "@mui/icons-material/Person";
import ContactsIcon from "@mui/icons-material/Contacts";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  Fab,
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import Input from "@mui/material/Input";
import { Col, Row } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";
import { fetchImage } from "utils/urlFormatter";
import Timeline from "@mui/lab/Timeline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import _ from "lodash";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import styled from "styled-components";
import { BuyerOnboardingStyle } from "style/components/buyer-onboarding-style";
import { COLOR, ROUTES, buckets } from "common/constants";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import ThreeRunningDots from "./threeDot";
import useUpdateUser from "hooks/useUpdateUser";
import { useNavigate, useSearchParams } from "react-router-dom";
import { trimCharacters } from "utils/stringFormatter";
import MyPopup from "./popup";
import useUploadImage from "hooks/useUploadImage";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { favouritePetType } from "store/favourite";
const iconStyle = { width: "20px", height: "20px" };
interface BuyerOnboardingProp {
  onDone: (s: boolean) => void;
  useBuyerState: [BuyerForm, React.Dispatch<React.SetStateAction<BuyerForm>>];
  useIndex: [number, React.Dispatch<React.SetStateAction<number>>];
}

export const BuyerOnboardingForm = ({
  onDone,
  useIndex,
  useBuyerState,
}: BuyerOnboardingProp) => {
  const { loadingUpdate, isUpdated, updateBuyer } = useUpdateUser();
  const [chooseIndex, setChooseIndex] = useIndex;
  const { uploadImage, loadingUploadImage, isSuccessUpload } = useUploadImage();
  const [preferred, setPreferred] = useState({
    isEmail: false,
    isPhone: false,
  });
  const [state, setState] = useBuyerState;
  const [stateError, setStateError] = useState<BuyerForm>({} as BuyerForm);
  const [gender, setGender] = useState({ is: false, isMale: true });
  const [searchParams, setSearchParams] = useSearchParams();
  const [favPetType, setFavPetType] = useState<Array<string>>(favouritePetType);
  const [selectedPetType, setSelectedPetType] = useState<Array<string>>([]);
  const isError = (key: keyof BuyerForm) => stateError[key]?.length > 0;
  const setStateFor = (e, key: keyof BuyerForm) => {
    setState((s) => {
      return { ...s, [key]: e.target.value };
    });
  };
  const getGender = () => {
    if (!gender.is) return null;
    return gender.isMale ? Gender.Male : Gender.Female;
  };
  const getPreferred = () => {
    const joinChar = ",";
    return trimCharacters(
      Object.keys(preferred)
        .filter((e) => preferred[e])
        .map((k) => k.replace("is", ""))
        .join(joinChar),
      joinChar
    );
  };
  const onSubmit = () => {
    const uid = searchParams.get("uid");
    if (uid && uid !== null) {
      updateBuyer(
        uid,
        {
          first_name: state.firstName,
          last_name: state.lastName,
          type: "BUYER",
          gender: getGender(),
          profile_picture_path: state.imgPath,
          contact: {
            email: state.email,
            phone_number: state.phone,
            preferred: getPreferred(),
          },
        } as User,
        onDone
      );
    }
  };
  const ButtonSet = ({ index, disabled }) => {
    const isLastPage = renderList.length - 1 === index;
    const isFirstPage = index === 0;
    return (
      <div className="button-set">
        <Button
          variant="contained"
          onClick={() => isFirstPage || setChooseIndex(index - 1)}
          disabled={disabled || isFirstPage}
        >
          Back
        </Button>
        <Button
          variant="contained"
          onClick={() => (isLastPage ? onSubmit() : setChooseIndex(index + 1))}
          disabled={disabled}
        >
          {isLastPage ? "Submit" : "Next"}
        </Button>
      </div>
    );
  };
  const addToFav = (index: number) => {
    setFavPetType((chips) =>
      chips.filter((element, i) => {
        if (index === i) setSelectedPetType([...selectedPetType, element]);
        return index !== i;
      })
    );
  };
  const removeFromFav = (index: number) => () => {
    setSelectedPetType((chips) =>
      chips.filter((element, i) => {
        if (index === i) setFavPetType([...favPetType, element]);
        return index !== i;
      })
    );
  };

  const handleFileChange = (e) => {
    uploadImage(e.target.files[0], (s, name) => {
      setState({ ...state, imgPath: `${buckets.PROFILE_PICTYRE}/${name}` });
    });
  };
  const getImagePath = () => {
    if (state.imgPath?.length > 0) return state.imgPath.split("/");
    if (gender.is && !gender.isMale) return ["image-icons", "female.png"];
    return ["image-icons", "male.png"];
  };
  const renderList: OnboardingProp[] = [
    {
      header: "Personal info",
      icon: <PersonIcon style={iconStyle} onClick={() => setChooseIndex(0)} />,
      content: (
        <div className="personal-input">
          <TextField
            key="firstName"
            label="First Name"
            fullWidth
            variant="outlined"
            size="small"
            value={state.firstName}
            onChange={(e) => setStateFor(e, "firstName")}
          />
          <div className="error">
            {isError("firstName") && stateError.firstName}
          </div>
          <TextField
            key="lastName"
            label="Last Name"
            fullWidth
            variant="outlined"
            size="small"
            value={state.lastName}
            onChange={(e) => setStateFor(e, "lastName")}
          />
          <div className="error">
            {isError("lastName") && stateError.lastName}
          </div>
          <FormGroup className="select-checkbox">
            <h4>Gender</h4>
            <div className="each-checkbox">
              <Checkbox
                name="female"
                checked={gender.is && !gender.isMale}
                onClick={() => {
                  setGender({ is: true, isMale: false });
                  // setImagePath(["image-icons", "female.png"]);
                }}
              />
              <div>Female</div>
            </div>
            <div className="each-checkbox">
              <Checkbox
                name="male"
                checked={gender.is && gender.isMale}
                onClick={() => {
                  setGender({ is: true, isMale: true });
                  // setImagePath(["image-icons", "male.png"]);
                }}
              />
              <div>Male</div>
            </div>
            <div className="each-checkbox">
              <HighlightOffOutlinedIcon
                onClick={() =>
                  setGender((g) => {
                    return { ...g, is: false };
                  })
                }
              />
            </div>
          </FormGroup>
        </div>
      ),
    },
    {
      header: "Contact info",
      content: (
        <div className="personal-input">
          <TextField
            key="phone"
            label="Phone number"
            fullWidth
            variant="outlined"
            size="small"
            value={state.phone}
            onChange={(e) => setStateFor(e, "phone")}
          />
          <div className="error" hidden={isError("phone")}>
            {stateError.phone}
          </div>
          <TextField
            key="email"
            label="Email"
            fullWidth
            variant="outlined"
            size="small"
            value={state.email}
            onChange={(e) => setStateFor(e, "email")}
          />
          <div className="error" hidden={isError("email")}>
            {stateError.email}
          </div>
          <FormGroup className="select-checkbox">
            <h4>Preferrence</h4>
            <div className="each-checkbox">
              <Checkbox
                name="phone"
                value={preferred.isPhone}
                onClick={() =>
                  setPreferred({ ...preferred, isPhone: !preferred.isPhone })
                }
              />
              <div>Phone</div>
            </div>
            <div className="each-checkbox">
              <Checkbox
                name="email"
                value={preferred.isEmail}
                onClick={() =>
                  setPreferred({ ...preferred, isEmail: !preferred.isEmail })
                }
              />
              <div>Email</div>
            </div>
          </FormGroup>
        </div>
      ),
      icon: (
        <ContactsIcon style={iconStyle} onClick={() => setChooseIndex(1)} />
      ),
    },
    {
      header: "Favourite",
      content: (
        <div className="favourite-input">
          <Card className="selected-items">
            <div className="fav-heading">Selected</div>
            {selectedPetType.map((data, i) => (
              <Chip key={i} label={data} onDelete={removeFromFav(i)} />
            ))}
          </Card>
          <div className="fav-heading">Choose your preference</div>
          {favPetType.map((data, i) => (
            <Chip
              onClick={() => addToFav(i)}
              key={i}
              label={data}
              // onDelete={addToFav(i)}
              // avatar={<ControlPointIcon />}
            />
          ))}
        </div>
      ),
      icon: (
        <ThumbUpOffAltIcon
          style={iconStyle}
          onClick={() => setChooseIndex(1)}
        />
      ),
    },
    {
      header: "Upload Picture",
      content: (
        <div className="picture-input">
          <label className="upload-photo">
            <input
              style={{ display: "none" }}
              id="upload-photo"
              name="upload-photo"
              type="file"
              onChange={handleFileChange}
            />
            <Fab
              color="primary"
              size="small"
              component="span"
              aria-label="add"
              variant="extended"
            >
              <AddCircleOutlinedIcon /> Upload photo
            </Fab>
          </label>
          <img src={fetchImage(getImagePath())} height="90px" />
        </div>
      ),
      icon: (
        <AddAPhotoIcon style={iconStyle} onClick={() => setChooseIndex(1)} />
      ),
    },
  ];
  const decideColor = (i: number) => {
    if (isUpdated) return "green";
    return i === chooseIndex
      ? "#f1714bf7"
      : i < chooseIndex
      ? "green"
      : COLOR.PRIMARY;
  };
  return (
    <BuyerOnboardingStyle>
      <Row justify="center" className="timeline-container">
        <Col span="3">
          <Timeline>
            {renderList.map((item, i) => (
              <TimelineItem key={i}>
                <TimelineOppositeContent className="opposite-header" />
                <TimelineSeparator>
                  <TimelineConnector />
                  <TimelineDot
                    style={{
                      backgroundColor: decideColor(i),
                    }}
                  >
                    {item.icon}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </Col>
        <Col span="21" className="input-section">
          <Divider textAlign="left" className="header-section">
            <h3>{renderList[chooseIndex].header}</h3>
          </Divider>
          <div className="input-area">{renderList[chooseIndex].content}</div>
          <div>
            <ButtonSet
              index={chooseIndex}
              disabled={isUpdated || loadingUpdate}
            />
            {loadingUpdate && (
              <div className="threedots-container">
                <ThreeRunningDots />
              </div>
            )}
          </div>
        </Col>
      </Row>
    </BuyerOnboardingStyle>
  );
};

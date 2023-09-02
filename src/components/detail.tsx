import { Col, Divider, Row } from "antd";
import {  useSearchParams } from "react-router-dom";
import { Image } from "antd";
import styled from "styled-components";
import { petImages } from "store/pets";
import { ReactElement, useEffect, useState } from "react";
import humanizeDuration from "humanize-duration";
import { BreederProp,  DocumentProp, ImageProp, PetProp } from "models/model";
import Service from "services/petService";
import { Gutter } from "antd/es/grid/row";
import { initCap } from "utils/stringFormatter";
import { ReactComponent as Medal } from "../assets/icons/medal.svg";
import { ReactComponent as Star } from "../assets/icons/star.svg";
import { ReactComponent as LocationIcon } from "../assets/icons/location-sign.svg";
import dayjs from "dayjs";
import { PetShow } from "./petToShow";


interface LocationState {
  from: PetProp;
}

const Detail = () => {

  const [searchParams, ] = useSearchParams();
  const [pet, setPet] = useState<PetProp>({} as PetProp);
  const [images, setImages] = useState<ImageProp[]>([]);
  const [documents, setDocuments] = useState<DocumentProp[]>([] );
  const [breeder, setBreeder] = useState<BreederProp>({} as BreederProp);
  useEffect(() => {
    const id = searchParams.get("pet-id");
    if (id) {
      fetchPet(id);
      fetchImagesForPet(id);
      fetchDocuments(id);
    }
  }, []);
  
  useEffect(() => {
    const id=pet?.breeder?.id
    if (id) {
      fetchBreeder(id);
    }
  }, [pet.breeder]);

  
  const generateImage=(i:ImageProp)=><Image src={`${i.path}/${i.file}`} preview={false} />
const detailImageList: ReactElement[] = images.sort((f,s)=>f?.file?.localeCompare(s?.file))
.map(i=>generateImage(i));
const fetchPet = (id: string) =>
    Service.getPet(id)
      .then((response: any) => {
        setPet(response.data as PetProp);
      })
      .catch((e) => console.log(e));
const fetchImagesForPet = (id: string) =>
      Service.fetchImagesForPet(id)
        .then((response: any) => {
          const imagelist:ImageProp[]=response.data
          setImages(imagelist);
        })
        .catch((e) => console.log(e));

  const fetchBreeder = (id: string) =>{
    if (id)
    Service.getBreeder(id)
      .then((response: any) => {
        const fetchedBreeder:BreederProp=response.data
        const responsePetList=fetchedBreeder.pets.map((each, i) => {
          return {
            ...each,
            image: petImages[i % petImages.length],
          };
        })
        setBreeder({...fetchedBreeder,pets:responsePetList});
      })
      .catch((e) => console.log(e));}

  const fetchDocuments = (id: string) =>{
        if (id)
        Service.getPetsDocument(id)
          .then((response: any) => {
            const docList: DocumentProp[]=response.data||[]
            setDocuments(docList);
          })
          .catch((e) => console.log(e));}

  const imagesGutter: [Gutter, Gutter] = [10, 40];
  const renderImages = (inputPet:PetProp) => {
    const imaleList=inputPet?.images.map(generateImage)
    return (
      <Row gutter={imagesGutter} className="image-collage">
        <Col span={24}>
          <Row gutter={imagesGutter}>
            <Col span={12}>{generateImage(inputPet?.profilePicture)}</Col>
            <Col span={12}>
              <Row gutter={imagesGutter}>
                <Col span={12}>{imaleList[0]}</Col>
                <Col span={12}>{imaleList[1]}</Col>
              </Row>
              <Row gutter={imagesGutter}>
                <Col span={12}>{imaleList[2]}</Col>
                <Col span={12}>
                  <Row gutter={imagesGutter}>
                    <Col span={12}>{imaleList[3]}</Col>
                    <Col span={12}>{imaleList[4]}</Col>
                  </Row>
                  <Row gutter={imagesGutter}>
                    <Col span={12}>{imaleList[5]}</Col>
                    <Col span={12}>{imaleList[6]}</Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  };
  const getHumanizeAge = () => {
    const dob = dayjs(pet.dob);
    const now = dayjs();
    return humanizeDuration(now.diff(dob), {
      units: ["y", "mo", "d"],
      round: true,
    });
  };

  const isImageValid=breeder?.profilePicture?.path && breeder?.profilePicture?.file
  const renderDPAndDetail = () => {
    return (
      <Row className="dp-container">
        <Col flex="70px">
        {isImageValid&&<Image
            className="profile-picture"
            preview={false}
            src={`${breeder?.profilePicture?.path}${breeder?.profilePicture?.file}`}
          />}
        </Col>
        <Col flex="auto" className="short-details">
          <Row>
            <Col span={12}>{initCap(breeder.name)}</Col>
          </Row>
          <Row>
            <Col span={18}>
              <Row>
                <Col span={24} className="icon-and-text">
                  <div className="star-and-rating">
                    <Star className="star breeder-highlight-detail" />
                    <div className="breeder-highlight-detail">
                      {breeder?.rating?.toFixed(1)}
                    </div>
                  </div>
                  <div className="dot breeder-highlight-detail">&#8226;</div>
                  <div className="review-length ">
                    <div className="breeder-highlight-detail">
                      {breeder?.reviews?.length}
                    </div>
                    <div className="breeder-highlight-detail">Reviews</div>
                  </div>
                  <div className="dot breeder-highlight-detail">&#8226;</div>
                  <div className="super-breeder">
                    <Medal className="medal breeder-highlight-detail" />
                    <div className="breeder-highlight-detail">
                      Super Breeder
                    </div>
                  </div>
                  <div className="dot breeder-highlight-detail">&#8226;</div>
                  <div className="super-breeder">
                    <LocationIcon className="location breeder-highlight-detail" />
                    <div className="breeder-highlight-detail">
                      {breeder?.location?.name}
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  };
  const renderDetailAndDescription = () => {
    return (
      <div>
        <Divider className="divider" />
        <Row>
          <Col className="detail-and-desc">{initCap(pet.title)}</Col>
        </Row>
        <Row>
          <Col span={24} className="pet-info">
            <div className="each-pet-info">{initCap(pet.breed)}</div>
            <div className="each-pet-info">&#8226;</div>
            <div className="each-pet-info">{getHumanizeAge()}</div>
            <div className="each-pet-info">&#8226;</div>
            <div className="each-pet-info">{initCap(pet.gender)}</div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="each-pet-info description">
              {initCap(pet.description)}
            </div>
          </Col>
        </Row>
        <Divider className="divider" />
      </div>
    );
  };
  const renderDocuments = () => {
    return (
      documents?.length > 0 && (
        <>
          <Row className="document-header">Documents</Row>
          <Row>
            <Col span={24}>
              {documents?.map((each, i) => (
                <div key={i} className="each-doc">
                  &#8226;<div className="each-doc-text">{each.name}</div>
                </div>
              ))}
            </Col>
          </Row>
        </>
      )
    );
  };
  const renderBreederPets = () => {
    return (
      breeder && (
        <Row>
          <Col span={24}>
             <PetShow petlist={breeder?.pets} style ={{justifyContent:'left'}}/>
          </Col>
        </Row>
      )
    );
  };
  const show = Object.keys(pet).length;
  return (
    <DIV>
      {show && (
        <div className="pet-detail-page">
          {renderImages(pet)}
          {renderDPAndDetail()}
          {renderDetailAndDescription()}
          {renderDocuments()}
          <Divider className="divider" />
          {renderBreederPets()}
        </div>
      )}
    </DIV>
  );
};
const DIV = styled.div`
  .pet-detail-page {
    .image-collage {
      max-width: 940px;
    }
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    padding-top: 80px;
    padding-bottom: 30px;
    max-width: 940px;
    margin: auto;
    .document-header {
      font-size: 22px;
      padding-bottom: 10px;
    }
    .each-doc {
      font-style: normal;
      font-weight: 400;
      padding: 2px 0;
      display: flex;
      .each-doc-text {
        padding-left: 5px;
      }
    }
    .description {
      padding: 10px 0;
      color: #344054;
    }

    .detail-and-desc {
      padding-bottom: 10px;
    }
    .divider {
      border-color: rgb(118 119 116 / 20%);
    }
    div > div > div > div > img {
      border-radius: 18px;
      margin-top: 10px;
    }
    .dp-container {
      margin-top: 10px;
    }
    .pet-info {
      color: #667085;
      display: flex;
      justify-content: flex-start;
      .each-pet-info {
        padding-right: 10px;
      }
    }
    .short-details {
      .icon-and-text {
        margin-top: 5px;
        .breeder-highlight-detail {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          margin-left: 6px;
        }
        .star-and-rating {
          display: flex;
        }
        .super-breeder {
          display: flex;
        }
        .review-length {
          display: flex;
        }
        display: flex;
        justify-content: flex-start;
      }
      svg {
        position: relative;
        // top: 3px;
      }
      .medal {
        path {
          fill: #6172f3;
        }
        height: 19px;
        width: 17px;
      }
      .location {
        path {
          fill: #6172f3;
        }
        height: 19px;
        width: 17px;
      }
      .star {
        path {
          fill: #6172f3;
        }
        height: 20px;
        width: 25px;
      }

      margin: auto;
    }
    .profile-picture {
      border-radius: 50%;
      width: 60px;
    }
  }
`;

export default Detail;

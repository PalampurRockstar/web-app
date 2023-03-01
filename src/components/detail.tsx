import { Col, Divider, Row } from "antd";
import { useLocation, useSearchParams } from "react-router-dom";
import { Image } from "antd";
import styled from "styled-components";
import { importAll, single } from "store/pets";
import { ReactElement, useEffect, useState } from "react";
import { DetailProp, PetProp } from "models/model";
import Service from "services/petService";
import SourabhProfile from "../assets/images/sourabh.jpg";
import { Gutter } from "antd/es/grid/row";
import { initCap } from "utils/stringFormatter";
import { ReactComponent as Medal } from "../assets/icons/medal.svg";
import { ReactComponent as Star } from "../assets/icons/star.svg";
import { ReactComponent as LocationIcon } from "../assets/icons/location-sign.svg";
const detailImages = Array.from(
  new Set(
    Object.values(
      importAll(
        require.context(
          "../assets/images/pet-detail",
          false,
          /\.(png|jpe?g|svg)$/
        )
      )
    )
  )
);
export const detailImageList: ReactElement[] = detailImages.map((each) => (
  <Image src={`${each}`} preview={false} />
));
interface LocationState {
  from: PetProp;
}

const Detail = () => {
  // const { state } = useLocation();
  // const petDetail = (state as LocationState).from;
  // const query = useQuery();
  const [searchParams, setSearchParams] = useSearchParams();
  const [pet, setPet] = useState<PetProp>({} as PetProp);
  useEffect(() => {
    const id = searchParams.get("pet-id");
    if (id) fetchPet(id);
  }, []);
  const fetchPet = (id: string) =>
    Service.getPet(id)
      .then((response: any) => {
        setPet(response.data as PetProp);
      })
      .catch((e) => console.log(e));
  const imagesGutter: [Gutter, Gutter] = [10, 40];
  const renderImages = () => {
    return (
      <Row gutter={imagesGutter} className="image-collage">
        <Col span={24}>
          <Row gutter={imagesGutter}>
            <Col span={12}>{detailImageList[0]}</Col>
            <Col span={12}>
              <Row gutter={imagesGutter}>
                <Col span={12}>{detailImageList[1]}</Col>
                <Col span={12}>{detailImageList[2]}</Col>
              </Row>
              <Row gutter={imagesGutter}>
                <Col span={12}>{detailImageList[3]}</Col>
                <Col span={12}>{detailImageList[4]}</Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  };
  const renderDPAndDetail = () => {
    return (
      <Row className="dp-container">
        <Col flex="70px">
          <Image
            className="profile-picture"
            preview={false}
            src={SourabhProfile}
          />
        </Col>
        <Col flex="auto" className="short-details">
          <Row>
            <Col span={12}>{initCap(pet.breeder.name)}</Col>
          </Row>
          <Row>
            <Col span={18}>
              <Row>
                <Col span={13} className="icon-and-text">
                  <div className="star-and-rating">
                    <Star className="star breeder-highlight-detail" />
                    <div className="breeder-highlight-detail">
                      {pet.breeder?.rating?.toFixed(1)}
                    </div>
                  </div>
                  <div className="dot breeder-highlight-detail">&#8226;</div>
                  <div className="review-length ">
                    <div className="breeder-highlight-detail">
                      {pet.breeder.reviews.length}
                    </div>
                    <div className="breeder-highlight-detail">Reviews</div>
                  </div>
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
                      {pet.breeder.location.name}
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
          <Col span={8} className="pet-info">
            <div className="each-pet-info">{initCap(pet.breed)}</div>
            <div className="each-pet-info">&#8226;</div>
            <div className="each-pet-info">{pet.dob}</div>
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
      pet.documents &&
      pet.documents.length > 0 && (
        <>
          <Row className="document-header">Documents</Row>
          <Row>
            <Col span={24}>
              {pet.documents.map((each) => (
                <div className="each-doc">&#8226;{each.name}</div>
              ))}
            </Col>
          </Row>
        </>
      )
    );
  };
  const show = Object.keys(pet).length;
  return (
    <DIV>
      {show && (
        <div className="pet-detail-page">
          {renderImages()}
          {renderDPAndDetail()}
          {renderDetailAndDescription()}
          {renderDocuments()}
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
    }
    .description {
      padding: 10px 0;
      color: #344054;
    }
    .pet-info {
      color: #667085;
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
      display: flex;
      justify-content: space-between;
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
        justify-content: space-between;
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
function useQuery() {
  throw new Error("Function not implemented.");
}

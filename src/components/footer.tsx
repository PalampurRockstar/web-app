import { Button, Col, Divider, Layout, Row } from "antd";
import styled from "styled-components";
import { ReactComponent as AmexIcon } from "../assets/icons/amex.svg";
import { ReactComponent as DiscoverIcon } from "../assets/icons/discover.svg";
import { ReactComponent as LoadingIcon } from "../assets/icons/loading.svg";
import { ReactComponent as MasterIcon } from "../assets/icons/master.svg";
import { ReactComponent as PaypalIcon } from "../assets/icons/paypal.svg";
import { ReactComponent as VectorIcon } from "../assets/icons/vector.svg";
import { ReactComponent as VisaIcon } from "../assets/icons/visa.svg";
import { ReactComponent as WalletIcon } from "../assets/icons/wallet.svg";

import { ReactComponent as EmailIcon } from "../assets/icons/email.svg";
import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as PhoneIcon } from "../assets/icons/phone.svg";

import { ReactComponent as FacebookIcon } from "../assets/icons/facebook.svg";
import { ReactComponent as InstagramIcon } from "../assets/icons/instagram.svg";
import { ReactComponent as LinkedInIcon } from "../assets/icons/linkedin.svg";

const { Footer } = Layout;
export interface AppFooterProp{
  hideHeader:boolean
}
export const AppFooter = ({hideHeader}:AppFooterProp) => {
  return (
    <DIV>
      <Divider />
      <Footer>
        {!hideHeader&& <Row className="first-footer-row">
          <Col>
            <div className="each-item-footer">
              <Button>
                <VectorIcon height={"16px"} />
              </Button>
              <div className="title-1">Free delivery</div>
              <div className="title-2">Lorem ipsum dolor sit amet, consect</div>
              <div className="title-2">adipiscing eliteget lorem.</div>
            </div>
          </Col>
          <Divider type="vertical" />
          <Col>
            <div className="each-item-footer">
              <Button>
                <WalletIcon height={"16px"} />
              </Button>
              <div className="title-1">Online Payment</div>
              <div className="title-2">Lorem ipsum dolor sit amet, consect</div>
              <div className="title-2">adipiscing eliteget lorem.</div>
            </div>
          </Col>
          <Divider type="vertical" />
          <Col>
            <div className="each-item-footer">
              <Button>
                <LoadingIcon height={"16px"} />
              </Button>
              <div className="title-1">Easy Return</div>
              <div className="title-2">Lorem ipsum dolor sit amet, consect</div>
              <div className="title-2">adipiscing eliteget lorem.</div>
            </div>
          </Col>
        </Row>}
        <Divider />
        <Row className="second-footer-row">
          <Col>
            <div className="each-item-footer">
              <div className="title-1">PetApp</div>
              <div className="title-2">Some catchy line goes here</div>
            </div>
          </Col>
          <Col>
            <div className="each-item-footer">
              <div className="title-1">About us</div>
              <div className="title-2">Out company</div>
              <div className="title-2">Mission & Vision</div>
            </div>
          </Col>
          <Col>
            <div className="each-item-footer">
              <div className="title-1">Contact</div>
              <div className="title-2">
                <HomeIcon />
                Location
              </div>
              <div className="title-2">
                <PhoneIcon />
                +66-000-000
              </div>
              <div className="title-2">
                <EmailIcon />
                contact@petapp.com
              </div>
            </div>
          </Col>
          <Col>
            <div className="each-item-footer">
              <div className="title-1">Download App</div>
              <div className="title-2">
                <FacebookIcon />
                <InstagramIcon />
                <LinkedInIcon />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="third-footer-row">
          <Col>
            <div className="card-icons">
              <PaypalIcon />
              <VisaIcon />
              <MasterIcon />
              <AmexIcon />
              <DiscoverIcon />
            </div>
            <div className="license">2023 PetApp. All Rights Reserved</div>
          </Col>
        </Row>
      </Footer>
    </DIV>
  );
};
export default AppFooter;

const DIV = styled.div`
  .third-footer-row {
    .card-icons {
      display: flex;
      justify-content: space-evenly;
    }
  }
  margin-bottom: 20px;
  .ant-layout-footer {
    padding: 0px;
  }

  .ant-divider {
    margin: 0px;
    height: auto;
    border-color: rgb(118 119 116 / 20%);
  }
  .each-item-footer {
    padding: 35px;
    text-align: center;
    .title-2 {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #667085;
    }
    .title-1 {
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
    }
    button {
      margin: 20px 0;
      border-radius: 100%;
      width: 50px;
      height: 50px;
      svg {
        position: relative;
        right: 7px;
        top: 2px;
      }
    }
  }
  footer > .first-footer-row,
  .second-footer-row {
    display: flex;
    justify-content: space-evenly;
  }
  .second-footer-row {
    margin: 20px 0;
  }

  footer > .second-footer-row {
    .title-1,
    .title-2 {
      text-align: left;
    }
    .title-1 {
      padding-bottom: 5px;
    }
    .title-2 {
      margin-bottom: 4px;
      svg {
        margin-right: 6px;
      }
    }
  }
  footer > .third-footer-row {
    justify-content: center;
    .card-icons {
      width: max-content;
    }
    svg {
      margin: 0 10px;
    }
    .license {
      display: flex;
      justify-content: center;
      margin: 20px 0;
    }
  }
`;

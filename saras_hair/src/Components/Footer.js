import { Container, Image, Col, Row } from "react-bootstrap";
import IconText from "./IconText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo from '../Assets/Logo.svg';
import footer1 from "../Assets/Sara2x.png";
import footer2 from "../Assets/Ba2x.png";
import footer3 from "../Assets/Su2x.png";
import footer4 from "../Assets/Cris2x.png";
import footer5 from "../Assets/Gabi2x.png";
import footer6 from "../Assets/Cachos2x.png";

import "./Footer.scss";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

const Footer = () => (
  <footer>
    <Container className="d-grid">
      <Row className="text-white footer">
        <Row className="pb-2 px-0 m-0 pt-5">
          <Col className="col-3 ps-5 pt-3 ms-3">
            <Image className='w-50' src={logo} />
            <Row className='pt-4'>
              <p className="pe-5">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod.
              </p>
            </Row>
            <Row className="m-0">
              <Col className="col-auto p-0 gap ">
                <a href="#" className="">
                  <FontAwesomeIcon
                    className="circle "
                    icon={faFacebookF}
                    color="#683D8E"
                  />
                </a>
              </Col>
              <Col className="col-auto p-0 gap ">
                <a href="#" className="">
                  <FontAwesomeIcon
                    className="circle"
                    icon={faInstagram}
                    color="#683D8E"
                  />
                </a>
              </Col>
              <Col className="col-auto p-0 gap ">
                <a href="#" className="">
                  <FontAwesomeIcon
                    className="circle"
                    icon={faWhatsapp}
                    color="#683D8E"
                  />
                </a>
              </Col>
              <Col className="col-auto p-0 gap ">
                <a href="#" className="">
                  <FontAwesomeIcon
                    className="circle"
                    icon={faTiktok}
                    color="#683D8E"
                  />
                </a>
              </Col>
              <Col className="col-auto p-0 gap ">
                <a href="#" className="">
                  <FontAwesomeIcon
                    className="circle"
                    icon={faYoutube}
                    color="#683D8E"
                  />
                </a>
              </Col>
              <Col className="col-auto p-0 gap ">
                <a href="#" className="">
                  <FontAwesomeIcon
                    className="circle"
                    icon={faTwitter}
                    color="#683D8E"
                  />
                </a>
              </Col>
            </Row>
          </Col>
          <Col className="col-3">
            <Row>
              <h5 className="pt-3 mb-4">Horário de funcionamento</h5>
            </Row>
            <Row className="d-flex ">
              <Col className="col-1">
                <IconText icon={faCalendarAlt} size={1} color="#ffffff" />
              </Col>
              <Col className="col-11 calendario">
                <p>Segunda a Sexta</p>
                <p>09h-17h</p>
              </Col>
            </Row>
            <Row className="mt-4 ">
              <Col className="col-1">
                <IconText icon={faCalendarAlt} size={1} color="#ffffff" />
              </Col>
              <Col className="col-11 calendario">
                <p>Sabádo e Domingo</p>
                <p>13h-19h</p>
              </Col>
            </Row>
          </Col>
          <Col className="col-3">
            <h5 className="pt-3 mb-4">Tweets recentes</h5>
            <Row className="">
              <Col>
                <IconText icon={faTwitter} size={1} color="#ffffff">
                  <p className="pe-5">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                </IconText>
              </Col>
            </Row>
            <Row>
              <Col>
                <IconText icon={faTwitter} size={1} color="#ffffff">
                  <p className="pe-5">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                </IconText>
              </Col>
            </Row>
            <Row>
              <Col>
                <IconText icon={faTwitter} size={1} color="#ffffff">
                  <p className="pe-5">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                </IconText>
              </Col>
            </Row>
          </Col>
          <Col className="col-auto">
            <h5 className="pt-3 mb-4">Instagram</h5>
            <Row className="d-flex gap-2">
              <Col className="col-auto pe-0">
                <Image src={footer1} />
              </Col>
              <Col className="col-auto p-0">
                <Image src={footer2} />
              </Col>
              <Col className="col-auto p-0">
                <Image src={footer3} />
              </Col>
            </Row>
            <Row className="d-flex  mt-2">
              <Col className="col-auto pe-0 ">
                <Image src={footer4} />
              </Col>
              <Col className="col-auto pt-0 p-2 ">
                <Image src={footer5} />
              </Col>
              <Col className="col-auto p-0 ">
                <Image src={footer6} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </Container>
  </footer>
);

export default Footer;

import { Container, Row, Col, Image, Button } from "react-bootstrap";

import serv1 from "../Assets/Serv1.png";
import serv2 from "../Assets/Serv2.png";
import serv3 from "../Assets/Serv3.png";
import serv4 from "../Assets/Serv4.png";

import "./Services.scss";

const Services = () => (
  <Container className="services p-0 pt-3">
    <Row className="blog justify-content-center m-0 pb-0">
      <Col className="blog_text serv_text">
        <Row>
          <h3 className="fw-bold text-center">Nossos serviços</h3>
        </Row>
        <Row className="mt-2">
          <p className="p-0 text-center">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo.
          </p>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col className="btn_menu  d-flex justify-content-center gap-4">
        <Button className="rounded-pill fw-bold"> Alisamentos</Button>
        <Button className="rounded-pill fw-bold"> Cortes</Button>
        <Button className="rounded-pill fw-bold"> Coloração</Button>
        <Button className="rounded-pill fw-bold"> Tratamentos</Button>
      </Col>
    </Row>
    <Row className=" py-5 p-0 m-0">
      <Col className="p-0 m-0 w-auto col-3">
        <Image src={serv1} />
      </Col>
      <Col className="p-0 m-0 w-auto col-3">
        <Image src={serv2} />
      </Col>
      <Col className="p-0 m-0 w-auto col-3">
        <Image src={serv3} />
      </Col>
      <Col className="p-0 m-0 w-auto col-3">
        <Image src={serv4} />
      </Col>
    </Row>
    <Row className="m-0 pb-5 pt-3">
      <Col className="serv_btn d-flex justify-content-center mb-3">
        <Button className="rounded-pill">Confira nossos serviços</Button>
      </Col>
    </Row>
  </Container>
);

export default Services;

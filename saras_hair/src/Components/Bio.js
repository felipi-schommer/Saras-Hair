import { Container, Col, Row, Image, Button } from "react-bootstrap";
import bioImage from "../Assets/Sara-Bio.png";

import "./Bio.scss";
const Bio = () => (
  <Container className="d-flex pb-5 ">
    <Row className=" section justify-items-start">
      <Col className="d-flex col-auto p-0 ">
        <Row className="efeito m-0"></Row>
        
          <Image className="bio_image position-absolute " src={bioImage} />
    
      </Col>
      <Col className="col-auto">
        <Row className="margin">
          <Col className="mt-5">
            <h3 className="fw-bold">Sara Weber</h3>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, noso. justo duo
              dolores et ea rebum. Stet clita kasd gubergren, noso.
            </p>
            <Button className="fw-bold mt-3 color_button rounded-pill">
              Conheça nossa história
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default Bio;

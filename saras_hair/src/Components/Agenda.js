import { Container, Row, Col, Image, Button } from "react-bootstrap";
import agenda from "../Assets/Agenda.png";

import "./Agenda.scss";

const Agenda = () => (
  <Container className="p-0 m-0">
    <Row className="agenda ">
      <Image className="p-0 position-relative " src={agenda} />

      <Col className="col-6  position-absolute p-0">
        <Row className="m-0 bg-agenda borda">
          <Col className="d-grid mt-3  space">
            <h3 className="fw-bold mt-5 mb-3 text-white">Agenda disponível</h3>
            <Button className="bt-agenda mt-3 rounded-pill">
              <p>23 de Agosto</p>
              <span>Vila Elza, Viamão | 13h</span>
            </Button>
            <Button className=" bt-agenda my-3 rounded-pill">
              <p>17 de Setembro</p>
              <span>Vila Elza, Viamão | 8h</span>
            </Button>
            <Button className="bt-agenda rounded-pill">
              <p>12 de Outubro</p>
              <span>Vila Elza, Viamão | 16h</span>
            </Button>
          </Col>
        </Row>
      </Col>
      <Col className="col-6"></Col>
    </Row>
  </Container>
);

export default Agenda;

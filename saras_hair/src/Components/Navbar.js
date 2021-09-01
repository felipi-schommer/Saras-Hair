import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Button,
  Image,
} from "react-bootstrap";
import Logo from "../Assets/Logo.svg";
import "./Navbar.scss";

const Menu = () => (
  <Container className="d-grid ">
    <Row className="menu align-items-center ">
      <Col className='col-4 ps-5'>
        <Image className='ps-4' src={Logo} />
      </Col>
      <Col className='col-8'>
        <Navbar className="float-end m">
          <Nav className="text-white fw-bold gap">
            <Nav.Item>
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Nossa história</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Serviços</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Contato</Nav.Link>
            </Nav.Item>
            <Button className="rounded-pill button_nav "> Agendar Horário</Button>
          </Nav>
        </Navbar>
      </Col>
    </Row>
  </Container>
);

export default Menu;

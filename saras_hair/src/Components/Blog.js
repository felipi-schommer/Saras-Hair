import { Container, Row, Col, Image, Button } from "react-bootstrap";

import blog1 from "../Assets/Blog1.png";
import blog2 from "../Assets/Blog2.png";
import blog3 from "../Assets/Blog3.png";
import blog4 from "../Assets/Blog4.png";
import blog5 from "../Assets/Blog5.png";
import blog6 from "../Assets/Blog6.png";
import arrow from '../Assets/arrow.svg';

import "./Blog.scss";

const Blog = () => (
  <Container className="p-0">
    <Row className="blog justify-content-center m-0">
      <Col className="blog_text">
        <Row>
          <h3 className="fw-bold text-center">Blog</h3>
        </Row>
        <Row className="justify-content-center">
          <p className="p-0 m-0 text-center">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo.
          </p>
          <Row className="blog_border my-3"></Row>
        </Row>
      </Col>
    </Row>
    <Row className="justify-content-center text-left">
      <Col className="blog_card">
        <Row className="d-flex gap-3">
          <Col>
            <Row className="blog_card_size">
              <Col className="pe-0">
                <Image src={blog1} />
              </Col>
              <Col className="ps-4  blog_text_card ">
                <h6 className="fw-bold m-0 mt-3 pt-3">Cortar as pontas</h6>
                <p className="mt-3 pe-2">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod.
                </p>
                <Row className="d-inline">
                  <a className="pe-0" href="#">
                    Leia mais
                    <Image className="w-auto px-2 arrow" src={arrow} />
                  </a>
                </Row>
              </Col>
            </Row>
            <Row className="py-4">
              <Col className="pe-0">
                <Image src={blog2} />
              </Col>
              <Col className="ps-4  blog_text_card ">
                <h6 className="fw-bold m-0 mt-3 pt-3">Como lavar o cabelo</h6>
                <p className="mt-3 ">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod.
                </p>
                <Row className="d-inline">
                  <a className="pe-0" href="#">
                    Leia mais
                    <Image className="w-auto px-2 arrow" src={arrow} />
                  </a>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className="pe-0">
                <Image src={blog3} />
              </Col>
              <Col className="ps-4  blog_text_card ">
                <h6 className="fw-bold m-0 mt-3 pt-3">Descoloração</h6>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod.
                </p>
                <Row className="d-inline">
                  <a className="pe-0" href="#">
                    Leia mais
                    <Image className="w-auto px-2 arrow" src={arrow} />
                  </a>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col className="ms-1">
            <Row className="">
              <Col className="pe-0">
                <Image src={blog4} />
              </Col>
              <Col className="ps-4  blog_text_card">
                <h6 className="fw-bold m-0 mt-3 pt-3">Penteados de festa</h6>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod.
                </p>
                <Row className="d-inline">
                  <a className="pe-0" href="#">
                    Leia mais
                    <Image className="w-auto px-2 arrow" src={arrow} />
                  </a>
                </Row>
              </Col>
            </Row>
            <Row className="py-4">
              <Col className="pe-0">
                <Image src={blog5} />
              </Col>
              <Col className="ps-4  blog_text_card ">
                <h6 className="fw-bold m-0 mt-3 pt-3">Tipos de tranças</h6>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod.
                </p>
                <Row className="d-inline">
                  <a className="pe-0" href="#">
                    Leia mais
                    <Image className="w-auto px-2 arrow" src={arrow} />
                  </a>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className="pe-0 ">
                <Image src={blog6} />
              </Col>
              <Col className=" ps-4  blog_text_card ">
                <h6 className="fw-bold m-0 mt-3 pt-3">Tipos de tranças</h6>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod.
                </p>
                <Row className="d-inline">
                  <a className="pe-0" href="#">
                    Leia mais
                    <Image className="w-auto px-2 arrow" src={arrow} />
                  </a>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col className="blog_btn d-flex justify-content-center py-5 ps-0 my-3">
        <Button className="rounded-pill py-3"> Confira nossos serviços</Button>
      </Col>
    </Row>
  </Container>
);

export default Blog;

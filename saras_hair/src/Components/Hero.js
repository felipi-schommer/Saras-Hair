import React from 'react';
import {Container, Image, Row, Col } from 'react-bootstrap';
import hero from '../Assets/Hero.svg';

import './Hero.scss';

const Hero = () => (
  <div className=''>
    <Container className=''>
      <Row className='hero'>
        
          <Image className='p-0' src={hero} />
        
      </Row>
    </Container>
  </div>
);

export default Hero;
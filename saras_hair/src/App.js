import {Container} from 'react-bootstrap';
import Home from './Components/Home';
import Menu from './Components/Navbar';
import Hero from './Components/Hero';
import Bio from './Components/Bio';
import Services from './Components/Services';
import Blog from './Components/Blog';
import Agenda from './Components/Agenda';
import Footer from './Components/Footer';
import './App.scss';

function App() {
  return (
    <Container className="">
      <Menu />
      <Hero />
      <Bio />
      <Services />
      <Blog />
      <Agenda />
      <Footer/>
    </Container>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import './styles/Home.css';
import 'bootstrap/dist/css/bootstrap.css';
const Home = () => {
  return (
    <Container className="text-center py-4">
      <Row>
        <Col>
          <h1 className="display-4">Clay O'Dell: Software Developer/Engineer & Technical Writer</h1>
          <p className="lead">Welcome to the homepage for Clay O'Dell</p>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col xs={12} sm={6} md={4}>
          <Image 
            src="/Clay_Logo.png" 
            alt="Black And White Logo for Clay O'Dell" 
            className="spin-logo"
            fluid // React Bootstrap's responsive image class
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

import { Button, Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">코딩상점</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#features">상품</Nav.Link>
            <Nav.Link href="#pricing">장바구니</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <Container>
        <Row>
          <Col sm>
            <img src={process.env.PUBLIC_URL + "/img/nike01.jpeg"} width="70%" alt="nike01"/>
            <h1>상품명</h1>
            <p>상품설명</p>
          </Col>
          <Col sm>
            <img src={process.env.PUBLIC_URL + "/img/nike02.jpeg"} width="70%" alt="nike02"/>
            <h1>상품명</h1>
            <p>상품설명</p>
          </Col>
          <Col sm>
            <img src={process.env.PUBLIC_URL + "/img/nike03.jpeg"} width="70%" alt="nike03"/>
            <h1>상품명</h1>
            <p>상품설명</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

import { Fragment, useState } from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import "./App.css";
import data from './data.js';
import {Routes, Route, Link} from 'react-router-dom';
import Detail from './routes/Detail.js';

function App() {
  
  let [shoes] = useState(data);

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
      
      <Routes>
        <Route path="/" element={
          <div>
            <div className="main-bg"></div>
            <Fragment>
              <Container>
                <Row>
                  {shoes.map((a, i) => <Card shoes={shoes[i]} i={i+1}></Card>)}
                </Row>
              </Container>
            </Fragment>
          </div>
        }/>
        <Route path="/detail" element={<Detail/>}/><Route/>
      </Routes>
    </div>
  );
}

function Card(props){
  return(
    <Col sm>
      <img src={process.env.PUBLIC_URL + '/img/nike0' + props.i +'.jpeg'} width="70%" alt="nike01"/>
      <h5>{props.shoes.title}</h5>
      <p>{props.shoes.content}</p>
    </Col>
  )
}


export default App;
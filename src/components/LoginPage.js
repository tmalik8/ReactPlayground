import React from 'react';
import MissionsCarousel from "./MissionsCarousel";
import {Container, Row, Col, Form, Button} from "react-bootstrap";

const items = [
  {
    img: "../resources/BLM.png",
    alt:"blm",
    capture: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt ollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    img: "../resources/BLM.png",
    alt:"blm",
    capture: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt ollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    img: "../resources/BLM.png",
    alt:"blm",
    capture: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt ollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  }
]
const LoginPage = () => {
  return (
    <Container className='login-page'>
      <Row>
        <Col xs={12} md={6}>
          <MissionsCarousel items={items}/>
        </Col>
        <Col xs={12} md={6} className='welcome-section'>
          <h2>Welcome to TurnUp</h2>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
          <Form className='form-wrapper'>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="E-mail"/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password"/>
            </Form.Group>
            <Button variant="secondary" type="submit" block>
              SIGN UP
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
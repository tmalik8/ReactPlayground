import React from 'react';
import MissionsCarousel from "./MissionsCarousel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LoginPage = () => {
  return (
      <div className='login-page'>
        <MissionsCarousel/>
        <div className='welcome-section'>
          <h2>Welcome to TurnUp</h2>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
          <div className='form-wrapper'>
            <Form>
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
          </div>
        </div>
      </div>
  );
};

export default LoginPage;
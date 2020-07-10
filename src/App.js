import React, { useState } from 'react';
import './App.css';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

/* import your component here */

import IncrementButton from './components/IncrementButton';
import InputField from './components/InputField';


const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <Toast show={show} onClose={() => toggleShow(!show)}>
      <Toast.Header>
        <strong className="mr-auto">React-Bootstrap</strong>
      </Toast.Header>
      <Toast.Body>{children}</Toast.Body>
    </Toast>
  );
};

const App = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Welcome To React-Bootstrap</h1>
      <ExampleToast>
        We now have Toasts
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast>
      <ExampleToast>
        More Toasts
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast>
      <ExampleToast>
        More Toasts
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast>
      <ExampleToast>
        More Toasts
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast>
    </Jumbotron>

    <Jumbotron>
      <IncrementButton />
    </Jumbotron>

    <Jumbotron>
      <InputField />
    </Jumbotron>

  </Container>
);

export default App;

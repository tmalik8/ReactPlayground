/**
 * @author Sonia S.
 */

import React from 'react';
import ImgButton from '../ImgButton';
import {Jumbotron} from "react-bootstrap";

function soniaPage() {
  return (
      <Jumbotron>
          <h1>Sonia's Task 2 Routing Page</h1>
          <hr/>
          <p>Hi! My name is Sonia. I created this component for Task 1...</p>
          <p>Click the button to generate a random dog image:</p>
          <ImgButton></ImgButton>
      </Jumbotron>
  );
}

export default soniaPage;

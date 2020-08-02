/**
 * @author Sonia S.
 */

import React from 'react';
import ImgButton from '../ImgButton';
import {Jumbotron} from "react-bootstrap";
import { connect } from 'react-redux';
import { increment, decrement } from '../../actions';

function soniaPage(props) {

  return (
      <Jumbotron>
          <h1>Sonia's Task 2 Routing Page</h1>
          <hr/>
          <p>Hi! My name is Sonia. I created this component for Task 1...</p>
          <p>Click the button to generate a random dog image:</p>
          <ImgButton></ImgButton>
          <h1>Counter {props.counter} </h1>
          <button onClick={() => props.increment()}>+</button>
          <button onClick={() => props.decrement()}>-</button>
      </Jumbotron>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(soniaPage);

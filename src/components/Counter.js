import React from 'react'
import { Container } from "react-bootstrap";
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

function Counter(props) {
    return (
      <Container>
        <h1>Counter {props.counter} </h1>
        <button onClick={() => props.increment()}>+</button>
        <button onClick={() => props.decrement()}>-</button>
      </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
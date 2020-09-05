import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import PeopleComponent from "./PeopleComponent";
import {ImLocation} from 'react-icons/im';
import {BsCalendar, BsClockFill, BsFillTagFill} from 'react-icons/bs';
import '../styles/DisplayEvent.css';


const DisplayEvent = ({event, profile}) => {

  // format list of tags
  const renderedTags = [];
  for (const tag of event.tags) {
    renderedTags.push(<p className="tag"><BsFillTagFill/>{tag}</p>);
  }

  /**
   * Cuts off description after 500 characters and adds "More" link
   * @param {string} desc - description of event
   */
  function cutoffDesc (desc) {
    if (desc.length > 500) {
        return (
          <p>{desc.substring(0, 500) + "..."}
          <a href="/" className="more">More</a></p>
        );
    }
    else {
        return desc;
    }
}

  return (
      <Container className="event">
        <Row>
          <Col>
            <div className="imageTitle">
              <img src={event.img} alt={event.name}/>
              <p className="name">{event.name}</p>
            </div>
          </Col>
        </Row>
        <hr/>
        <Row className="info">
          <Col xs={12} md={8}>
            <Row xs={1}>
              <Col>
                {/* <PeopleComponent /> */}
                <p>[People Component]</p>
              </Col>
              <Col>
                {cutoffDesc(event.description)}
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={4} className="details">
            <Row xs={1}>
              <Col>
                {renderedTags}
              </Col>
              <Col>
                <p>
                  <BsCalendar/>
                  {event.date}
                </p>
              </Col>
              <Col>
                <p>
                  <BsClockFill/>
                  {event.time}
                </p>
              </Col>
              <Col>
                <p>
                  <ImLocation/>
                  {event.location}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="rsvp">
          <Col xs={12} sm={8}>
            <p>[people icons] # People Going</p>
          </Col>
          <Col xs={12} sm={4}>
            <Button className="button">Remove RSVP</Button>
          </Col>
        </Row>
      </Container>
  );
};

export default DisplayEvent;

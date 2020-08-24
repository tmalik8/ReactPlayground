import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
// import PeopleComponent from "./PeopleComponent";
import {ImLocation} from 'react-icons/im';
import {BsCalendar, BsClockFill, BsFillTagFill} from 'react-icons/bs';
import '../styles/DisplayEvent.css';


const DisplayEvent = (props) => {

  const event = {
    name: props.name || "Lorem ipsum dolor sit amet",
    img: props.img || "https://cdn.pixabay.com/photo/2017/08/03/11/05/people-2575608_960_720.jpg",
    description: props.description || "Ut tempus facilisis lacinia. Maecenas pharetra vel orci vitae tempor. Nulla sit amet ullamcorper ipsum. Vivamus vestibulum massa tortor, at luctus leo auctor ac. Praesent finibus dolor et luctus tincidunt. Phasellus ut neque eu nisl interdum luctus eu et nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi tempor sapien at faucibus mattis. Quisque venenatis tellus sed diam facilisis tempor. Vivamus ut mi at quam ultricies posuere. Maecenas in ipsum id quam maximus faucibus.",
    tags: props.tags || ["Activism", "#TimeForChange"],
    date: props.date || "Sunday, May 25, 2020",
    time: props.time || "8:00 AM - 12:00 PM",
    location: props.location || "Washington Square Park"
  }

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
          <a href="/" id="more">More</a></p>
        );
    }
    else {
        return desc;
    }
}

  return (
      <Container id="event">
        <Row>
          <Col>
            <div id="imageTitle">
              <img src={event.img} alt={event.name}/>
              <p id="name">{event.name}</p>
            </div>
          </Col>
        </Row>
        <hr/>
        <Row id="info">
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
          <Col xs={12} md={4} id="details">
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
        <Row id="rsvp">
        <Col xs={12} sm={8}>
          <p>[people icons] # People Going</p>
        </Col>
        <Col xs={12} sm={4}>
          <Button id="button">Remove RSVP</Button>
        </Col>
        </Row>
      </Container>
  );
};

export default DisplayEvent;

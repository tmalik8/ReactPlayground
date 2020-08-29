import React from 'react';
import { Container, Row, Col, ResponsiveEmbed } from 'react-bootstrap';
import PeopleComponent from "./PeopleComponent";
import {HiDotsHorizontal, HiThumbUp, HiAnnotation, HiFlag, HiReply} from "react-icons/hi";
import Iframe from 'react-iframe';
import '../styles/DisplayPost.css';


const DisplayPost = ({post, profile}) => {

  // Format the images if given, otherwise format the video if given
  const renderedMedia = [];
  if (post.imgs) {
    for (const img of post.imgs) {
      renderedMedia.push(<Col xs={4}><img src={img} alt="post media"/></Col>);
    }
  } else if (post.video) {
    renderedMedia.push(<Col xs={12}><ResponsiveEmbed aspectRatio="16by9"><Iframe src={post.video} title="post media" allowFullScreen/></ResponsiveEmbed></Col>);
  }

  /**
   * Returns hours and minutes since post was posted
   * @param {Date} time - Date of post
   */
  function calculateTimeSince(time) {
    let minutesSince = Math.floor(((new Date()) - time) / (1000 * 60))
    let hours = Math.floor(minutesSince / 60);
    let minutes = Math.floor(minutesSince % 60);
     return hours + " hr " + minutes + " min";
  }

  /**
   * Changes clicked action to indigo and all others to gray
   * @param {event} e - event triggered
   */
  function onActionClick(e) {
    let actions = document.querySelectorAll(".post .action svg");
    for (let i = 0; i < actions.length; i++) {
      actions[i].classList.remove("active");
      console.log("removing " + actions[i]);
    }
    e.currentTarget.firstElementChild.classList.add("active");
  }

  return (
      <Container className="post">
        <Row>
          <Col xs={10}>
            <PeopleComponent profile={profile}/>
          </Col>
          <Col xs={2}>
            <HiDotsHorizontal className="dots"/>
          </Col>
        </Row>
        <hr/>
        <Row className="time">
          <Col>
            <p>{calculateTimeSince(post.time)}</p>
          </Col>
        </Row>
        <Row className="content">
          <Col>
            <p>{post.content}</p>
          </Col>
        </Row>
        <Row xs={1} md={2} lg={3} className="media">
          {renderedMedia}
        </Row>
        <Row className="stats">
          <Col>
            <p><span><HiThumbUp/></span>{post.stats.likes}</p>
            <p><span><HiAnnotation/></span>{post.stats.reposts}</p>
            <p><span><HiFlag/></span>{post.stats.comments}</p>
            <p><span><HiReply/></span>{post.stats.favorites}</p>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col>
            <button className="action" onClick={onActionClick}><HiThumbUp/></button>
          </Col>
          <Col>
            <button className="action" onClick={onActionClick}><HiAnnotation/></button>
          </Col>
          <Col>
            <button className="action" onClick={onActionClick}><HiFlag/></button>
          </Col>
          <Col>
            <button className="action" onClick={onActionClick}><HiReply/></button>
          </Col>
        </Row>
      </Container>
  );
};

export default DisplayPost;
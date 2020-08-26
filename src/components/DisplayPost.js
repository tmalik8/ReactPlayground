import React from 'react';
import { Container, Row, Col, ResponsiveEmbed } from 'react-bootstrap';
// import PeopleComponent from "./PeopleComponent";
import {HiDotsHorizontal, HiThumbUp, HiAnnotation, HiFlag, HiReply} from "react-icons/hi";
import Iframe from 'react-iframe';
import '../styles/DisplayPost.css';


const DisplayPost = (props) => {

  const post = {
    content: props.content || "Ut tempus facilisis lacinia. Maecenas pharetra vel orci vitae tempor. Nulla sit amet ullamcorper ipsum. Vivamus vestibulum massa tortor, at luctus leo auctor ac. Praesent finibus dolor et luctus tincidunt. Phasellus ut neque eu nisl interdum luctus eu et nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi tempor sapien at faucibus mattis. Quisque venenatis tellus sed diam facilisis tempor. Vivamus ut mi at quam ultricies posuere. Maecenas in ipsum id quam maximus faucibus.",
    time: props.time || new Date("August 25, 2020 03:24:00"),
    imgs: props.imgs || ["https://cdn.pixabay.com/photo/2017/08/03/11/05/people-2575608_960_720.jpg", "https://cdn.pixabay.com/photo/2017/08/03/11/05/people-2575608_960_720.jpg","https://cdn.pixabay.com/photo/2017/08/03/11/05/people-2575608_960_720.jpg"],
    videos: props.videos || ["https://www.youtube.com/embed/ttIWUvxnuEo","https://www.youtube.com/embed/ttIWUvxnuEo"],
    stats: props.stats || [162, 38, 52, 123]
  }

  // format all media
  const renderedImgs = [];
  for (const img of post.imgs) {
    renderedImgs.push(<Col><img src={img} alt="post media"/></Col>);
  }
  const renderedVids = [];
  for (const video of post.videos) {
    renderedVids.push(<Col><ResponsiveEmbed aspectRatio="16by9"><Iframe src={video} title="post video" allowFullScreen/></ResponsiveEmbed></Col>);
  }

  /**
   * Returns hours and minutes since post was posted
   * @param {Date} timeSince
   */
  function calculateTimeSince(timeSince) {
    let minutesSince = Math.floor(((new Date()) - timeSince) / (1000 * 60))
    let hours = Math.floor(minutesSince / 60);
    let minutes = Math.floor(minutesSince % 60);
     return hours + " hr " + minutes + " min";
  }

  function onActionClick(e) {
    e.target.classList.add("active");
  }

  return (
      <Container id="post">
        <Row>
          <Col xs={10}>
            {/* <PeopleComponent/> */}
            <p>[People Component]</p>
          </Col>
          <Col xs={2}>
            <HiDotsHorizontal id="dots"/>
          </Col>
        </Row>
        <hr/>
        <Row id="time">
          <Col>
            <p>{calculateTimeSince(post.time)}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p id="content">{post.content}</p>
          </Col>
        </Row>
        <Row xs={1} md={2} lg={3}>
          {renderedImgs}
        </Row>
        <Row xs={1} lg={2}>
          {renderedVids}
        </Row>
        <Row id="stats">
          <Col>
            <p><span><HiThumbUp/></span>{post.stats[0]}</p>
            <p><span><HiAnnotation/></span>{post.stats[1]}</p>
            <p><span><HiFlag/></span>{post.stats[2]}</p>
            <p><span><HiReply/></span>{post.stats[3]}</p>
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
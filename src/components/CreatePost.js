// Example use case
// <CreatePost name='James Foody' location='Cambridge, MA, US'
//             img='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'/>

import React from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../styles/CreatePost.css'


const CreatePost = ({name, location, img}) => {
  return (
      <Container className='create-post-wrapper'>
          <Container>
           <Row>
           <Col>
           <div className='info'>
              <div className='img-container'>
              {/** Will replace with People Component*/}
                <img src={img} alt='me'/>
              </div>
              <div>
                <div className='name'>{name}</div>
                <div className='loc'>{location}</div>
              </div>
            </div>
            </Col>
            <Col lg={6} xs={6}>
              <Button className="create-events-btn float-right">+ Create Events</Button>
            </Col>
           </Row>
            
            
           
          </Container>
      <Form.Group>
        <Form.Control as="textarea" placeholder="What's on your mind?" rows="3" />
      </Form.Group>
      <Form.Group>
        <Row>
          <Col><i>picture</i>
            <i>video</i>
            <i>document</i></Col>
          <Col xs={6}> <Button className="create-post-btn float-right col-3">Ok</Button> </Col>
        </Row>
        
      </Form.Group>
      
      </Container>
  );
};

export default CreatePost;
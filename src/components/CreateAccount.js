import React, { useState } from "react";
import { Button, FormControl, Col, Row, Navbar, Image, InputGroup, Container } from "react-bootstrap";

import logo from '../resources/turnUpLogo.png'
import userAdd from '../resources/userAdd.png'
function CreateAccount() {
  const [image, setImage] = useState({ preview: "", raw: "" });
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [referralcode, setReferralcode] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [Instagram, setInstagram] = useState("");
  const [Facebook, setFacebook] = useState("");
  const [Snapchat, setSnapchat] = useState("");
  const [LinkedIn, setLinkedIn] = useState("");

  function validateForm() {
    return name.length > 0 && username.length > 0 && bio.length > 0 && bio.length <= 150;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('/api/form-submit-url', {
      method: 'POST',
      body: data,
    });
  }
  const handleChange = e => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  };

  return (
    <Container onSubmit={handleSubmit}>

      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home"> <Image className="align-top" alt="TurnUp Activism" src={logo} width="150" height="60" /> </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Button variant="outline-dark" size="lg" className="button-login-signup" >LOG IN</Button>
        </Navbar.Collapse>
      </Navbar>
      <br />
      <Row className='justify-content-center'>
        <label htmlFor="upload-button">
          {image.preview ? (
            <Image src={image.preview} alt="dummy" width="206" height="206" roundedCircle />
          ) : (
              <>
                <Col xs={6} md={4}>
                  <Image src={userAdd} width="206" height="206" roundedCircle />
                </Col>
              </>
            )}
        </label>
        <input
          type="file"
          id="upload-button"
          style={{ display: "none" }}
          onChange={handleChange}
        />
      </Row>
      <br />
      <Row className='justify-content-center'>
        <Col xs={4}>
          <label className="input-acc-creation">Name*</label>
          <InputGroup controlId="name">
            <FormControl
              autoFocus
              placeholder="John Doe"
              value={name}
              size="lg"
              type="text"
              onChange={e => setName(e.target.value)}
            />
          </InputGroup>
          <label className="input-acc-creation">Username*</label>
          <InputGroup controlId="username" bsSize="large">
            <FormControl
              value={username}
              onChange={e => setUsername(e.target.value)}
              type="text"
              placeholder="john_doe"
              size="lg"
            />
          </InputGroup>
        </Col>
        <Col xs={4}>
          <label className="input-acc-creation">Referral Code</label>
          <InputGroup controlId="referralcode">
            <FormControl
              value={referralcode}
              onChange={e => setReferralcode(e.target.value)}
              type="number"
              size="lg"
            />
          </InputGroup>
          <label className="input-acc-creation">Location</label>
          <InputGroup controlId="location">
            <FormControl
              value={location}
              onChange={e => setLocation(e.target.value)}
              type="number"
              size="lg"
            />
          </InputGroup>
        </Col>
      </Row>
      <br />
      <Row className='justify-content-center'>
        <Col xs={4}>
          <label className="input-acc-creation">Bio* (max 150)</label>
          <InputGroup controlId="bio">
            <FormControl
              value={bio}
              as="textarea"
              rows="8"
              onChange={e => setBio(e.target.value)}
              type="text"
            />
          </InputGroup>
        </Col>
        <Col xs={4}>
          <label className="input-acc-creation">Social Media</label>
          <InputGroup controlId="social">
            <InputGroup.Prepend>
              <InputGroup.Text>
                <i class="fab fa-instagram"></i>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={Instagram}
              onChange={e => setInstagram(e.target.value)}
              type="text"
              placeholder="Instagram"
              size="lg"
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <i class="fab fa-facebook"></i>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={Facebook}
              onChange={e => setFacebook(e.target.value)}
              type="text"
              placeholder="Facebook"
              size="lg"
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <i class="fab fa-snapchat"></i>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={Snapchat}
              onChange={e => setSnapchat(e.target.value)}
              type="text"
              placeholder="Snapchat"
              size="lg"
            />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <i class="fab fa-linkedin"></i>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              value={LinkedIn}
              onChange={e => setLinkedIn(e.target.value)}
              type="text"
              placeholder="LinkedIn"
              size="lg"
            />
          </InputGroup>
        </Col>
      </Row>
      <br />
      <Row className='justify-content-center'>
        <Button type="submit" disabled={!validateForm()} className="button-acc-creation">Continue</Button>
      </Row>
    </Container>
  );
}
export default CreateAccount;
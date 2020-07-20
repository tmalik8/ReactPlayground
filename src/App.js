import React from "react";
import "./App.css";

/**React Components */
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";

/* Custom Components*/

import IncrementButton from './components/IncrementButton';
import InputField from './components/InputField';
import ToastWrapper from './components/ToastWrapper';
import InternInfoDisplay from './components/InternInfoDisplay';
import LanguageList from './components/LanguageList';

/* Models/Services */

import { Intern } from "./model/Intern";

let amonte = new Intern(
  "Amonte",
  "Just a regular Joe named Amonte.",
  "Intern Lead",
  "https://media-exp1.licdn.com/dms/image/C5603AQEb3xbVkqos3A/profile-displayphoto-shrink_400_400/0?e=1600300800&v=beta&t=CsfxpsRe0NU7Rj2HybugKe0LS90IHLNtC3ES82mfmLA",
  new Date("1/1/21")
);
let sanjana = new Intern(
  "Sanjana",
  "Sophomore at UT Austin",
  "Backend Web/Intern Lead",
  "https://picjumbo.com/wp-content/uploads/free-stock-photos-san-francisco-1080x720.jpg",
  new Date("8/21/20")
);
let kobayashi = new Intern(
  "Kyle",
  "Freshman at Grinnell College",
  "Mobile Developer Intern",
  "https://mymodernmet.com/wp/wp-content/uploads/2018/05/unsplash-free-stock-photography.jpg",
  new Date("8/20/20")
);


const App = () => (
  <Container className="p-12">
    <Jumbotron>
      <h1 className="header">TurnUp React Playground</h1>
      <Container fluid className="p-6">
        <Row>
          <Col>
            <InternInfoDisplay
              intern={amonte}
              onClick={() => {
                let content = "This was also logged to the console";
                console.log(content);
                alert(content);
              }}
            >
              <div>Hi, welcome.</div>
            </InternInfoDisplay>
          </Col>
          <Col>
            <InternInfoDisplay
              intern={sanjana}
              onClick={() => {
                let content = "This was also logged to the console";
                console.log(content);
                alert(content);
              }}
            >
              <div>Hi, nice to meet you!</div>
            </InternInfoDisplay>
          </Col>
        </Row>
      </Container>

      <ToastWrapper title="Welcome!">
        <span role="img" aria-label="tada">
          🎉 🎉 🎉 🎉
        </span>
      </ToastWrapper>
    </Jumbotron>

    <Jumbotron>
      <LanguageList />
    </Jumbotron>

    <Jumbotron hidden>
      <IncrementButton />
    </Jumbotron>

    <Jumbotron hidden>
      <InputField />
    </Jumbotron>
  </Container>
);

export default App;

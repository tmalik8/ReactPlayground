import React, {useState} from "react";
import "./App.css";

/**React Components */
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "bootstrap/dist/css/bootstrap.min.css";

/* Custom Components*/

import IncrementButton from "./components/IncrementButton";
import InputField from "./components/InputField";
import ToastWrapper from "./components/ToastWrapper";
import InternInfoDisplay from "./components/InternInfoDisplay";
import LightModal from "./components/lightModal";
import NavBar from "./components/navBar"
import PopOverTrigger from "./components/PopOverButton";

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
let shayan = new Intern(
  "Shayan",
  "may the force be with you.",
  "Frontend Web/Intern Lead",
  "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
  new Date("9/8/20")
);

let henry = new Intern(
  "Henry",
  "From New York",
  "Backend Web Intern",
  "https://www.history.com/.image/t_share/MTU3ODc5MDgyNjY5OTc1MjYz/new-york-city.jpg",
  new Date("9/1/20"));


let sonia = new Intern(
  "Sonia",
  "Rising Sophomore at UW",
  "Intern (Web/Mobile Dev)",
  "https://cdn.pixabay.com/photo/2015/07/17/18/01/portland-bill-849583_960_720.jpg",
  new Date("9/25/20")
);

let adil = new Intern(
  "Adil ",
  "Rising Junior at UMB",
  "Intern (Web/Mobile Dev)",
  "https://www.cloudcms.com/images/quickstarts/react/react.df70b005.png",
  new Date("7/20/20")

);
const App = () => {
  const [show, setShow] = useState(false);
  const NavTitle=['The PlayGround','Home','Meet the Interns','TurnUp Activism'];
  return(
    <Container className="p-12">
      <NavBar NavTitles= {NavTitle}/>
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
          <Row className='my-1'>
            <Col>
              <LightModal show={show}
                          handleClose={() => setShow(false)}
                          title="Hello Everyone" text="Woohoo, you're reading this text in a modal!">
                <div className='badge badge-primary'>fun badge</div>
              </LightModal>
              <InternInfoDisplay
                intern={shayan}
                onClick={() => {
                  let content = "This was also logged to the console";
                  console.log(content);
                  setShow(true)
                }}
              >
                <div>I'm excited to be here!</div>
              </InternInfoDisplay>
            </Col>
            <Col>
              <InternInfoDisplay
                intern={sonia}
                onClick={() => {
                  let content = "This was also logged to the console";
                  console.log(content);
                  alert(content);
                }}
              >
                <div>Hi!!</div>
              </InternInfoDisplay>
            </Col>
            <Col><InternInfoDisplay intern={adil} onClick={()=> { let content = "This was also logged to the console"; 
            console.log(content); alert(content);}}>
              <div>
              They call me Mister Tibbs! 
              </div>
              </InternInfoDisplay>
              <PopOverTrigger text="Click to see a popover">
                <div>In Progress</div>
              </PopOverTrigger>
            </Col>         
          </Row>
<Row><Col>
                   <InternInfoDisplay
                intern={henry}
                onClick={() => {
                  let content = "This was also logged to the console";
                  console.log(content);
                  alert(content);
                }}
              >
                <div>Excited to be working with you all!</div>
              </InternInfoDisplay></Col>
                  </Row>
        </Container>
        <ToastWrapper title="Welcome!">
        <span role="img" aria-label="tada">
          🎉 🎉 🎉 🎉
        </span>
        </ToastWrapper>
      </Jumbotron>

      <Jumbotron hidden>
        <IncrementButton />
      </Jumbotron>

      <Jumbotron hidden>
        <InputField />
      </Jumbotron>
    </Container>
  )
};

export default App;

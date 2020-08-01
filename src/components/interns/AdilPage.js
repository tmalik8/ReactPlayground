/**
 * @author Adil M.
 */

import React from 'react';
import { Tab ,Tabs } from 'react-bootstrap';
import {Jumbotron} from "react-bootstrap";


function AdilPage() {
  return (
      <Jumbotron>
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                <Tab eventKey="profile" title="Profile">
                       <p>
                       Hi! My name is Adil.
                       An engaged and motivated Computer Science student with strong communication and self-motivational skills.
                      </p>
                </Tab>
                <Tab eventKey="contact" title="Contact">
                     <p>
                     </p>
                </Tab>
        </Tabs>
      </Jumbotron>
  );
}

export default AdilPage;

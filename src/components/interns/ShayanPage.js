/**
 * @author Shayan A.
 */
import React from 'react';
import {Jumbotron} from "react-bootstrap";

const ShayanPage = () => {
  return (
    <Jumbotron>
      <h1 className="display-4">Hello, Interns</h1>
      <p className="lead">
        Welcome to Shayan's page. Here you can find all about him.
      </p>
      <p> I am a full stack web developer passionate about Javascript, React.js, and Next.js</p>
      <p> Feel free to DM me on Slack If you have any question, or comment about this assignment or anything in
        general.</p>
      <hr className="my-4"/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="/#" role="button">Learn more</a>
      </p>
    </Jumbotron>
  );
};

export default ShayanPage;
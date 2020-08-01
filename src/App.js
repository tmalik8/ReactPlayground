import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

/**stylesheets */
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/app.css';

/**React Components */
import Container from "react-bootstrap/Container";

/* Custom Components*/
import Navigation from "./components/Navigation";
import Playground from "./components/Playground";
import PageNotFound from "./components/PageNotFound";
import ReactTask2 from "./components/interns/ReactTask2";
import soniaPage from "./components/interns/soniaPage";

const App = () => {

  return (
    <BrowserRouter>
      <Navigation/>
      <Container className="my-4">
        <Switch>
          <Route path='/' exact component={Playground}/>
          <Route path='/interns/reacttask2' component={ReactTask2}/>
          <Route path="/interns/soniaPage" component={soniaPage}/>
          <Route component={PageNotFound}/>
        </Switch>
      </Container>
    </BrowserRouter>
  )
};

export default App;

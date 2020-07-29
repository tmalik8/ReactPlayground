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
import ShayanPage from "./components/interns/ShayanPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation/>
      <Container className="my-4">
        <Switch>
          <Route path='/' exact component={Playground}/>
          <Route path='/interns/shayan' component={ShayanPage}/>
          <Route component={PageNotFound}/>
        </Switch>
      </Container>
    </BrowserRouter>
  )
};

export default App;

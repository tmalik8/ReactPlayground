import React from "react";

import './styles/LUX.css';
import './styles/app.css';

/**React Components */
import Container from "react-bootstrap/Container";


// import "bootstrap/dist/css/bootstrap.min.css";
/* Custom Components*/
import Navigation from "./components/Navigation";
import ShayanPage from "./components/interns/ShayanPage";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";


const App = () => {
  return (
    <BrowserRouter>
      <Navigation/>
      <Container className="my-4">
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/interns/shayan' component={ShayanPage}/>
          <Route component={PageNotFound}/>
        </Switch>
      </Container>
    </BrowserRouter>
  )
};

export default App;

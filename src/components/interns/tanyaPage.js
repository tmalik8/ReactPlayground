/**
 * @author Tanya
 */
import React from 'react';
import Alert from '../practice/Alert';
import {Jumbotron} from 'react-bootstrap';

function tanyaPage()
{
    return(
        <Jumbotron>
            <h1>Tanya Task 2 Routing Page</h1>
            <hr/>
            <p>My name is Tanya Malik. I made a component for task 1.</p>
            <p>Look at my alert.</p>
            <Alert></Alert>
        </Jumbotron>

    );
}

export default tanyaPage;
/**
 * @author Tanya
 * 
 */
import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function click(e)
{
    e.preventDefault();
    alert("This button has been clicked");
}
const al = () => {
    return(
        <Alert variant = "info">
        <Alert.Heading>This alert was created by Tanya.</Alert.Heading>
        <p>
            <b>React is really cool, and there is so much to learn. </b>
            <i>I am enjoying this internship so far, and I have learned a lot.</i>
        </p>
        <ul>
            <li>Open the door.</li>
            <li>Close the door.</li>
            <li>Life is fun, and so are you!</li>
            <li>Cheesecake is good, and it's yummy too!</li>
        </ul>
            <Alert.Link href="https://www.turnup.us/">
                This is TurnUp's Website.
            </Alert.Link>
            <div>
            <Button variant="light" onClick={click}>
                    Click Me
                    </Button>
            </div>
            
        </Alert>
    )
}
export default al;
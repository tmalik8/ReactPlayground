import React from 'react';
import { Card, Button, Badge} from 'react-bootstrap';
import {IIntern} from '../model/Intern'

type InternViewModel = {
    intern:IIntern,
    onClick:Function,
    children:any
}

const InternInfoDisplay = ({intern,onClick,children}:InternViewModel) => {
    if(!intern){
        return (
            <Card>
                <Card.Body>
                    No intern data was passed in.
                </Card.Body>
            </Card>
        )
    }

    //handle the condition where no onclick was passed in
    if (!onClick)
    {
        onClick = () => {alert("No overload was passed in. So here we are.")};
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={intern.ImgSource} />
            <Card.Body>
                <Card.Title>{intern.Name}<Badge variant="secondary">{intern.Team}</Badge></Card.Title>
                <Card.Text>
                    {intern.Description}
                </Card.Text>
                <Button variant="primary" onClick={() => onClick()}>Click me</Button>
                {children}
            </Card.Body>
        </Card>)
}


export default InternInfoDisplay;
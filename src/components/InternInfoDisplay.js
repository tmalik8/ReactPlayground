import React from 'react';
import { Card, Button, Badge} from 'react-bootstrap';


const InternInfoDisplay = ({internViewModel, onClickOverload, children}) => {
    const viewModel = internViewModel;
    console.log(viewModel);
    onClickOverload = onClickOverload ?? (() => alert("Nothing to see here!"));
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={viewModel.ImgSource} />
            <Card.Body>
                <Card.Title>{viewModel.Name}<Badge variant="secondary">{viewModel.Team}</Badge></Card.Title>
                <Card.Text>
                    {viewModel.Description}
                </Card.Text>
                <Button variant="primary" onClick={onClickOverload}>Click me</Button>
                {children}
            </Card.Body>
        </Card>)
}


export default InternInfoDisplay;
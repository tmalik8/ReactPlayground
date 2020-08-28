import React from "react";
import { Button, Row, Container, Modal } from "react-bootstrap";

import '../styles/ConfirmationBox.css'

function ConfirmationBox(props) {
    return (
        <Modal
            {...props}
            size="md"
            backdrop="static"
            centered>
            <Modal.Header closeButton></Modal.Header>

            <Modal.Body>
                <Container className="confirm-box">
                <Row> <span className="body-modal-icon"><i class="fas fa-check-circle fa-3x"></i></span></Row>
                <Row ><h1>Post Successfully!</h1></Row>
                <Row ><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh</p></Row>
                <Row><Button onClick={props.onHide} className="button-modal">OK</Button></Row>
                </Container>
            </Modal.Body>

            
            
        </Modal>
    );
}

export default ConfirmationBox;
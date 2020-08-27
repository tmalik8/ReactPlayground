import React from "react";
import { Button, Row, Modal } from "react-bootstrap";

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
                <Row className='justify-content-center'><span className="body-modal-icon"><i class="fas fa-check-circle fa-3x"></i></span></Row>
                <Row className='justify-content-center'><h1 className="body-modal-h1">Post Successfully!</h1></Row>
                <Row className='justify-content-center'><p className="body-modal-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh</p></Row>
            </Modal.Body>

            <Row className='justify-content-center'><Button onClick={props.onHide} className="button-modal">OK</Button></Row>
            <br />
        </Modal>
    );
}

export default ConfirmationBox;
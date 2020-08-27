/**
 * @author Tanya
 * 
 */
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const PhoneConfirm = () => 
{
  return (

<React.Fragment>
<Form>
<Form.Group controlId="formPhoneNumber">
    <Form.Label>
        <b>Phone Number</b>
        </Form.Label>
    <Form.Control type="tel" placeholder="Enter phone number" />
  </Form.Group>
  <Button Variant='primary' size="lg">Send Confirmation Code</Button>
</Form>

<Form>
<Form.Group controlId="confirmCode">
    <Form.Label>
        <b>Confirmation Code</b>
        </Form.Label>
    <Form.Control type="text" placeholder="Enter confirmation code" />
  </Form.Group>

       <Button Variant='primary' id="continue" size="lg">Continue</Button>
       </Form>
  </React.Fragment>
 
  )
}

  export default PhoneConfirm;
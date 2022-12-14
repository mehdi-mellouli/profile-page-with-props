import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Formulaire() {
  return (
    <div className='container' >
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name </Form.Label>
        <Form.Control type="fullName" placeholder="Enter your  Full Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicProfession">
        <Form.Label>Profession </Form.Label>
        <Form.Control type="Profession" placeholder="Enter your profession" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicBio">
        <Form.Label>Bio </Form.Label>
        <Form.Control type="Bio" placeholder="tell us about you" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhoto">
        <Form.Label>Photo </Form.Label>
        <Form.Control type="url" placeholder="enter your photo url here" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default Formulaire;
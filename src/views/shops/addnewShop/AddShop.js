import React from "react";

import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";




function AddShop({setModal}) {
 

  return (
    <div>
      <div className="justify-content-end align-items-end d-flex">
      <button onClick={()=>setModal(false)} style={{border:"none"}}>back</button>
      </div>

      

      <Form >
        <Row className="mb-3">
          <Form.Group controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              
          
            />
           
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Business Address</Form.Label>
          <Form.Control placeholder="Business Address" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Contact details</Form.Label>
            <Form.Control placeholder="mobile" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>City</Form.Label>
            <Form.Control placeholder="city" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>State</Form.Label>
            <Form.Control placeholder="state" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Products</Form.Label>
            <Form.Control placeholder="Products" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Services</Form.Label>
            <Form.Control placeholder="Services" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Images</Form.Label>
            <Form.Control type="file" required name="file" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Profile</Form.Label>
            <Form.Control type="file" required name="file" />
          </Form.Group>
        </Row>


        <Row className="mb-3">
      

          <Form.Group  controlId="formGridZip">
            <Form.Label>Subscriptions</Form.Label>
            <Form.Control type="number" placeholder="Subscriptions" />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddShop;

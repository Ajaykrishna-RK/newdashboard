import React from "react";
import * as formik from "formik";
import * as yup from "yup";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

function AddShop({setModal}) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <div className="justify-content-end align-items-end d-flex">
      <button onClick={()=>setModal(false)} style={{border:"none"}}>back</button>
      </div>

      {/* <form onSubmit={formik.handleSubmit}>
       <label htmlFor="firstName">First Name</label>
       <input
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.firstName}
       />
       {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
 
       <label htmlFor="lastName">Last Name</label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastName}
       />
       {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
 
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       {formik.errors.email ? <div>{formik.errors.email}</div> : null}
 
       <button type="submit">Submit</button>
     </form> */}

      <Form onSubmit={formik.handleSubmit}>
        <Row className="mb-3">
          <Form.Group controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            {formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}
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

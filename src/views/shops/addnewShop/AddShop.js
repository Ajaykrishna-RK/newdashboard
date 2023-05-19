import React from "react";

import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

import * as Yup from "yup";
import {useFormik} from "formik";
import clsx from "clsx";

const addShopSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  contact_details: Yup.number().required(" Contact details is required"),
  products: Yup.string().required("Products  is required"),
  services: Yup.string().required(" Services is required"),
  
});
const initialValues = {
  name: "",
  contact_details: "",
  products :"",
  services:"",
};

function AddShop({ setModal }) {
  const formik = useFormik({
    initialValues,
    validationSchema: addShopSchema,
    onSubmit: (values, { setSubmitting }) => {
     
      try {
        console.log(values.name, "===");
      } catch (error) {
        console.error(error);

        setSubmitting(false);
      }
    },
  });

  // const handleSubmit = (e) =>{
  //   e.preventDefault()

  // }

  return (
    <div>
      <div className="justify-content-end align-items-end d-flex">
        <Button variant="primary " onClick={() => setModal(false)}>
          back
        </Button>
      </div>

      <Form onSubmit={formik.handleSubmit} noValidate>
        <Row className="mb-3">
          <Form.Group controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              {...formik.getFieldProps("name")}
              className={clsx(
                "form-control form-control-md form-control-solid",
                {
                  "is-invalid": formik.touched.name && formik.errors.name,
                }
              )}
              style={{ border: "1px solid #CCDBE1" }}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="fv-plugins-message-container text-danger mt-1">
                <span role="alert">{formik.errors.name}</span>
              </div>
            )}
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Business Address</Form.Label>
          <Form.Control placeholder="Business Address" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Contact details</Form.Label>
            <Form.Control
              placeholder="mobile"
              {...formik.getFieldProps("contact_details")}
              className={clsx(
                "form-control form-control-md form-control-solid",
                {
                  "is-invalid":
                    formik.touched.contact_details &&
                    formik.errors.contact_details,
                }
              )}
            />
            {formik.touched.contact_details &&
              formik.errors.contact_details && (
                <div className="fv-plugins-message-container text-danger mt-1">
                  <span role="alert">{formik.errors.contact_details}</span>
                </div>
              )}
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
            <Form.Control
              placeholder="Products"
              {...formik.getFieldProps("products")}
              className={clsx(
                "form-control form-control-md form-control-solid",
                {
                  "is-invalid":
                    formik.touched.products &&
                    formik.errors.products,
                }
              )}
            />

            {formik.touched.products &&
              formik.errors.products && (
                <div className="fv-plugins-message-container text-danger mt-1">
                  <span role="alert">{formik.errors.products}</span>
                </div>
              )}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Services</Form.Label>
            <Form.Control
              placeholder="Services"
              {...formik.getFieldProps("services")}
              className={clsx(
                "form-control form-control-md form-control-solid",
                {
                  "is-invalid":
                    formik.touched.services &&
                    formik.errors.services,
                }
              )}
            />

            {formik.touched.services &&
              formik.errors.services && (
                <div className="fv-plugins-message-container text-danger mt-1">
                  <span role="alert">{formik.errors.services}</span>
                </div>
              )}
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Images</Form.Label>
            <Form.Control type="file" name="file" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Profile</Form.Label>
            <Form.Control type="file" name="file" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group controlId="formGridZip">
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

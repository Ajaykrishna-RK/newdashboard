import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import * as Yup from "yup";
import {  useFormik } from "formik";
import clsx from "clsx";



const addIncomeSchema = Yup.object().shape({
  income_source: Yup.string().required("Income_source is required"),
  rupees: Yup.number().required(" Rupees is required"),

});
const initialValues = {
  income_source: "",
  rupees:""
};


function AddIncome({ show, handleClose }) {


  const formik = useFormik({
    initialValues,
    validationSchema:addIncomeSchema,
    onSubmit:  (values, { setSubmitting }) => {
     
      try {
        console.log(values.expense_source, "===");
      } catch (error) {
        console.error(error);

        setSubmitting(false);
      }
    },
  });




  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Form className="p-5" onSubmit={formik.handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title> Add Income</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Income Source</Form.Label>
              <Form.Control placeholder="Income Source"
              
              {...formik.getFieldProps("income_source")}
              className={clsx(
                "form-control form-control-md form-control-solid",
                {
                  "is-invalid": formik.touched.income_source && formik.errors.income_source,
                }
              )}
            />
                {formik.touched.income_source && formik.errors.income_source && (
              <div className="fv-plugins-message-container text-danger mt-1">
                <span role="alert">{formik.errors.income_source}</span>
              </div>
            )}
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Rupees</Form.Label>
              <Form.Control placeholder="Rupees" 
              
              {...formik.getFieldProps("rupees")}
              className={clsx(
                "form-control form-control-md form-control-solid",
                {
                  "is-invalid": formik.touched.rupees && formik.errors.rupees,
                }
              )}
              
              
              />

{formik.touched.rupees && formik.errors.rupees && (
              <div className="fv-plugins-message-container text-danger mt-1">
                <span role="alert">{formik.errors.rupees}</span>
              </div>
            )}
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Add Income
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default AddIncome;

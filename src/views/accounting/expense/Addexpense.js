import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import * as Yup from "yup";
import {  useFormik, } from "formik";
import clsx from "clsx";


const addexpenseSchema = Yup.object().shape({
  expense_source: Yup.string().required("Expense_source is required"),
  rupees: Yup.number().required(" Rupees is required"),

});
const initialValues = {
  expense_source: "",
  rupees:""
};


function Addexpense({show,handleClose}) {


  const formik = useFormik({
    initialValues,
    validationSchema:addexpenseSchema,
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
        <Form className="p-5" onSubmit={formik.handleSubmit} noValidate>
          <Modal.Header closeButton>
            <Modal.Title>Add Expense</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Expense Source</Form.Label>
              <Form.Control placeholder="Expense Source" 
               {...formik.getFieldProps("expense_source")}
               className={clsx(
                 "form-control form-control-md form-control-solid",
                 {
                   "is-invalid": formik.touched.expense_source && formik.errors.expense_source,
                 }
               )}

              />
                {formik.touched.expense_source && formik.errors.expense_source && (
              <div className="fv-plugins-message-container text-danger mt-1">
                <span role="alert">{formik.errors.expense_source}</span>
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
            <Button variant="primary" onClick={handleClose} type="submit">
       Add Expense
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>


    </div>
  )
}

export default Addexpense
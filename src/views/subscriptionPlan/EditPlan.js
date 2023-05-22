import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import useSubscriptionPlansQuery from "../../store/subscriptionsplans/useSubPlanQuery";
import useUtilQuery from "../../store/util/useUtilQuery";
import * as Yup from "yup";
import { useFormik } from "formik";
import clsx from "clsx";

const subscriptionEditSchema = Yup.object().shape({
  country: Yup.string().required("Choose the country"),
  name: Yup.string(),
  description: Yup.string(),
});



function EditPlan({ show, handleClose, id }) {


  const { data: subscriptionPlansDataDetails } =
  useSubscriptionPlansQuery.Plan_details(id);

  const initialValues = {
    country: subscriptionPlansDataDetails?.data?.country,
    name: subscriptionPlansDataDetails?.data?.name,
    description: subscriptionPlansDataDetails?.data?.description,
    is_active: subscriptionPlansDataDetails?.data?. is_active,
  };


console.log(subscriptionPlansDataDetails?.data?.name,"============")


  const { data: countriesList } = useUtilQuery.Countries_list();

  const { mutateAsync: editPlan, isSuccess } =
    useSubscriptionPlansQuery.Edit_plan();

    const formik = useFormik({
      initialValues,
      validationSchema: subscriptionEditSchema,
      enableReinitialize:true,
      onSubmit: async (values, { setStatus, setSubmitting , resetForm}) => {
    
        try {
          console.log(values,"==")
          await editPlan({
            id:id,
              name: values?.name,
            country: values?.country,
            
            description: values?.description,
         
          });
          resetForm()
        } catch (error) {
          console.error(error);
         
        }
      },
    });



 
 

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Form className="p-5" onSubmit={formik.handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Country</Form.Label>

                <Form.Select
            {...formik.getFieldProps("country")}
            className={clsx(
              "form-control form-control-md form-control-solid",
              {
                "is-invalid":
                  formik.touched.country && formik.errors.country,
              }
            )}
            style={{ border: "1px solid #CCDBE1" }}
                >
                  <option value="">Choose</option>
                  {countriesList?.data?.results?.map((country) => {
                    return (
                      <option key={country.id} value={country.id}>
                        {country.name}
                      </option>
                    );
                  })}
                </Form.Select>


                {formik.touched.country && formik.errors.country && (
                  <div className="fv-plugins-message-container text-danger mt-1">
                    <span role="alert">{formik.errors.country}</span>
                  </div>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  {...formik.getFieldProps("name")}
                 
                  placeholder="name"
                 
                  
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  placeholder="description"
                  {...formik.getFieldProps("description")}
                  
                />
              </Form.Group>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Save changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default EditPlan;

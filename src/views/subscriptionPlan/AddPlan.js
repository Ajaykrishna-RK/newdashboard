import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import clsx from "clsx";
import useSubscriptionPlansQuery from "../../store/subscriptionsplans/useSubPlanQuery";
import useUtilQuery from "../../store/util/useUtilQuery";
import { toast } from "react-toastify";


const subscriptionSchema = Yup.object().shape({
    country: Yup.string().required("Country is required"),
    name: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Name is required"),
    description: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Description is required"),
  });


  const initialValues = {
    country: "",
    name: "",
    description: "",
    is_active: false,
  };


function AddPlan({ show, handleClose }) {



  const { data: countriesList } = useUtilQuery.Countries_list();

    const { mutateAsync: addPlan, isSuccess } =
    useSubscriptionPlansQuery.Add_plan();


    console.log(isSuccess , "scssss")

    const [status,setStatus] = useState(false)
   const [add,setAdd] = useState(false)

  const formik = useFormik({
    initialValues,
    validationSchema: subscriptionSchema,
    onSubmit: async (values, { setStatus, setSubmitting,resetForm }) => {
    
      try {
        await addPlan({
            name: values.name,
          country: values.country,
          
          description: values.description,
          is_active: status,
        });
          
  resetForm()

  
      } catch (error) {
        console.error(error);
       
      }
    },
  });


  useEffect(() => {
    if (isSuccess) {
      toast.success("Plan added successfully");
   
    }
  }, [isSuccess]);

 
  const handleSave = () => {
    if (
      formik.values.country === "" ||
      formik.values.description === "" ||
      formik.values.name === "" ) {
      console.log("open");
    } else {
      handleClose();
    }
  };


  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Form className="p-5" onSubmit={formik.handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title> Add Plan</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
              <Form.Control placeholder="Name"   {...formik.getFieldProps("name")}
                  className={clsx(
                    "form-control form-control-md form-control-solid",
                    {
                      "is-invalid": formik.touched.name && formik.errors.name,
                    }
                  )} />
                   {formik.touched.name && formik.errors.name && (
              <div className="fv-plugins-message-container text-danger mt-1">
                <span role="alert">{formik.errors.name}</span>
              </div>
            )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Description</Form.Label>
              <Form.Control placeholder="Description" 
              {...formik.getFieldProps("description")}
              className={clsx(
                "form-control form-control-md form-control-solid",
                {
                  "is-invalid": formik.touched.description && formik.errors.description,
                }
              )} 
              
              
              />
                    {formik.touched.description && formik.errors.description && (
              <div className="fv-plugins-message-container text-danger mt-1">
                <span role="alert">{formik.errors.description}</span>
              </div>
            )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Status</Form.Label>
              <Form.Control placeholder="Status" />
            </Form.Group>

            
            <Row className="mt-3">
              <Col className="d-block justify-content-start align-items-start">
              <Form.Label>Status</Form.Label>
                <Form.Switch
                  className="form-control-md "
                  type="checkbox"
                  label={status ? "Active" : "Inactive"}
                  checked={status}
                  onChange={(e) => setStatus(e.target.checked)}
                />
              </Col>
             
            </Row>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave} type="submit">
              Add Plan
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default AddPlan;

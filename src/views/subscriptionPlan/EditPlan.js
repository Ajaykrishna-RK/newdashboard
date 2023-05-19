import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import useSubscriptionPlansQuery from "../../store/subscriptionsplans/useSubPlanQuery";
import useUtilQuery from "../../store/util/useUtilQuery";
import * as Yup from "yup";
import { useFormik } from "formik";

const subscriptionEditSchema = Yup.object().shape({
  country: Yup.string(),
  name: Yup.string(),

  description: Yup.string(),
});

const initialValues = {
  country: "",
  name: "",
  description: "",
  is_active: false,
};

function EditPlan({ show, handleClose, id }) {


  const { data: subscriptionPlansDataDetails } =
  useSubscriptionPlansQuery.Plan_details(id);

  useEffect(()=>{
  
    
  },[show])


  const { data: countriesList } = useUtilQuery.Countries_list();

  const { mutateAsync: editPlan, isSuccess } =
    useSubscriptionPlansQuery.Edit_plan();

    // const formik = useFormik({
    //   initialValues,
    //   validationSchema: subscriptionEditSchema,
    //   onSubmit: async (values, { setStatus, setSubmitting , resetForm}) => {
      
    //     try {
    //       console.log(values,"==")
    //       await editPlan({
    //         id:id,
    //           name: values?.name,
    //         country: values?.country,
            
    //         description: values?.description,
         
    //       });
    //       resetForm()
    //     } catch (error) {
    //       console.error(error);
         
    //     }
    //   },
    // });



  const [editdetails, setEditDetails] = useState({
    id: null,
    country: "",
    name: "",
    description: "",
  });

  // const handleChange = (e) => {
  //   if (e.target.name === "country") {
  //     const selectedCountry = countriesList?.data?.results?.find(
  //       (country) => country.id === e.target.value
  //     );
  //     setEditDetails({
  //       ...editdetails,
  //       id: e.target.value,
  //       country: e.target.value,
  //       name: selectedCountry?.name || "",
  //     });
  //   } else {
  //     setEditDetails({ ...editdetails, [e.target.name]: e.target.value });
  //   }
  // };

  const handleChange = (e) =>{
    setEditDetails({...editdetails, [e.target.name]:e.target.value})

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(editdetails);

    try{
    await editPlan({
      id:id,
      name:editdetails.name,
      country:editdetails.country,
      description:editdetails.description
    })
    }catch(err){
      console.log(err)
    }
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Form className="p-5" onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Country</Form.Label>

                <Form.Select
           onChange={(e)=>handleChange(e)} value={editdetails.country} name="country"
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
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onChange={(e)=>handleChange(e)} value={editdetails.name} name="name"
                  placeholder="name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  placeholder="description"
                  onChange={(e)=>handleChange(e)} value={editdetails.description} name="description"
                  
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

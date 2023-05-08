import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";


function EditStaff({ handleClose, show }) {

const [shops,setShops] = useState(true) 

const handleChange = (data) =>{
  if(data === "shops"){
    if(shops == true){
      console.log( shops,"data")
    }
    setShops(!shops)
  }
}

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Form className="p-5">
          <Modal.Header closeButton>
            <Modal.Title>Edit </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" required name="file" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Staff Name</Form.Label>
              <Form.Control placeholder="StaffName" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Staff Email</Form.Label>
              <Form.Control placeholder="StaffEmail" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Staff Role</Form.Label>
              <Form.Control placeholder="StaffEmail" />
            </Form.Group>
            <h4 >
           Permissions
              </h4>
            <Form.Check className="form-check mb-3 mt-3">
              <Form.Check.Input type="checkbox" id="customCheck1" value={shops} onChange={()=>handleChange("shops")} />
              <Form.Check.Label htmlFor="customCheck1">
             Shops
              </Form.Check.Label>
            </Form.Check>
            <Form.Check className="form-check mb-3">
              <Form.Check.Input type="checkbox" id="customCheck1" />
              <Form.Check.Label htmlFor="customCheck1">
              Users
              </Form.Check.Label>
            </Form.Check>
            <Form.Check className="form-check mb-3">
              <Form.Check.Input type="checkbox" id="customCheck1" />
              <Form.Check.Label htmlFor="customCheck1">
             Subscriptions and Renewal List
              </Form.Check.Label>
            </Form.Check>

            <Form.Check className="form-check mb-3">
              <Form.Check.Input type="checkbox" id="customCheck1" />
              <Form.Check.Label htmlFor="customCheck1">
         Staff Hr
              </Form.Check.Label>
            </Form.Check>
            <Form.Check className="form-check mb-3">
              <Form.Check.Input type="checkbox" id="customCheck1" />
              <Form.Check.Label htmlFor="customCheck1">
         Accounting
              </Form.Check.Label>
            </Form.Check>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

export default EditStaff;

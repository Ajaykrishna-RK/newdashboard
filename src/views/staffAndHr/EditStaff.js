import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

function EditStaff({handleClose,show}) {
  return (
    <div>

<Modal show={show} onHide={handleClose} >
        <Form className="p-5">
          <Modal.Header closeButton>
            <Modal.Title>Edit </Modal.Title>
          </Modal.Header>
          <Modal.Body >
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
  )
}

export default EditStaff
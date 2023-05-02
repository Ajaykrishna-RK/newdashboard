import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

function Editexpense({show,handleClose}) {
  return (
    <div>

<Modal show={show} onHide={handleClose}>
        <Form className="p-5">
          <Modal.Header closeButton>
            <Modal.Title>Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Expense Source</Form.Label>
              <Form.Control placeholder="Expense Source" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Rupees</Form.Label>
              <Form.Control placeholder="Rupees" />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
         Save changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>


    </div>
  )
}

export default Editexpense
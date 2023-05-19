import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import useSubscriptionPlansQuery from '../../store/subscriptionsplans/useSubPlanQuery';

function DeletePlan({id,show,handleClose}) {


const { mutateAsync: deletePlan, isSuccess } =
useSubscriptionPlansQuery.DeletePlan();
   
const handleDelete = () =>{
deletePlan(id)
    handleClose()
}

return (
    <div>
 <Modal show={show} onHide={handleClose}>
        <Modal.Header>
        <h1> Do you Want to delete ?</h1> 
        </Modal.Header>
      
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
           Delete
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default DeletePlan
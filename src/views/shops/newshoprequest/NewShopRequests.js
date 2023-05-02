import React from 'react'
import { Button, Card } from 'react-bootstrap'
import NoData from '../../../components/partials/components/nodata/NoData'




const requests = [
    {
        companyName : 'company Name',
        companyDetials : 'company Detials'
    },
    {
        companyName : 'company Name',
        companyDetials : 'company Detials'
    }
] 



function NewShopRequests() {
  return (
    <div>
        {requests.length !==0 ? (
            <div>

{requests.map((item)=>(
    <Card>
      <Card.Header as="h5">New Request</Card.Header>
      <Card.Body>
        <Card.Title>{item.companyName}</Card.Title>
        <Card.Text>
          {item.companyDetials}
        </Card.Text>
        <div className='justify-content-end align-items-center d-flex gap-3'>
        <Button variant="primary ">Accept</Button>
        <Button  variant='outline-danger'>Decline</Button>
        </div>
        
      </Card.Body>
    </Card>
))}
            </div>

        ) :(
<div>
    <NoData/>
</div>
        )
    }



    </div>
  )
}

export default NewShopRequests
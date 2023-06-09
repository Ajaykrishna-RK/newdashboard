import React, { useState } from 'react'
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap'
import EditStaff from './EditStaff';

import Swal from 'sweetalert2'


const tableth = ["Slno", "Image", "User Name" , "User Email", "role", "actions"]

const staffs = [
  {
    id:1,
    Name:"StaffName",
    image:"https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
    email:"staff@gmail.com",
    role:"HR"
  },
  {
    id:2,
    Name:"StaffName",
    image:"https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
    email:"staff@gmail.com",
    role:"Developer",
  },
  {
    id:3,
    Name:"StaffName",
    image:"https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
    email:"staff@gmail.com",
    role:"Designer"
  },
  {
    id:4,
    Name:"StaffName",
    image:"https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
    email:"staff@gmail.com",
    role:"tester"
  }
]



function StaffAndHr() {

const handleDelete = ()=>{
  Swal.fire({
    title: 'Delete!',
    text: 'Do you want to delete',
    icon: 'error',
    showCancelButton: true,
    confirmButtonText: 'delete'
  })
}



  const [editshow, setEditShow] = useState(false);

  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);




  return (
    <div>


<Table responsive="sm" className="mt-3" striped bordered>
        <thead>
        
                <tr style={{backgroundColor:"#DCDCDC"}}>
                {tableth.map((item)=>(
                    <th>{item}</th>
                    ))}
                </tr>
          

        </thead>
        <tbody>

{staffs.map((item)=>(
 <>

 <tr style={{backgroundColor:"#fff"}}>
 <td>{item.id}</td>
 <td> <img style={{width:"50px"}} src={item.image} alt=""  /> </td>
 <td>{item.Name}</td>
 <td>{item.email}</td>
 <td>{item.role}</td>
<td> 
<Button variant="primary "className="m-1"  onClick={handleEditShow}>Edit</Button>
<Button variant="primary " onClick={handleDelete}>Delete</Button>

</td>
</tr>
         
</>
))}
 
 



        
        
         
        </tbody>
      </Table>


<EditStaff handleClose={handleEditClose} show={editshow}/>


    </div>
  )
}

export default StaffAndHr
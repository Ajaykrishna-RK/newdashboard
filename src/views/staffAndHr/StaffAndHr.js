import React, { useState } from 'react'
import { Card, Col, Container, Row, Table } from 'react-bootstrap'
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
    confirmButtonText: 'delete'
  })
}



  const [editshow, setEditShow] = useState(false);

  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);




  return (
    <div>


<Table responsive="sm" className="mt-3">
        <thead>
        
                <tr>
                {tableth.map((item)=>(
                    <th>{item}</th>
                    ))}
                </tr>
          

        </thead>
        <tbody>

{staffs.map((item)=>(
 <>

 <tr>
 <td>{item.id}</td>
 <td> <img style={{width:"50px"}} src={item.image} alt=""  /> </td>
 <td>{item.Name}</td>
 <td>{item.email}</td>
 <td>{item.role}</td>
<td> 
  <button className="m-1" onClick={handleEditShow} >edit</button>
  <button onClick={handleDelete}>delete</button>
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
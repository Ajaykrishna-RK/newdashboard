import React,{useState} from 'react'
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap'
import EditUserModal from './EditUserModal';
import Swal from 'sweetalert2';


const tableth = ["Slno", "Image", "User Name" , "User Email", "actions"]





const users = [
  {
    id:1,
    Name:"UserName",
    image:"https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
    email:"user@gmail.com"
  },
  {
    id:2,
    Name:"UserName",
    image:"https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
    email:"user@gmail.com"
  },
  {
    id:3,
    Name:"UserName",
    image:"https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
    email:"user@gmail.com"
  },
  {
    id:4,
    Name:"UserName",
    image:"https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg",
    email:"user@gmail.com"
  }
]


function User() {
  const [edituser, setEditUser] = useState(false);

const handleEditClose = () => setEditUser(false);
const handleEditUser = () => setEditUser(true);


const handleDelete = ()=>{
  Swal.fire({
    title: 'Delete!',
    text: 'Do you want to delete',
    icon: 'error',
    showCancelButton: true,
    confirmButtonText: 'delete'
  })
}
  return (
    <>
    
    <Table responsive="sm" className="mt-3">
        <thead>
        
                <tr>
                {tableth.map((item)=>(
                    <th>{item}</th>
                    ))}
                </tr>
          

        </thead>
        <tbody>

{users.map((item)=>(
 <>

 <tr>
 <td>{item.id}</td>
 <td> <img style={{width:"50px"}} src={item.image} alt=""  /> </td>
 <td>{item.Name}</td>
 <td>{item.email}</td>
<td> 
<Button variant="primary "className="m-1" onClick={handleEditUser} >Edit</Button>
<Button variant="primary "onClick={handleDelete}>Delete</Button>

</td>
</tr>
         
</>
))}
 
 



        
        
         
        </tbody>
      </Table>
    
<EditUserModal show={edituser} handleClose={handleEditClose}/>

    
    </>
  )
}

export default User
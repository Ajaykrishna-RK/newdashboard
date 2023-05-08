import React,{useState} from 'react'
import { Button, Table } from 'react-bootstrap'
import Editexpense from './Editexpense'
import Addexpense from './Addexpense'



const tableth = ["Sl no", "Expense Source", "Rupees" , "actions"]

const expenseLists = [
    {
      id:1,
      expenseSource:"Expense source",
      Rupees:10000,

    },
    {
        id:2,
        expenseSource:"Expense source",
        Rupees:10000,
        
      },
      {
        id:3,
        expenseSource:"Expense source",
        Rupees:10000,
        
      },

  ]



function Expense() {

          
  const [editexpense, setEditExpense] = useState(false);

  const handleEditClose = () => setEditExpense(false);
  const handleEditShow = () => setEditExpense(true);


  const [addexpense, setAddExpense] = useState(false);

  const handleAddClose = () => setAddExpense(false);
  const handleAddShow = () => setAddExpense(true);

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
    <div>
        <div className="justify-content-end align-items-end d-flex">
        <Button variant="primary "onClick={handleAddShow}>Add Expense</Button>
         
        </div>




      <Table responsive="sm" className="mt-3">
        <thead>
          <tr>
            {tableth.map((item) => (
              <th>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenseLists.map((item) => (
            <>
              <tr>
                <td>{item.id}</td>
                
                <td>{item.expenseSource}</td>
                <td>{item.Rupees}</td>
                <td>
                <Button variant="primary " className='m-1' onClick={handleEditShow}>Edit</Button>
                <Button variant="primary " onClick={handleDelete}>Delete</Button>
                 
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>

   <Addexpense show={addexpense} handleClose={handleAddClose}/>


      <Editexpense show={editexpense} handleClose={handleEditClose}/>
    </div>
  )
}

export default Expense
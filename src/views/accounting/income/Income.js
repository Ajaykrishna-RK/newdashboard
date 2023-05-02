import React,{useState} from "react";
import { Table } from "react-bootstrap";
import AddIncome from "./AddIncome";
import EditIncome from "./EditIncome";
import Swal from "sweetalert2";

function Income() {
    const tableth = ["Sl no", "Income Source", "Rupees" , "actions"]

    const incomeLists = [
        {
          id:1,
          incomeSource:"income source",
          Rupees:10000,

        },
        {
            id:2,
            incomeSource:"income source",
            Rupees:10000,
            
          },
          {
            id:3,
            incomeSource:"income source",
            Rupees:10000,
            
          },
    
      ]


      
  const [addincome, setAddIncome] = useState(false);

  const handleAddClose = () => setAddIncome(false);
  const handleAddShow = () => setAddIncome(true);


       
  const [editincome, setEditIncome] = useState(false);

  const handleEditClose = () => setEditIncome(false);
  const handleEditShow = () => setEditIncome(true);



  const handleDelete = ()=>{
    Swal.fire({
      title: 'Delete!',
      text: 'Do you want to delete',
      icon: 'error',
      confirmButtonText: 'delete'
    })
  }
  return (
    <div>
        <div className="justify-content-end align-items-end d-flex">
            <button onClick={handleAddShow}>Add Income</button>
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
          {incomeLists.map((item) => (
            <>
              <tr>
                <td>{item.id}</td>
                
                <td>{item.incomeSource}</td>
                <td>{item.Rupees}</td>
                <td>
                  <button className="m-1" onClick={handleEditShow}>
                    edit
                  </button>
                  <button onClick={handleDelete}>delete</button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>

      <AddIncome show={addincome} handleClose={handleAddClose}/>


      <EditIncome show={editincome} handleClose={handleEditClose}/>
    </div>
  );
}

export default Income;

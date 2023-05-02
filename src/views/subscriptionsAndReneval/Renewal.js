import React from 'react'
import { Table } from 'react-bootstrap'
import Swal from 'sweetalert2';


const tableth = ["Sl No", "user name", "user email","actions"];

const renewal = [
  {
    id: 1,
    userName: "user name",
    userEmail: "user Email",
  },
  {
    id: 2,
    userName: "user name",
    userEmail: "user Email",
  },
  {
    id: 3,
    userName: "user name",
    userEmail: "user Email",
  },
];


function Renewal() {
    const handleRenewal = ()=>{
        Swal.fire({
          title: 'Success',
          text: 'successfully completed',
          icon: 'success',
          confirmButtonText: 'ok'
        })
      }
  return (
    <div>


<Table responsive="sm" className="mt-3">
        <thead>
          <tr>
            {tableth.map((item) => (
              <th>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {renewal.map((item) => (
            <>
              <tr>
                <td>{item.id}</td>

                <td>{item.userName}</td>
                <td>{item.userEmail}</td>
                <td>
                    <button onClick={handleRenewal}>Add Renewal</button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Renewal
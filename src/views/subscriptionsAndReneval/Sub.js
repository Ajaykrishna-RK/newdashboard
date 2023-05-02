import React from 'react'
import { Table } from 'react-bootstrap';




const tableth = ["Sl No", "user name", "user email"];

const subs = [
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


function Sub() {
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
          {subs.map((item) => (
            <>
              <tr>
                <td>{item.id}</td>

                <td>{item.userName}</td>
                <td>{item.userEmail}</td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Sub
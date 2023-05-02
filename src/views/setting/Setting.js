import React, { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import EditSetting from "./EditSetting";


const ths = ["Sl no", "Icon", "Location","Edit"];
const datas = [
  {
    id: 1,
    icon: "image",
    location: "company location",
    edit:"Edit Icon"
  },
  {
    id: 2,
    icon: "image",
    location: "company location",
    edit:"Edit Icon"
  },
  {
    id: 3,
    icon: "image",
    location: "company location",
    edit:"Edit Icon"
  },
];

function Setting() {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
      <Table responsive="md" striped bordered>
        <thead>
          <tr>
            {ths.map((item) => (
              <th>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
         
            {datas.map((item) => (
               <tr>
                <td>{item.id}</td>
                <td>
                  {item.icon}
                  </td>
                <td>{item.location}</td>
                <td style={{cursor:"pointer"}}><button onClick={handleShow}>
      Edit
      </button></td>
                </tr>
            ))}
          
        </tbody>
      </Table>


      <EditSetting handleClose={handleClose} show={show}/>

     
    </div>
  );
}

export default Setting;

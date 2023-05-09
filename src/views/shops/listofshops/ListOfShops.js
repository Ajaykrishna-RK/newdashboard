import React,{useState} from 'react'
import { Button, Table } from 'react-bootstrap'
import { Tabledata } from './tableDatas'
import NoData from '../../../components/partials/components/nodata/NoData'
import AddShop from '../addnewShop/AddShop'

function ListOfShops({modal,setModal}) {
 

const tableth = ["Sl no","Name","Business address","Contact details","Products and services","Images","Profile","Subscriptions"] 



  return (
    <div>




  <div>
<div className="justify-content-end align-items-end d-flex mt-2">
<Button variant="primary " onClick={()=>setModal(true)}>AddShop</Button>

</div>
<Table responsive="sm" className="mt-3" striped bordered>
        <thead>
        
                <tr style={{backgroundColor:"#DCDCDC"}}>
                {tableth.map((item)=>(
                    <th>{item}</th>
                    ))}
                </tr>
          

        </thead>
        <tbody>


{Tabledata.length !== 0 ? (
  <>
   {Tabledata.map((item)=>(
    <tr style={{backgroundColor:"#fff"}}>
    <td>{item.id}</td>
    <td>{item.Name}</td>
    <td>{item.Businessaddress}</td>
    <td>{item.Contactdetails}</td>
    <td>{item.Productsandservices}</td>
    <td>{item.Images}</td>
    <td>{item.Profile}</td>
    <td>{item.Subscriptions}</td>
  </tr>
            ))}
  </>
 
):(
  <div >
 <NoData/>
  </div>

)
}

        
        
         
        </tbody>
      </Table>

  </div>
  





    </div>
  )
}

export default ListOfShops
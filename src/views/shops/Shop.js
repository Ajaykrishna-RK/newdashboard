import React, { Fragment, useState } from 'react'
import {  Tab, Tabs } from 'react-bootstrap'
import ListOfShops from './listofshops/ListOfShops';
import AddShop from './addnewShop/AddShop';
import NewShopRequests from './newshoprequest/NewShopRequests';




function Shop() {

  const [modal,setModal] = useState(false)

  return (
    <div>
       <Fragment>
     
{modal ? <AddShop setModal={setModal}/> : <Tabs
      defaultActiveKey="shoplist"
      id="uncontrolled-tab-example"
      className="mb-3 justify-content-start"
    >
      <Tab eventKey="shoplist" title="ShopList">
       <ListOfShops modal={modal} setModal={setModal}/>
      </Tab>
      <Tab eventKey="newshoprequests" title="New Shop Requests">
        <NewShopRequests/>
      </Tab>
      
    </Tabs>  }
            
              
      
           
    </Fragment>



    </div>
  )
}
Shop.displayName = "Shop";
export default Shop
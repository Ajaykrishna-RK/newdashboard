import React, { Fragment } from 'react'
import {  Tab, Tabs } from 'react-bootstrap'
import ListOfShops from './listofshops/ListOfShops';
import AddShop from './addnewShop/AddShop';
import NewShopRequests from './newshoprequest/NewShopRequests';


function Shop() {
  return (
    <div>
       <Fragment>
     
        
            <Tabs
      defaultActiveKey="shoplist"
      id="uncontrolled-tab-example"
      className="mb-3 justify-content-start"
    >
      <Tab eventKey="shoplist" title="ShopList">
       <ListOfShops/>
      </Tab>
      <Tab eventKey="newshoprequests" title="New Shop Requests">
        <NewShopRequests/>
      </Tab>
      
    </Tabs>
              
      
           
    </Fragment>



    </div>
  )
}
Shop.displayName = "Shop";
export default Shop
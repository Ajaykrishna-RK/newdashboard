import React from "react";
import { Tab, Table, Tabs } from "react-bootstrap";
import Sub from "./Sub";
import Renewal from "./Renewal";



function Subscription() {
  return (
    <div>
     <Tabs
      defaultActiveKey="subscriptions"
      id="uncontrolled-tab-example"
      className="mb-3 justify-content-start"
    >
      <Tab eventKey="subscriptions" title="Subscriptions">
    <Sub/>
      </Tab>
      <Tab eventKey="renewals" title="Renewals">
      <Renewal/>
      </Tab>
      
    </Tabs>
    </div>
  );
}

export default Subscription;

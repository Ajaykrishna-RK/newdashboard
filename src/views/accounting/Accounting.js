import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import Income from './income/Income'
import Expense from './expense/Expense'

function Accounting() {
  return (
    <div>

   
<Tabs
      defaultActiveKey="income"
      id="uncontrolled-tab-example"
      className="mb-3 "
    >
      <Tab eventKey="income" title="Income">
<Income/>
      </Tab>
      <Tab eventKey="expenses" title="Expenses">
<Expense/>
      </Tab>
      
    </Tabs>


    </div>
  )
}

export default Accounting
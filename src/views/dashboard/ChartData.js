import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import { ChartTwo } from './chart/ChartTwo'

function ChartData() {
  return (
    <div>

<Container>
  <Row>
    <Col xs={12} md={6}>
    <ChartTwo/>
    </Col>
    <Col xs={12} md={6}>
      <ChartTwo/>
    </Col>
  </Row>
</Container>


    </div>
  )
}

export default ChartData
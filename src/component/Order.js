import React from 'react'
import { Container, Row, Tab, Tabs } from 'react-bootstrap'
import Myorders from './Myorders'

function Order() {
  return (
    <div>
        <Container>
            <Row>
                <Tabs defaultActiveKey="Pending">
                    <Tab eventKey="Pending" title="Pending">
                        <Myorders orderStatus="Pending"/>
                    </Tab>
                    <Tab eventKey="Approve" title="Approve">
                        <Myorders orderStatus="Approve"/>
                    </Tab>
                    <Tab eventKey="Dispatch" title="Dispatch">
                        <Myorders orderStatus="Dispatch"/>
                    </Tab>
                    <Tab eventKey="Intransit" title="Intransit">
                        <Myorders orderStatus="Intransit"></Myorders>
                    </Tab>
                    <Tab eventKey="Delivered" title="Delivered">
                        <Myorders orderStatus="Delivered"/>
                    </Tab>
                    <Tab eventKey="Cancel" title="Cancel">
                        <Myorders orderStatus="Cancel"/>
                    </Tab>
                </Tabs>
            </Row>
        </Container>
    </div>
  )
}

export default Order;
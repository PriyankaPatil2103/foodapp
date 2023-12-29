import React, { useState } from 'react'
import { Button, Col, Container, Form , Row} from 'react-bootstrap'

function Registraion() {
  const[CustomerName,setCustomername]=useState()
  const [Email,setEmail]=useState()
  const [MobileNo,setMobileNo]=useState()
  const [Address,setAddress]=useState()
  const [Password,setPassword]=useState()

  return (
    <div>
        <Form>
          <Container>
          <Row>
            <Form.Group>
              <Form.Label>Customer Name</Form.Label>
              <Form.Control type='Text' placeholder='Enter your name' 
              onChange={(e)=>setCustomername(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type='Email' placeholder='Enter your Email' 
            onChange={(e)=>setEmail(e.target.value)}></Form.Control>
            </Form.Group>
            
            <Form.Group>
              <Form.Label>Mobile No</Form.Label>
              <Form.Control type='Number' placeholder='Enter your mobile number' 
              onChange={(e)=>setMobileNo(e.target.value)} ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control type='Text' placeholder='Enter your address'
              onChange={(e)=>setAddress(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type='Password' placeholder='Enter your Password' 
              onChange={(e)=>setPassword(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group>
              <Button>Register</Button>
            </Form.Group>

            </Row>
            <Row>
              <Col><h4>{CustomerName}</h4></Col>
              <Col><h4>{Email}</h4></Col>
              <Col><h4>{MobileNo}</h4></Col>
              <Col><h4>{Address}</h4></Col>
              <Col><h4>{Password}</h4></Col>
            </Row>
          </Container>
        </Form>
    </div>
  )
}

export default Registraion
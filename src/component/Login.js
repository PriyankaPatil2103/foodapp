import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

function Login() {
  const [Email,setEmail]=useState()
  const [Password,setPassword]=useState()
  return (
    <div>
      <Container>
          <Row>
      <Form>
        
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type='Email' placeholder='Enter your Email'
          onChange={(e)=>setEmail(e.target.value)}></Form.Control>

        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type='Password' placeholder='Enter your Password'
          onChange={(e)=>setPassword(e.target.value)}></Form.Control>
        </Form.Group>
        
          <Form.Group>
          <Button>Login</Button>
          </Form.Group>
          </Form>

        </Row>
        <Row>
          <Col><h3>{Email}</h3></Col>
          <Col><h3>{Password}</h3></Col>
        </Row>

        </Container>      
        
    </div>
  )
}

export default Login
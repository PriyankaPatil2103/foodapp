import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login() {
  const [CustomerEmail, setCustomeremail] = useState("");
  const [CustomerPassword, setCustomerpassword] = useState("");
  const navi = useNavigate();

  const addlogin = () => {
    const login = {
      CustomerEmail: CustomerEmail,
      CustomerPassword: CustomerPassword,
    };
    axios
      .post("http://localhost:5000/api/dologin", login)
      .then((result) => {
        console.log("DATA", result.data);
        if (result.data.success) {
          alert("Login Successfully");
          navi("/");
        } else {
          alert("Login Fail");
        }
        //window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Container>
        <Row>
          <Form>
            <Form.Group>
              <Form.Label>Customer Email</Form.Label>
              <Form.Control
                type="Email"
                placeholder="Enter your Email"
                onChange={(e) => setCustomeremail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Customer Password</Form.Label>
              <Form.Control
                type="Password"
                placeholder="Enter your Password"
                onChange={(e) => setCustomerpassword(e.target.value)}
              ></Form.Control>
            </Form.Group>

           <Form.Group>
              <Button onClick={() => addlogin()}>Login</Button>
            </Form.Group>
          </Form>
        </Row>
        <Row>
          <Col>
            <h3>{CustomerEmail}</h3>
          </Col>
          <Col>
            <h3>{CustomerPassword}</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;

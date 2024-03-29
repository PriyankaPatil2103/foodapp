import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row ,Image} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { login } from "../reduxwork/UserSlice";
import { useDispatch } from "react-redux";
import pizza from '../images/pizza.jpg';


function Login() {
  const dispatcher = useDispatch();
  const [CustomerEmail, setCustomeremail] = useState("");
  const [CustomerPassword, setCustomerpassword] = useState("");
  const navi = useNavigate();

  const addlogin = () => {
    const logindata = {
      CustomerEmail: CustomerEmail,
      CustomerPassword: CustomerPassword,
    };
    axios
      .post("http://localhost:5000/api/dologin", logindata)
      .then((result) => {
        console.log("DATA", result.data);
        if (result.data.success) {
          dispatcher(login(result.data.data))
          //alert("Login Successfully");
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
          <Col>
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
          </Col>
          <Col>
          <Image src={pizza}></Image>
          </Col>
         
        </Row>
      </Container>
    </div>
  );
}

export default Login;

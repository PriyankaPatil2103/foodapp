import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row , Image } from "react-bootstrap";
import { register } from "../reduxwork/UserSlice";
import { useDispatch } from "react-redux";
import bbc from '../images/bbc.jpg'

function Registraion() {
  const [CustomerName, setCustomername] = useState();
  const [CustomerEmail, setCustomeremail] = useState();
  const [CustomerMobileNo, setCustomermobno] = useState();
  const [CustomerAddress, setCustomeraddress] = useState();
  const [CustomerPassword, setCustomerpassword] = useState();
  const [CustomerCity, setCustomercity] = useState();

  const dispathcer = useDispatch();

  const addCust = () => {
    const cust = {
      CustomerName: CustomerName,
      CustomerAddress: CustomerAddress,
      CustomerMobNo: Number(CustomerMobileNo),
      CustomerCity: CustomerCity,
      CustomerPassword: CustomerPassword,
      CustomerEmail: CustomerEmail,
    };

    axios
      .post("http://localhost:5000/api/addcustomer", cust)
      .then((result) => {
        console.log("DATA", result.data);

        alert("Registration Success");
        dispathcer(register(result.data));
        //window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Form>
        <Container>
          <Row>
            <Col>
            <Form.Group>
              <Form.Label>Customer Name</Form.Label>
              <Form.Control
                type="Text"
                placeholder="Enter your name"
                onChange={(e) => setCustomername(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Customer Email</Form.Label>
              <Form.Control
                type="Email"
                placeholder="Enter your Email"
                onChange={(e) => setCustomeremail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>CustomerMobNo</Form.Label>
              <Form.Control
                type="Text"
                placeholder="Enter your mobile number"
                onChange={(e) => setCustomermobno(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>CustomerAddress</Form.Label>
              <Form.Control
                type="Text"
                placeholder="Enter your address"
                onChange={(e) => setCustomeraddress(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>CustomerCity</Form.Label>
              <Form.Control
                type="Text"
                placeholder="Enter customers city"
                onChange={(e) => setCustomercity(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>CustomerPassword</Form.Label>
              <Form.Control
                type="Password"
                placeholder="Enter your Password"
                onChange={(e) => setCustomerpassword(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Button onClick={() => addCust()}>Register</Button>
            </Form.Group>
            </Col>
            <Col>
              <Image src={bbc}/>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
}

export default Registraion;

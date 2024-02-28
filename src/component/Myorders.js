import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Myorders({orderStatus}) {
  const [ordersData, setordersData] = useState([]);
  const { UserData } = useSelector((state) => state.user);
  const navi = useNavigate();
 
  const clientorder={
    CustId:UserData._id,
    OrderStatus:orderStatus
  };

  useEffect(() => {
    axios
      .post("http://localhost:5000/api/getorderbycustid",clientorder)
      .then((result) => {
        console.log("DATA", result.data);
        setordersData(result.data);
      })
      .catch((err) => {});

  }, []);

  return (
    <div>
      <h3>orders</h3>
      <Container>
        <Row>
          {ordersData.map((order, index) => {
            return (
              <Col sm={12} md={6} lg={3} key={index}>
                <Card>
                  <Card.Title>{order.OrderDate}</Card.Title>
                  <Card.Text>{order.OrderTotal}</Card.Text>
                  <Card.Text>{order.OrderSize}</Card.Text>
                  <Card.Text>{order.OrderStatus}</Card.Text>
                  <Card.Footer>
                    <Button onClick={() => navi(`/OrderDetails/${order._id}`)}>
                      Details
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Myorders;

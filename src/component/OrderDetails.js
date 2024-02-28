import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function OrderDetails() {
  const { OrderId } = useParams();
  const [orderData, setorderData] = useState({});

  useEffect(() => {
    const orData = {
      OrderId: OrderId,
    };
    axios
      .post("http://localhost:5000/api/getorderbyid", orData)
      .then((result) => {
        setorderData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, {});
  const orderstatus=()=>{
    const ordered={
      oid:OrderId,
      OrderStatus:'Cancel'
    }
    axios.post("http://localhost:5000/api/updateOrderStatus",ordered)
    .then((result) => {
      console.log('Data',result)
      window.location.reload(false)
    }).catch((err) => {
      
    });
  }
  return (
    <div>
      OrderDetails
      <h3>{OrderId}</h3>
      <Container>
        <Row>
          <h3>Cust Details</h3>
          <h4>{orderData?.CustId?.CustomerName}</h4>
          <h4>{orderData?.CustId?.CustomerMobNo}</h4>
        </Row>
        <Row>
          <h3>Order Items</h3>
          {orderData?.OrderItems?.map((items) => {
            return (
              <Col>
                <Card>
                  <Card.Img src={`http:/localhost:5000${items.FoodId.FoodImg}`}></Card.Img>
                  <Card.Text>{items.FoodId.FoodName}</Card.Text>
                  <Card.Text>{items.Qty}</Card.Text>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Row>
          <Button onClick={()=>orderstatus}>
            Cancel
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default OrderDetails;

import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, decrementQty, incrementQty } from "../reduxwork/CartSlice";
import axios from "axios";

function Cart() {
  const { CartItems } = useSelector((state) => state.cart);
  const { UserData } = useSelector((state) => state.user);
  const dispatcher = useDispatch();

  const addOrder = () => {
    const finalItems = [];
    CartItems.map((items) => {
      finalItems.push({
        FoodId: items._id,
        Qty: items.Qty,
      });
    });

    const orderData = {
      OrderTotal: 0,
      OrderSize: CartItems.length,
      CustId: UserData._id,
      OrderItems: finalItems,
    };

    axios
      .post("http://localhost:5000/api/addorder", orderData)
      .then((result) => {
        alert("Order Placed");
        dispatcher(clearCart());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Container>
        <Row>
          {CartItems.map((food) => {
            const iid = food._id;
            return (
              <Col sm={12} md={6} lg={3}>
                <Card>
                  <Card.Img
                    className="crd-image"
                    src={`http://localhost:5000${food.FoodImg}`}
                  />
                  <div className="content"></div>
                  <Card.Title>{food.FoodName}</Card.Title>
                  <Card.Text>{food.FoodCategory}</Card.Text>
                  <Card.Text>Qty:{food.Qty}</Card.Text>
                  <Card.Text>{food.FoodPrice}</Card.Text>
                  <Card.Footer>
                    <Button onClick={() => dispatcher(incrementQty({ iid }))}>
                      +
                    </Button>
                    <h4>{food.Qty}</h4>
                    <Button onClick={() => dispatcher(decrementQty({ iid }))}>
                      -
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Button onClick={() => addOrder()}>Place Order</Button>
      </Container>
    </div>
  );
}

export default Cart;

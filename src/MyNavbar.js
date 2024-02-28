import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function MyNavbar() {
  const { ItemCount } = useSelector((state) => state.cart);
  return (
    <div>
      <Navbar collapseOnSelect variant="dark" bg="dark" expand="lg">
        <Container>
          <Navbar.Brand>My NavBar</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-nav-bar"></Navbar.Toggle>
          <Navbar.Collapse id="responsive-nav-bar">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about">About</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact">Contact</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Profile">Profile</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Myorders">MyOrders</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/OrderDetails">OrderDetails</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Order">Order</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Cart">Cart {ItemCount}</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Login">Login</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Registration">Registeration</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;

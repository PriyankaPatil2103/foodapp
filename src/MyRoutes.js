import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Profile from "./component/Profile";
import Myorders from "./component/Myorders";
import Cart from "./component/Cart";
import Login from "./component/Login";
import Registration from "./component/Registraion";
import MyNavbar from "./MyNavbar";
import OrderDetails from "./component/OrderDetails";
import Order from "./component/Order";

function MyRoutes() {
  return (
    <div>
      <Router>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Myorders" element={<Myorders />}></Route>
          <Route path="/OrderDetails" element={<OrderDetails/>}></Route>
          <Route path="/Order" element={<Order/>}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Registration" element={<Registration />}></Route>
          <Route
            path="/OrderDetails/:OrderId"
            element={<OrderDetails />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default MyRoutes;

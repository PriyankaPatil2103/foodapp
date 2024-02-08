import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Row, Card, Col, Button} from 'react-bootstrap';
import { addItem } from '../reduxwork/CartSlice';
import { useDispatch } from 'react-redux';


function Home() {
  const [foodData,setfoodData]=useState([]);
  const dispatcher=useDispatch();


  useEffect(() => {
    axios.get("http://localhost:5000/api/getallfood")
    .then((result) => {
      console.log("DATA",result.data);
      setfoodData(result.data);
    }).catch((err) => {});
    
  }, [])

  return(
    <div>
      <Container fluid className='home'>
        <Row>
          {foodData.map((food)=>{
            return (
              <Col sm={12} md={6} lg={3}>
                <Card>
                  <Card.Img className='crd-image' src={`http://localhost:5000${food.FoodImg}`} />
                  <div className='content'>
                  <Card.Title>{food.FoodName}</Card.Title>
                  <Card.Text>{food.FoodCategory}</Card.Text>
                  <Card.Text>{food.FoodPrice}</Card.Text>
                  </div>
                  <Card.Footer>
                  <Button onClick={()=>dispatcher(addItem(food))}>
                    Add to Cart</Button>
                  </Card.Footer>
                </Card>
              </Col>
            );

          })}
        </Row>
      </Container>
    </div>
  )
  
}

export default Home;
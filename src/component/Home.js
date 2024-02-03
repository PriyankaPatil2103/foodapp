import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container, Row, Card, Col} from 'react-bootstrap';

function Allfood() {
  const [foodData,setfoodData]=useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/getallfood")
    .then((result) => {
      console.log("DATA",result.data);
      setfoodData(result.data);
    }).catch((err) => { });
    
  }, [])

  return(
    <div>
      <Container>
        <Row>
          {foodData.map((food)=>{
            return (
              <Col sm={12} md={6} lg={3}>
                <Card>
                  <Card.Img className='crd-image' src={`http://localhost:5000${food.FoodImg}`} />
                  <Card.Title>{food.FoodName}</Card.Title>
                  <Card.Text>{food.FoodCategory}</Card.Text>
                  <Card.Text>{food.FoodPrize}</Card.Text>
                </Card>
              </Col>
            );

          })}
        </Row>
      </Container>
    </div>
  )
  
}

export default Allfood
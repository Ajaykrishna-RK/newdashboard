import { useState, useEffect, memo, Fragment } from "react";
import { Row, Col,Card, Container } from "react-bootstrap";


import { useSelector, useDispatch } from "react-redux";
//swiper
import SwiperCore, { Navigation } from "swiper";
import { useHistory } from "react-router-dom";
import  ChartData  from "./ChartData";


// install Swiper modules
SwiperCore.use([Navigation]);

const Index = memo((props) => {
  const dispatch = useDispatch();


const dashboardDatas = [
  {
    title:"Visted",
    count : 10000 
  },
  {
    title:"Liked",
    count : 1000 
  },
  {
    title:"Called",
    count : 200 
  },
  {
    title:"New Subscriptions",
    count : 100 
  },
  
]


  return (
    <Fragment>
      <Row>
        <Col>
          <div className="d-flex justify-content-center align-items-center flex-wrap mb-4 gap-4">
          {dashboardDatas.map((item)=>(
            <div className="d-flex flex-column">
        
      <Card style={{ width: '20rem'}}  >
      <Card.Body className="text-center">
        <Card.Title>{item.title}</Card.Title>
       
        <Card.Text>
       {item.count}+
        </Card.Text>
       
      </Card.Body>
    </Card>
              
      
            </div>
            ))}
          </div>
        </Col>
        
      </Row>
      <ChartData/>
    </Fragment>
  );
});

Index.displayName = "Index";
export default Index;

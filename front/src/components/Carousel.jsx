import React from 'react';
import { Row } from 'react-bootstrap/';
import {Col} from 'react-bootstrap/';
import { Image} from 'react-bootstrap/'
import { Button } from 'react-bootstrap/';
import {Container} from 'react-bootstrap/';
import purpleBack from '../assests/purpleBack.jpeg';
import '../Styles/CardStyle.css';



function Carousel ({data}) {
  return (
    <div id="work-container" className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <img src={data.image} fluid></img>
        </div>
        <div className="col-md-8">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <h5>{data.tools}</h5>

        <Row> 
                  <Col className="d-flex justify-content-start">
                      <div className="py-3"> 
                          <a href={data.link}target="_blank">
                          <Button size="sm" variant="success">DEMOを見る</Button>
                          </a>
                      </div>
                  </Col>
              </Row>




        </div>
      </div>


    </div>

  );
};

    
export default Carousel;

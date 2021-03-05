import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props){ 

    return(
        <Jumbotron className="bg-transparent jumbotron-fluid">
        <Container>
        <Row>
        <Col md={7} sm={10}>
        {props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>}
        {props.subtitle}
        </Col>
        </Row>
        
        </Container>
        </Jumbotron>


    )
}

export default Hero;
import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';
import zoological from '../assests/zoological.png';
import quoteApi from '../assests/quoteApi.png';
import kenkobook from '../assests/kenkobook.png';
import kishimoto from '../assests/kishimoto.png';
import Button from 'react-bootstrap/Button';

const Works =(props)=>{
return( 
<div style={{marginTop:"3rem", marginBottom:"2rem"}}>
  <Container style={{display:"flex", justifyContent:"center", marginTop: "2rem"}}> 
     <Row className="text-center" >
        <Col xs={12}md={6}lg={6}>
        <Image src={zoological} thumbnail style={{marginTop:"1rem"}}/> 
        </Col>
        <Col xs={12} md={6} lg={6} style={{marginTop:"1rem"}}> 
        <h2>動物園Zoological</h2>
        <p>スマートフォン、タブレットやパソコンを対応しているWebサイト</p>
        <Card.Title style={{textAlign: "center"}}>使用ツール</Card.Title>
  <ListGroup variant="flush" style={{textAlign:"center"}}>
  <ListGroup.Item>HTML5/CSS3</ListGroup.Item>
  <ListGroup.Item>ILLUSTRATOR</ListGroup.Item>
  <ListGroup.Item>JavaScript</ListGroup.Item>
  <ListGroup.Item>JQuery</ListGroup.Item>
</ListGroup>
        <Button style={{display:'block', marginRight:'auto', marginLeft:'auto'}} variant="info">確認する</Button>
        </Col>
        </Row>
    </Container>

 
</div>
    )
}

export default Works;
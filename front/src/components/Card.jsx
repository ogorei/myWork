import React, { Component} from 'react';
import '../Styles/CardStyle.css';
import {Spring} from 'react-spring/renderprops';
import {Card} from 'react-bootstrap/';
import {Container} from 'react-bootstrap/';
import { Button} from 'react-bootstrap/';
import quoteApi from '../assests/quoteApi.png';
import Image from 'react-bootstrap/Image';

export default function Card1() {

//add props to the component to be able to reuse 3 of them on the project page
return (
  <Spring
    from={{ opacity: 0 }}
    to={{ opacity: 1 }}
    config={{ delay: 1000, duration: 1000 }}
  >
    {(props) => (
      <div style={props}>
        <div id="quoteApi">
          <Card className="text-center mb-5" style={{background:"none", color:"#000", border:"none"}}>
          <Card.Title style={{color:"#000", fontSize:"3em", fontWeight: "bold", textAlign:'center'}}>Daily Quote API</Card.Title>
            <Container> 
              <Image src={quoteApi} fluid/>
                    <Card.Text >
                      名言で毎日２秒の英語読解Challenge！
                    </Card.Text>
                    <Button variant="info">確認する</Button>
            </Container>
          </Card>
        </div>
      </div>
    )}
  </Spring>


);
}

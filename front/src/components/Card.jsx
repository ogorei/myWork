import React, { Component} from 'react';
import '../Styles/CardStyle.css';
import {Spring} from 'react-spring/renderprops';
import {Card} from 'react-bootstrap/';
import {Row} from 'react-bootstrap/';
import {Col} from 'react-bootstrap/';
import {Container} from 'react-bootstrap/';
import {CardGroup} from 'react-bootstrap/';
import { Button} from 'react-bootstrap/';
import quoteApi from '../assests/quoteApi.png';
import kishimoto from '../assests/kishimoto.png';
import zoological from '/Users/suzurei/Documents/PortfolioReact/myWork/front/src/assests/zoological.png';
import kenkobook from '/Users/suzurei/Documents/PortfolioReact/myWork/front/src/assests/kenkobook.png';
import CardLayout from './CardLayout';
import Image from 'react-bootstrap/Image';
import style from './Styles/style.css';

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

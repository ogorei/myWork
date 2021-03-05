import React from 'react';
import { Card } from 'react-bootstrap/';
import { Button } from 'react-bootstrap/';
import {Spring} from 'react-spring/renderprops';
import presentation from '../assests/Presentation -1.png';
import github from '../assests/github.png';
import reina from '../assests/reinaSu.png';
import '../Styles/CardStyle.css';


const Carousel = ()=>{

  const cardBackground={
    width: "20rem",
    margin:"1rem",
    border:'none',
    textAlign:'center', 
    boxShadow:'-4px, -4px, 10px, 0px #000', 
    backgroundColor: '#dbceb0'
  }

    const cardContent= [
        {image:reina, title: "ABOUT ME", subtitle:"学歴や今までのキャリアについて確認"},
        {image:presentation, title:"WORKS", subtitle: "デザイナーとしての活躍", link:"https://www.behance.net/reinasuzuki/projects"},
        {image:github, title:"CONTRIBUTIONS", subtitle: "オープンソースへの貢献", link:"https://github.com/reinasuzu"}
    ]

    const renderCard= (card, index)=>{
    return(
        <div>
        <Card style={cardBackground} key={index}>
        <Card.Header as="h5" style={{border: '1px solid #dbceb0', backgroundColor:'#454140', color:"#fff", padding:"2rem", marginTop: "0"}}>{card.title}</Card.Header>  
        <Card.Body>
            <Card.Img style={{margin:"0", padding:"0"}} src="holder.js/100px180" src={card.image}/>
            <Card.Text style={{marginTop:"1rem", color:"#fff"}}>
              {card.subtitle}
            </Card.Text>
            <Button href={card.link} variant="light">More</Button> 
          </Card.Body>
        </Card>
      </div>
    )
    }

    return (
  <Spring 
    from={{opacity: 0, marginTop:-500}}
    to= {{opacity: 1, marginTop: 0}} >
    {props =>(   
      <div style={props} className="main-card" key={cardContent.title}>
      {cardContent.map(renderCard)}
      </div>
    
         )}
    
  </Spring>

    )}
export default Carousel;

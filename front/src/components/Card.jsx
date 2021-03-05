import React from 'react';
import {useState} from 'react';
import github from '../assests/github.png';
import presentation from '../assests/Presentation -1.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../Styles/CardStyle.css';

export default function Card(){ 
    //information to display
    let cardInfo= [
        {id: 0, title: 'F.Ds', subtitle:'Web Developer', source:presentation},
        {id: 1, title: 'Behance Projects', subtitle:'Common', source:presentation},
        {id: 2, title: 'GithubCommits', source: github}]
    
    const[isShown, setIsShown] = useState(false) 

    let profileInfo = cardInfo.map((item)=>{
        return <img className="image" key={item} src={item.source}></img>
    }) 
 
    return(

        <Container fluid={true}>   
        <Row>
        <div className="g-card">
        {profileInfo}
        </div> 

     {  /*  {cardInfo.map((item)=>
            (<CardInfo key={item} title={item.title} subtitle={item.subtitle} img src={item.source}></CardInfo>))}
 */}

        </Row>
        </Container>
    
)}
import React from 'react';

const CardInfo =(props)=>{

    return(
   <div className="g-card">
   <h1>{props.title}</h1>
   <p>{props.subtitle}</p>
   <img className="g-card img"src={props.source} alt={props.subtitle}></img>
   </div>

  )
}

export default CardInfo;
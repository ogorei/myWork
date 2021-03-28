import React from 'react';
import Hero from '../components/Hero';
import CardLayout from '../components/CardLayout';


function Homepage(props){ 
    
    
    return(
        <div>
        <Hero title={props.title} subtitle={props.subtitle}/>
        <CardLayout />
        </div>);



}

export default Homepage;
import React from 'react';
import Hero from '../components/Hero';
import Works from '../components/Works';
import Card1 from '../components/Card';
import Carousel from '../components/Carousel';
import SmallProject from '../components/SmallProject';


function Projects (props){ 

  const cardBackground={
    backgroundColor:'#323232',
    margin: '10px'
  }

    return ( 
 <div>
   <Hero title={props.title} description={props.subtitle} />
   <SmallProject />
   

</div>

    )};
  

export default Projects;

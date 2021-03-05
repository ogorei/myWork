import React from 'react';

const Skills =(props)=>{
    return(
        
        <div className="skills-card">
        <h3>{props.heading}</h3>
        <section>
        <p>{props.content}</p></section>
        </div>
    
    )
}

export default Skills;
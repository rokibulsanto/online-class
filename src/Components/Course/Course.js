import React from 'react';
import style from './Course.css'

const Course = (props) => {
    console.log(props);
    const {title,price,image,Language,Instractor} = props.item;
    
    
    return (
        <div className="courseStyle">
             <img style={{height:'350px',width:'600px'}} src={image} alt=""/>
            <h1>Course Name: {title}</h1>
            <h2>Price: ${price} </h2>
            <h3>Language: {Language}</h3>
            <p>Instractor name: {Instractor}</p>
            <button className="btn btn-success" onClick={()=>props.handleClick(props.item)}>Enroll Now</button>
        </div>
          
    );
};

export default Course;
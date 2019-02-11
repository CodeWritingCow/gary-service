import React from 'react';

function Event ({props}) {
    // console.log(props);
    
    return (
        <div className="event">
            <img src={props.image_url} width="300px" alt="Photo" />
            <h3>{props.name}</h3>
            <p>{props.category}</p>
            <p>Price: ${props.price}</p>
            <p>Rating: {props.rating}</p>
            <p>Reviews: {props.reviews_count}</p>
        </div>
    );
}

export default Event;
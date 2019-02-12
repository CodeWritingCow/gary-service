import React from 'react';

function Event ({props}) {
    // console.log(props);
    
    return (
        <div className="event">
            <img src={props.image_url} alt="Photo" />
            <a className="name" href="#">{props.name}</a>
            {/* <p>{props.category}</p> */}
            <p className="info">Rating: {props.rating} {props.reviews_count} Reviews</p>
            <p className="price">from ${props.price}*</p>
        </div>
    );
}

export default Event;
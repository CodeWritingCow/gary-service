import React from 'react';

function Event ({props}) {
    // console.log(props);
    
    return (
        <div className="event">
            <img src={props.image_url} alt={props.name} />
            {/* <p>{props.category}</p> */}
            <div className="details">
                <a className="name" href="#">{props.name}</a>
                <div className="info">Rating: {props.rating} {props.reviews_count} Reviews</div>
                <div className="price">from <strong>${props.price}*</strong></div>
            </div>
        </div>
    );
}

export default Event;
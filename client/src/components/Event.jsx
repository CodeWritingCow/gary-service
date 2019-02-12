import React from 'react';

function Event ({props}) {    
    return (
        <div className="event">
            {/* <img src={props.image_url} alt={props.name} /> */}
            {/* <p>{props.category}</p> */}
            <div className="inner image" style={{ 'backgroundImage': `url("${props.image_url}")` }}></div>
            <i className="far fa-bookmark fa-2x bookmark"></i>
            <div className="details">
                <a className="name" href="#">{props.name}</a>
                {/* <i className="far fa-dot-circle" style={{ 'color': 'green'}}></i> */}
                <div className="info">Rating: {props.rating} {props.reviews_count} Reviews</div>
                <div className="price">from <strong>${props.price.toFixed(2)}*</strong></div>
            </div>
        </div>
    );
}

export default Event;
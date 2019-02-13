import React from 'react';

function Event ({props}) {
    let ratingStyle = {
        'color': '#00a680',
        'border': '#00a680 1px solid',
        'padding': '2px',
        'borderRadius': '25px',
        'fontSize': '.5em'
    }

    let ratingStyleWhite = {
        'color': 'white',
        'border': '#00a680 1px solid',
        'padding': '2px',
        'borderRadius': '25px',
        'fontSize': '.5em'
    }

    let ratings = [];
    for (let index = 0; index < 5; index++) {
        if (index < Math.round(props.rating)) { // TODO: Show half dots for ratings such as 4.5
            ratings.push(0);
        } else {
            ratings.push(1);
        }
    }
    
    return (
        <div className="event">
            <div className="inner image" style={{ 'backgroundImage': `url("${props.image_url}")` }}></div>
            <i className="far fa-bookmark fa-2x bookmark"></i>
            <div className="details">
                <a className="name" href="#">{props.name}</a>
                <div className="info">
                    {ratings.map((num, index) => <i className="fas fa-circle fa-xs" style={num === 0 ? ratingStyle : ratingStyleWhite} key={index}></i>)} {props.reviews_count} Reviews
                </div>
                <div className="price">from <strong>${props.price.toFixed(2)}*</strong></div>
            </div>
        </div>
    );
}

export default Event;
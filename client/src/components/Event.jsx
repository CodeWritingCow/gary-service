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
    // console.log('props.rating is:', props.rating);
    // console.log(ratings);
    
    return (
        <div className="event">
            {/* <p>{props.category}</p> */}
            <div className="inner image" style={{ 'backgroundImage': `url("${props.image_url}")` }}></div>
            <i className="far fa-bookmark fa-2x bookmark"></i>
            <div className="details">
                <a className="name" href="#">{props.name}</a>
                <div className="info">
                    {/* HARDCODED: {[0,0,0,0,1].map(num => num === 0 ? <i className="fas fa-circle fa-xs" style={ratingStyle}></i> : <i className="fas fa-circle fa-xs" style={ratingStyleWhite}></i>)} {props.reviews_count} Reviews */}
                    {/* HARDCODED REFACTORED: {[0,0,0,0,1].map(num => <i className="fas fa-circle fa-xs" style={num === 0 ? ratingStyle : ratingStyleWhite}></i>)} {props.reviews_count} Reviews */}
                    {ratings.map((num, index) => <i className="fas fa-circle fa-xs" style={num === 0 ? ratingStyle : ratingStyleWhite} key={index}></i>)} {props.reviews_count} Reviews
                </div>
                <div className="price">from <strong>${props.price.toFixed(2)}*</strong></div>
            </div>
        </div>
    );
}

export default Event;
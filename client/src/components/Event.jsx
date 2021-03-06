import React from 'react';
import { config } from '../config.js'

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
        // TODO: Show half dots for ratings such as 4.5
        if (index < Math.round(props.rating)) {
            ratings.push(0);
        } else {
            ratings.push(1);
        }
    }

    let renderRatings = function () {
        return ratings.map((num, index) => {
            return <i className="fas fa-circle fa-xs"
                    style={num === 0 ? ratingStyle : ratingStyleWhite}
                    key={index}>
                   </i>
            });
    }

    let url = config.HOSTNAME === 'localhost' ? config.LOCALHOST : config.AWS_URL;
    
    return (
        <div className="event">
            <a><div className="inner image" style={{ 'backgroundImage': `url("${url}/${props.image_url}jpg")` }}></div></a>
            <i className="far fa-bookmark fa-2x bookmark"
                onClick={()=>{
                    props.bookmarked = true;
                }}>
            </i>
            <div className="details">
                <a className="name">
                    {props.name.length > 29 ? `${props.name.slice(0,29)}...` : props.name}
                </a>
                <div className="info">
                    {renderRatings()} {props.reviews_count} Reviews
                </div>
                <div className="price">from <strong>${props.price.toFixed(2)}*</strong></div>
            </div>
        </div>
    );
}

export default Event;
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

    let renderRatings = function () {
        return ratings.map((num, index) => {
            return <i className="fas fa-circle fa-xs"
                    style={num === 0 ? ratingStyle : ratingStyleWhite}
                    key={index}>
                   </i>
            });
    }
    
    return (
        <div className="event">
            {/* TODO: Change hardcoded URL to dynamic environmental variable */}
            <a><div className="inner image" style={{ 'backgroundImage': `url("http://localhost:3016/${props.image_url}")` }}></div></a>
            <i className="far fa-bookmark fa-2x bookmark"
                onClick={()=>{
                    props.bookmarked = true;
                    // console.log(props);
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
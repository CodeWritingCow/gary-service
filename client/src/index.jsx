import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 2,
            image_url: 'images/01.jpg',
            name: 'Country Cow Dance',
            price: 88,
            rating: 5,
            reviews_count: 50
        }
        this.getEvent = this.getEvent.bind(this);
    }

    componentDidMount() {        
        this.getEvent();
    }

    getEvent() {
        return axios.get('/api/events/1') // TODO: Replace '1' with dynamic value
        .then((response) => {
            console.log('response:', response.data[0]);
            // this.setState({
            // category: response.data[0].category,
            // image_url: response.data[0].image_url,
            // name: response.data[0].name,
            // price: response.data[0].price,
            // rating: response.data[0].rating,
            // reviews_count: response.data[0].reviews_count
            // });
        })
        .catch((err) => {
            console.log('error:', err);
        });
  }
    // TODO: Refactor event info into an event component. i.e. <Event />
    render () {
        return (
            <div className="app">
                <h1>Moo Moo</h1>
                <img src={this.state.image_url} width="300px" alt="Photo" />
                <h3>{this.state.name}</h3>
                <p>{this.state.category}</p>
                <p>Price: ${this.state.price}</p>
                <p>Rating: {this.state.rating}</p>
                <p>Reviews: {this.state.reviews_count}</p>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
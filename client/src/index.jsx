import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Category from './components/Category.jsx';
import Event from './components/Event.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryIds: [1,2,3,4], // TODO: Get ids from server instead of hardcoding them
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
        // TODO: Replace hardcoded localhost IP with environmental variable
        return axios.get('http://localhost:3016/api/events/1') // TODO: Replace '1' with dynamic value
        .then((response) => {
            this.setState({
            category: response.data[0].category,
            image_url: response.data[0].image_url,
            name: response.data[0].name,
            price: response.data[0].price,
            rating: response.data[0].rating,
            reviews_count: response.data[0].reviews_count
            });
        })
        .catch((err) => {
            console.log('error:', err);
        });
  }

    render (props) {
        return (
            <div className="app">
                {this.state.categoryIds.map((id, idx) => <Category props={this.state} categoryId={id} key={idx} />)}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
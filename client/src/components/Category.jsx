import React from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import Event from './Event.jsx';

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: []
        }
    }

    componentDidMount() {
        this.getEventsByCategory();
    }

    getEventsByCategory() {
        return axios.get('/api/categories/1') // TODO: Replace '1' with dynamic value
            .then((response) => {
                // console.log(response.data);                
                this.setState({
                events: response.data.slice(0,4); // TODO: Return 4 events at random
                });
            })
            .catch((err) => {
                console.log('error:', err);
            });
    }

    render(props) {
        return (
            <div>
                <h1>Moo</h1>
            </div>
        );
    }
}

export default Category;
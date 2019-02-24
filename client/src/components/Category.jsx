import React from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import Event from './Event.jsx';

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            category: ''
        }
    }

    componentDidMount() {
        this.getEventsByCategory(this.props.categoryId);
        this.getCategoryNameById(this.props.categoryId);
    }

    getEventsByCategory(categoryId) {
        // TODO: Replace hardcoded localhost IP with environmental variable
        return axios.get(`http://18.218.78.109/api/categories/${categoryId}`)
            .then((response) => {
                this.setState({
                events: response.data // TODO: Return 4 events at random
                });
            })
            .catch((err) => {
                console.log('error:', err);
            });
    }

    getCategoryNameById(categoryId) {
        return axios.get(`http://18.218.78.109/api/category/name/${categoryId}`)
            .then((response) => {
                this.setState({
                    category: response.data[0].name
                });
            })
            .catch((err) => {
                console.log('error:', err); 
            });
    }

    render(props) {
        let categoryStyle = {
            'padding': '12px',
            'fontSize': '24px',
            'fontWeight': '700',
            'lineHeight': '28px',
            'fontFamily': 'Arial,Tahoma,"Bitstream Vera Sans",sans-serif',
            'textDecoration': 'none',
            'color': 'black'
        }
        
        return (
            <div className='category'>
                <div style={{'width': 'max-content'}}>
                    <div className="title">
                        <a style={categoryStyle}>{this.state.category}</a>
                        {this.state.events.length > 0 ? <span className="counter">({this.state.events.length})</span> : ''}
                        <a className="seeall">See all</a>
                    </div>
                    {this.state.events.slice(0,4).map((event, index) => <Event props={event} key={index} />)}
                </div>
            </div>
        );
    }
}

export default Category;
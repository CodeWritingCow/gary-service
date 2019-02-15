import React from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import Event from './Event.jsx';

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            category: 'Moo Day Trip' // TODO: Replace with dynamic value
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
                events: response.data.slice(0,4) // TODO: Return 4 events at random
                });
            })
            .catch((err) => {
                console.log('error:', err);
            });
    }

    render(props) {
        // console.log('category:', this.state);
        let categoryStyle = {
            'fontSize': '24px',
            'fontWeight': '700',
            'lineHeight': '28px',
            'fontFamily': 'Arial,Tahoma,"Bitstream Vera Sans",sans-serif',
            'textDecoration': 'none',
            'color': 'black'
        }
        
        return (
            <div className='category'>
                <div>
                    <div>
                        <a href="#" style={categoryStyle}>{this.state.category}</a>
                    </div>
                    {this.state.events.map((event, index) => <Event props={event} key={index} />)}
                </div>
            </div>
        );
    }
}

export default Category;
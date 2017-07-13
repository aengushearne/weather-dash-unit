import React from 'react';
import PropTypes from 'prop-types';
var ReactRouter = require('react-router-dom');

class Searchbox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({input: event.target.value});
    }
    handleSubmit(){
        this.props.onSubmitSearch(this.state.input);
    }
    render() {
        return(
            <div 
            className='searchbox-container'
            style={{flexDirection:this.props.direction}}>
            <input 
                className='form-control'
                placeholder='City, State'
                value={this.state.input}
                onChange={this.handleChange}
                type='text' 
                />
            <button 
                type='button'
                className='btn btn-success'
                style={{margin:10}}
                onClick={this.handleSubmit}>
            Weather
            </button>
            </div>
        )
    }
}

Searchbox.defaultProps = {
  direction: 'column'
}

Searchbox.propTypes = {
  direction: PropTypes.string,
}

module.exports = Searchbox;
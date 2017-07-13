import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import Link from 'react-router-dom';
import api from '../helpers/api';
import Loading from './Loading';

function Day(props) {
    let icon = props.day.weather[0].icon;
    return (
        <div onClick={props.onClick} className='day-container'>
        <img className='weather' src={'./app/images/weather-icons/'+icon+'.svg'} alt='weather'/>
        </div>
    )
}

class Forecast extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            weather: {},
            forecast: {},
            loading: true
        }
        this.fetchWeather = this.fetchWeather.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        let city = queryString.parse(this.props.location.search).city;
        this.fetchWeather(city);
    }
    componentWillReceiveProps(nextProps) {
        let city = queryString.parse(nextProps.location.search).city;
        this.fetchWeather(city);
    }
    fetchWeather(city){
        
        api.weather(city).then(function     (res) {
            this.setState(function(){
                return{weather: res}
            });
        }.bind(this));
        api.forecast(city).then(function     (res) {
            this.setState(function(){
                return{
                    forecast: res,
                    loading: false
                }
            });
        }.bind(this));
    }
    handleClick(city) {
    this.props.history.push({
      pathname: '/details/' + this.state.forecast.city.name,
      state: city,
    })
}
    render(){
    return(
        <div>
        {this.state.loading ? <Loading text='Loading' speed={10} /> :
        <div>
        <div className='forecast-header'>
        <h1 className='header'>{this.state.weather.name}, {this.state.weather.sys.country}</h1> <h4 className='header'> - {this.state.weather.weather[0].description}, {Math.round(this.state.weather.main.temp)}&#8451; </h4>
        </div>
        <div className='forecast-container'>
            {this.state.forecast.list.map(function(listItem){
                return(
                    <Day onClick={this.handleClick.bind(this, listItem)} key={listItem.dt} day={listItem} />
                )
            }, this)}
        </div>
        </div>
        }
        </div>
    )
    }
}

module.exports = Forecast;
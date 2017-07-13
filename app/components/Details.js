import React from 'react';


class Details extends React.Component {
    render(){
        let city = this.props.match.params.city;
        let weather = this.props.location.state.weather[0].description;
        let minTemp = Math.round(this.props.location.state.temp.min);
        let maxTemp = Math.round(this.props.location.state.temp.max);
        let humidity = this.props.location.state.humidity;
        let icon = this.props.location.state.weather[0].icon;
    return(
        <div className='details-container'>
            <img className='details-icon' src={'../app/images/weather-icons/'+icon+'.svg'} alt='weather'/>
            <div className='details-header'>
            <p>{city}</p>
            <p>{weather}</p>
            <p>{minTemp}&#8451;</p>
            <p>{maxTemp}&#8451;</p>
            <p>Humidity {humidity}%</p>
            </div>
        </div>
    )
    }
}

module.exports = Details;
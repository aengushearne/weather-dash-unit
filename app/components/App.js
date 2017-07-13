import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Searchbox from './Searchbox';
import Forecast from './Forecast';
import Details from './Details';

class App extends React.Component{
    render() {
    return(
        <Router>
        <div className='container'>
            <Route render={function (props) {
            return (
            <div className='navbar'>
                <h1>Weather thingy</h1>
                <Searchbox 
                direction='row'
                onSubmitSearch={function (city) {
                    props.history.push({
                      pathname: '/forecast',
                      search: '?city=' + city
                    });
                    }}
                />
            </div>
            )
            }} />
            <Route exact path='/' render={function (props) {
            return (
            <div className='home-container' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
            <h1 className='header'>Enter a City and state</h1>
                <Searchbox 
                direction='column'
                onSubmitSearch={function (city) {
                    props.history.push({
                      pathname: '/forecast',
                      search: '?city=' + city
                    });
                    }}
                />
            </div>
            )
            }} />
            <Route path='/forecast' component={Forecast} />
            <Route path='/details/:city' component={Details} />
        </div>
        </Router>
    )
    }
}

module.exports = App;
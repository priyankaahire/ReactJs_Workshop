import React from 'react';
import suunyIcon from '../assets/images/sunny.jpg';
import rainyIcon from '../assets/images/rainy.jpg';
import cloudyIcon from '../assets/images/cloudy.jpg';
import thunderstromIcon from '../assets/images/thunderstrom.jpg';
import windyIcon from '../assets/images/windy.jpg'
import propTypes from "prop-types"



export default class WeatherClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    container ={
        display: "flex",
        justifyContent:"center",
        flex: "0 0 215px"
    }

    mystyle = {
        padding:"2em",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        margin: "5px",
        border: "1px solid #ccc"
    }
    content = {
        border: "2px solid black",
        padding:"10px",
        textAlign: "center",
        borderRadius:"5px",
        minWidth:"100px",
        width:"fit-content"
    }
    getWeatherData(city) {
        fetch("./WeatherChart.json")
        .then(result => result.json())
        .then(response => {
            const cityData = response.find(
                data => data.city.toLowerCase() === city.toLowerCase()
            );

            if(cityData) {
                this.setState({
                    city:city,
                    low: cityData.low,
                    high: cityData.high,
                    condition: cityData.condition
                })
            }
        })
    }

    componentDidMount() {
        this.getWeatherData(this.props.city)
    }

    componentDidUpdate() {
        this.getWeatherData(this.props.city)
    }

    render() {
        const temperatureLabel = WeatherClass.temperature.find(temp => this.state.high < temp.value)?.label;

        return (
            <>
             <div style={this.container}>
                <div style={this.mystyle}>
                    <div style={this.content} >
                        <h1>{this.props.city} Weather</h1>
                        <div>
                            <img src={WeatherClass.condition[this.state.condition] ?? rainyIcon} width="400" height="400" />
                            <p style={{fontStyle:"Italic", fontWeight:"600"}}>{temperatureLabel}</p>
                            <h2>Low {this.state.low} &#176;C - High {this.state.high}&#176;C</h2>
                        </div>
                    </div>
                    <div><p style={{fontStyle:"Italic", fontWeight:"600"}}>@Class component</p></div>
                </div>
               
            </div>
            </>
        );
    }
}
    WeatherClass.temperature = [
        {value:0, label:"Sub Zero"},
        {value:10, label:"Very Cold"},
        {value:20, label:"Cold"},
        {value:30, label:"Moderate"},
        {value:40, label:"hot"},
        {value:100, label:"Extream Heat"},
        {Value:Infinity, label:"Extream Heat"}
    ];

    WeatherClass.condition = {
        "rainy":rainyIcon,
        "sunny":suunyIcon,
        "thunderstrom":thunderstromIcon,
        "cloudy":cloudyIcon,
        "windy":windyIcon
    }

    WeatherClass.propTypes = {
        // "city":PropTypes.string.isRequired
    }
   

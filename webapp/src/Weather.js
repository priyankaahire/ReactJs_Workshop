import React from 'react';
import suunyIcon from './assets/sunny.jpg';
import rainyIcon from './assets/rainy.jpg';
import cloudyIcon from './assets/cloudy.jpg';
import thunderstromIcon from './assets/thunderstrom.jpg';
import windyIcon from './assets/windy.jpg';
export default class Weather extends React.Component {
    conditionObj = {};
    constructor(props) {
        super(props)

        this.conditionObj = {
            "rainy":rainyIcon,
            "sunny":suunyIcon,
            "thunderstrom":thunderstromIcon,
            "cloudy":cloudyIcon,
            "windy":windyIcon
        }
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
    render() {
        return (
            <div style={this.container}>
                <div style={this.mystyle}>
                    <div style={this.content} >
                        <h1>{this.props.city} Weather</h1>
                        <div>
                            <img src={this.conditionObj[this.props.condition] || "weather.jpg"} width="400" height="400" />
                            <p style={{fontWeight:"400"}}>Low {this.props.low}&#176;C  &nbsp; High {this.props.high}&#176; C</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
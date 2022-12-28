
import {useState, useEffect} from 'react';
import React from 'react';
import suunyIcon from './assets/sunny.jpg';
import rainyIcon from './assets/rainy.jpg';
import cloudyIcon from './assets/cloudy.jpg';
import thunderstromIcon from './assets/thunderstrom.jpg';
import windyIcon from './assets/windy.jpg';


export default function WeatherFunction(props) {
   
    const [CityData, setCityData] = useState("pune");
    const url = "http://localhost:8080/WeatherChart.json";
    
    useEffect(() => {
        
        fetch(url)
        .then(result => result.json())
        .then(response => {
            const cityData = response.find(
                data => data.city.toLowerCase() == props.city.toLowerCase()
            );
        if(cityData) {
            const temperature = WeatherFunction.temperature.find(
                temp => cityData.high < temp.value
            )?.label
            setCityData({temperature, ...cityData});
        }
      })
    }, []);

    return (
        <>
            <div style={container}>
                <div style={mystyle}>
                    <div style={content} >
                        <h1>{CityData.city} Weather</h1>
                        <div>
                            <img src={WeatherFunction.condition[CityData.condition] ?? rainyIcon} width="400" height="400" />
                            <p style={{fontStyle:"Italic"}}>{CityData.temperature}</p>
                            <h2>Low {CityData.low} &#176;C - High {CityData.high}&#176;C</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
const container ={
    display: "flex",
    justifyContent:"center",
    flex: "0 0 215px"
}

const mystyle = {
    padding:"2em",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    margin: "5px",
    border: "1px solid #ccc"
}
const content = {
    border: "2px solid black",
    padding:"10px",
    textAlign: "center",
    borderRadius:"5px",
    minWidth:"100px",
    width:"fit-content"
}
WeatherFunction.temperature = [
    {value:0, label:"Sub Zero"},
    {value:10, label:"Very Cold"},
    {value:20, label:"Cold"},
    {value:30, label:"Moderate"},
    {value:40, label:"hot"},
    {value:100, label:"Extream Heat"},
    {Value:Infinity, label:"Extream Heat"}
];

WeatherFunction.condition = {
    "rainy":rainyIcon,
    "sunny":suunyIcon,
    "thunderstrom":thunderstromIcon,
    "cloudy":cloudyIcon,
    "windy":windyIcon
}

WeatherFunction.propTypes = {
    // "city":PropTypes.string.isRequired
}
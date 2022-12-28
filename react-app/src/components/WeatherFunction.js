
import {useState, useEffect} from 'react';
import React from 'react';
import suunyIcon from '../assets/images/sunny.jpg';
import rainyIcon from '../assets/images/rainy.jpg';
import cloudyIcon from '../assets/images/cloudy.jpg';
import thunderstromIcon from '../assets/images/thunderstrom.jpg';
import windyIcon from '../assets/images/windy.jpg'
import '../assets/css/mystyle.css';


export default function WeatherFunction(props) {
   
    const [CityData, setCityData] = useState("pune");
    const url = "./WeatherChart.json";

    useEffect(() => {
        fetch(url)
        .then(result => result.json())
        .then(response => {
            const cityData = response.find(
                data => data.city.toLowerCase() === props.city.toLowerCase()
            );
        if(cityData) {
            const temperature = WeatherFunction.temperature.find(
                temp => cityData.high < temp.value
            )?.label
            setCityData({temperature, ...cityData});
        }
      })
    }, [props.city]);

    return (
        <>
            <div className="custom-container">
                <div className="custom-main">
                    <div className="custom-content" >
                        <h1>{CityData.city} Weather</h1>
                        <div>
                            <img src={WeatherFunction.condition[CityData.condition] ?? rainyIcon} width="400" height="400" />
                            <p style={{fontStyle:"Italic",fontWeight:"600"}}>{CityData.temperature}</p>
                            <h2>Low {CityData.low} &#176;C - High {CityData.high}&#176;C</h2>
                        </div>
                    </div>
                    <div><p style={{fontStyle:"Italic", fontWeight:"600"}}>@Function component</p></div>
                </div>
                
            </div>
        </>
    );

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
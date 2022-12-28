import React from 'react';
import Weather from './Weather';
import sunny from './assets/sunny.jpg';

export default class WeatherController extends React.Component {

    constructor(props) {
        super(props)

        this.state = ({low: 25, high: 30});
    }

    render() {
        return (
            <>
                <Weather city="Pune" low={this.state.low} high={this.state.high} condition="sunny" />
                <div>
                    Low:<input min={-60} max={100} type="number" onChange={this.chnageLow} />
                </div>
            </>
        )
    }

}
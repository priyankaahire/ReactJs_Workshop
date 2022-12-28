import * as React from 'react';
import * as ReactDOM from 'react-dom/client'
import CounterClass from '../../webapp/src/CounterClass';
import CounterFunction from '../../webapp/src/CounterFunction';
import WeatherFunction from '../../webapp/src/WeatherFunction';
import WeatherClass from './WeatherClass';

const div = document.getElementById("root");
const root = ReactDOM.createRoot(div)
const h1  = React.createElement("h1", null, "My own React app");

const allComponent = <>
<WeatherFunction city="Pune"/>
<WeatherClass city="Pune"/>
<CounterFunction />
<CounterClass />
</>
root.render(<>{allComponent}</>);
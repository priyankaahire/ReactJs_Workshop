import * as React from 'react';
import * as ReactDOM  from 'react-dom/client';
import "./assets/css/mystyle.css";
import AppPerson from './app';
import Person from './Person'
import PersonPropTypes from './PersonProTypes';
import OrderDetails from './OrderDetails';
import ComponentLifecycle from './ComponentLifecycle';
import Weather from './Weather';
import Counter from './Counter';
import Ref from './Ref'
import WeatherController from './WeatherController';
import WeatherClass from './WeatherClass'
import CounterFunction from './CounterFunction';
import CounterClass from './CounterClass';
import WeatherFunction from './WeatherFunction';

const root = ReactDOM.createRoot(document.getElementById("root"))

//*       | JSX by itself is an expression
//*       v

//* Passing "internal" style object as props
//^ myStyle is still Javascript object (NOT  CSS)
const myStyle = {
    backgroundColor: "green",
    color:"white"
}
const objectCss = <h1 style={myStyle}>Hello Green world with internal style Object as props</h1>

//* Passing "inline" Style as props
//^ pass and JSX expression {{Object}}

const inlineCss = <h1 style={{backgroundColor:"green", fontStyle:'italic'}}>Hello Green world with inline style as props</h1>

//* Use "external" CSS module
const externalCss = <h3>Hello Green world with external CSS</h3>

const container = {
    display: "flex",
    justifyContent:"center",
}
const formcontainer ={
    padding:"2em",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    width:"500px",
    margin: "5px",
    border: "1px solid #ccc"

}
const buttonArea = {
    margin: "0.5em",
    display: "inline-flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
}
const btn = {
    height: "50px",
    borderRadius: "10px",
    padding: "1em 2.4em",
    fontSize: ".9em",
    margin: "1em",
    textDecoration: "none",
    backgroundColor:"#008CBA",
    color:"#ffffff",
    border:"none",
    justifyContent:"center"
}
const loginPanel = (
    <>
        <div style={container}>
            <div style={formcontainer}>
                <div className='loginFormTtem'>
                    <label>Username</label>
                    <input type="text" placeholder="Username"/>
                    <label>Password</label>
                    <input type="password" placeholder='Password' />
                </div>
                <div style={buttonArea}>
                    <button style={btn} id="login">Login</button>
                    <button style={btn} id="reset">Reset</button>
                </div>
            </div>
           
        </div>
    </>
)
const Order_details = {
    customer:{
       id:123,
       name:"AMDOCS",
       addr:"Isreal"
    },
    lineItems:[
        {productNumber: 125, quantity: 2, unitPrice: 120.0},
        {productNumber: 458, quantity: 1, unitPrice: 200.50}
    ]
}
const allComponent = <>

<WeatherFunction city="Pune"/>
<CounterFunction />
<CounterClass />
<WeatherClass city="Pune"/>
<Ref />
    <div style={{display:"inline-flex", flexWrap:"wrap"}} >
        <WeatherController />
    </div>
    <div style={{display:"inline-flex", flexWrap:"wrap"}}>
        <Weather low={25} high={30} city="Mumbai" condition="rainy" />
        <Weather low={20} high={25} city="Nagpur" condition="sunny"/>
        <Weather low={18} high={20} city="Nashik" condition="windy"/>
        <Weather low={15} high={18} city="Lonavla" condition="thunderstrom"/>
        <Weather low={20} high={25} city="Pune" condition="cloudy"/>
    </div>
    <Counter />
    <ComponentLifecycle id={1} name="ComponentLifecycle" />
    <OrderDetails details={Order_details} containerStyle={formcontainer}/>
    <Person id={182789} name="Priyanka Ahire" />
    <AppPerson name="Sally" id="1" destination="India" />
    <AppPerson name="Haddel" id="2" destination="Isreal" />
    
</>
root.render(<>{allComponent}{loginPanel}{objectCss}{inlineCss}{externalCss}</>)


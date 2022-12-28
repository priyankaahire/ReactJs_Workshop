import {useState} from 'react';
import React from 'react';

//~* function component is called multiple times
export default function CounterFunction(props) {

    //*! state is going to destroy becase it is local varibale and very local varibale is destroy in each function
   
    const [counter, setCounter] = useState(1);


    return (
        <>
        <div>Counter Function</div>
         <p>Your clicked {counter} times</p>
         <button onClick={() => setCounter(counter+1)}>Increment</button>
        </>
    )
}
import {useReducer} from 'react';
import '../assets/css/mystyle.css'


function reducerAction(prevState, action) {
    const actionMap = {
        "inc": ({counter: prevState.counter + 1}),
        "dec": ({counter: prevState.counter - 1}),
        "reset": ({counter:0})
    }

    return actionMap[action.type.toLowerCase()];
}

export default function Reducer() {

    const [state, dispatch] = useReducer(reducerAction, {counter:1});

    return (
        <>
            <div className="custom-container">
                <div className="custom-main">
                    <div className='custom-content'>
                        <h1>Reducer Counter</h1>
                        <h2>Counter {state.counter}</h2>
                        <button className='btn btn-primary' onClick={() => dispatch({type:"inc"})}> + </button>
                        <button className='btn btn-primary' onClick={() => dispatch({type:"dec"})}> - </button>
                        <button className='btn btn-primary' onClick={() => dispatch({type:"reset"})}>Reset</button>
                    </div>
                    <div><p style={{fontStyle:"Italic", fontWeight:"600"}}>@Reducer</p></div>

                </div>
            </div>
        </>
    )
}
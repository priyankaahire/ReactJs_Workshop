
import React from 'react';
export default class CounterClass extends React.Component {
    constructor(props) {
        super(props)
        //~! state is class field (propery)
        this.state = {counter: 1}
    }

    //~* render is class multiple times
    render() {
        return (
            <>
            <div >Counter class</div>
            <p>Your clicked {this.state.counter} times</p>
            <button onClick={()=>this.setState({counter:this.state.counter+1})}>Increment</button>
            </>
        )
    }
}
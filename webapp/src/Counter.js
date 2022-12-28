import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
        super(props)

        //~%  S T A T E
        this.state = {counter:0}

        //~^ Pre-bound references of method (SINGLE COPY)
        this.increment = this.increment.bind(this)

    }

    //~* M E T H O D - SINGLE copy in prototype
    increment() {
        this.setState({counter: this.state.counter+1 })
    }

    //~! L A M B D A - Washing memory since 2015

    decrement = () => this.setState({counter: this.state.counter - 1})


    render() {
        return <div>
            <h3>Counter {this.state.counter}</h3>
            <button onClick={this.increment}> + </button>
            <button onClick={this.decrement}> - </button>
        </div>
    }
}
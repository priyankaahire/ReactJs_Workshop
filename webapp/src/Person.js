import React from 'react';
export default class Person extends React.Component {

    counter = 5; //* Local var counter

    constructor(props) {
        super(props);
        //! Initialise the state Object
        this.state = {counter:0}
    }
   
    incrementCount() {
        //! here you will recived the undefined for the counter if you are not Initialise in construtor state
        this.setState({counter:this.state.counter+1})
    }
    
    render() {
        return (
            <>
                <span>Id:{this.props.id}</span>
                <span>Name:{this.props.name}</span>
                <span>Local counter:{this.counter}</span>
                <span>Increamented Count:{this.state.counter}</span>
                <button onClick={this.incrementCount.bind(this)}>View</button>
            </>
        )
    }
}
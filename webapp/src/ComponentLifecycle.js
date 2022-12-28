
import React from 'react';
export default class ComponentLifecycle extends React.Component {

    counter = 5;
    constructor(props) {
        console.log("constructor");
        super(props);
        this.state = {counter: 0};
    }
    incrementCount() {
        //! here you will recived the undefined for the counter if you are not Initialise in construtor state
        this.setState({counter:this.state.counter+1})
    }
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps");
        return null;
    }
    render() {
        console.log("render");
        return (
            <>
            <div >
                <h2>Component Lifecycle</h2>
                <span>Id:{this.props.id}</span>
                <span>Name:{this.props.name}</span>
                <span>Local counter:{this.counter}</span>
                <span>Increamented Count:{this.state.counter}</span>
                <button onClick={this.incrementCount.bind(this)}>View</button>
            </div>
           
        </>
        )
    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate called");
        if (new Date % 2 == 0)
            return true;
        return false
    }

}
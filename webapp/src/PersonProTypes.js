import React from 'react';
import propTypes from 'prop-types'
export default class PersonPropTypes extends React.Component {
     //! It is use less because it is calling automticall base class
    // constructor(props) {
    //     super(props);
    // }
    //* It checking the validation
    //!If not provide the expected input we will recived 
    //!react.development.js:189 Warning: Failed prop type: Invalid prop `id` of type `string` supplied to `PersonPropTypes`, expected `number`
    static propTypes ={
        "id": propTypes.number, 
        "name": propTypes.string
    }
    render() {
        return (
            <>
            <h1>{this.props.id}</h1>
            <h1>{this.props.number}</h1>
            </>
        )
    }
}


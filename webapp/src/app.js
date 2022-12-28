import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/css/app.css'


//class Person extends React.Component{
    // constructor(props) {
    //     super(props);
    //     console.log(props);
    // }
    function AppPerson(props) {
    // render() {
        return (
            <>
                <div className="person_info_conatiner">
                    <div className='person_info'>
                        <h2>Person Info</h2>
                        <span> {props.name}</span>
                        <span> {props.id}</span>
                        <span> {props.destination}</span>
                    </div>
                </div>
            </>
            
        )
    }
//     }
// }

export default AppPerson;
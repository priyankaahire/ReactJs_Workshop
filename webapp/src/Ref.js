import React from "react";

export default class Ref extends React.Component {

    constructor(props) {
        super(props)
        this.state = {};
        this.userList = [];

        //~% craete the ref (wrapper) for a DOM element (in our case input)
        this.countryRef = React.createRef();

        //~! If take reference it will forgot the object then you ned to remind by using bind
        //~? Bound Method
        this.submit = this.submit.bind(this);
        this.nameChanged = this.nameChanged.bind(this)

    }
    container = {
        display: "flex",
        justifyContent: "center",
        flex: "0 0 215px"
    }

    mystyle = {
        padding: "2em",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        margin: "5px",
        border: "1px solid #ccc"
    }
    nameChanged(event) {
        this.setState({ tempName: event.target.value })
    }

    submit() {
        const id = document.querySelector("#input-id")?.value;
        const name = this.state.tempName;
        const country = this.countryRef.current.value;
        const user = { id: id, name: name, country: country };


        this.userList.push(user);
        this.setState({ userList: this.userList }) //~! Asynchronous
        console.log(this.state); //~! If we will print immediate then it will not print because it async
        // document.querySelector("#id").value = ''
        // this.state.name ='';
        // this.countryRef.current.value = '';
    }

    render() {
        return (
            <>
                <div style={this.container}>
                    <div style={this.mystyle}>
                        <div>
                            <input id="input-id" placeholder="Enter the Id" type="number" />
                            <input placeholder="Enater the name" type="string" onChange={this.nameChanged} />
                            <input placeholder="Enter the Country" type="text" ref={this.countryRef} />
                            <button onClick={this.submit}>Submit</button>
                        </div>
                        <div>
                            <ul>
                                {this.state.userList?.map(user =>
                                    <li key={user.id}>{user.id} {user.name} {user.country}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
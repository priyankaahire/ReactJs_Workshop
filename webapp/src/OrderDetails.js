import React from "react";
import PropTypes from "prop-types";


export default class OrderDetails extends React.Component {

    //~% How to props merged
    static propTypes = {
        details: PropTypes.shape({
            customer: PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                addr: PropTypes.string
            }),
            //! iF I AM EXPECTING array of lineItems and how i am desc lineitems with shape i.e
            lineItems: PropTypes.arrayOf(
                PropTypes.shape({
                    productNumber: PropTypes.number,
                    quantity: PropTypes.number,
                    unitPrice: PropTypes.number.isRequired
                })
            )
        }),
    }
    myStyle ={
        "border": "1px solid black",
        "padding": "2em",
        "boxShadow": "rgb(100 100 111 / 20%) 0px 7px 29px 0px",
        "width": "500px"
    }
    tableStyle={
        border: "1px solid #e2e2e2"
    }
    render() {
        return <>
        <div style={this.myStyle}>
        <h1>Customer Details</h1>
            <table style={this.tableStyle}>
                <thead>
                    <th></th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Address</th>
                </thead>
                <tbody >
                    <tr>
                        <td></td>
                        <td>{this.props.details.customer.id}</td>
                        <td>{this.props.details.customer.name}</td>
                        <td>{this.props.details.customer.addr}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    }
}

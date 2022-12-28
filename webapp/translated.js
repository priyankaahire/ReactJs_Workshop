import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import "./assets/css/mystyle.css";
var root = ReactDOM.createRoot(document.getElementById("root"));

//*       | JSX by itself is an expression
//*       v

//* Passing "internal" style object as props
var myStyle = {
  backgroundColor: "green",
  color: "white"
};
var objectCss = /*#__PURE__*/React.createElement("h1", {
  style: myStyle
}, "Hello Green world with internal style Object as props");

//* Passing "inline" Style as props
//^ pass and JSX expression {{Object}}

var inlineCss = /*#__PURE__*/React.createElement("h1", {
  style: {
    backgroundColor: "green",
    fontStyle: 'italic'
  }
}, "Hello Green world with inline style as props");

//* Use "external" CSS module
var externalCss = /*#__PURE__*/React.createElement("h3", null, "Hello Green world with external CSS");
var loginPanel = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
  className: "form-group"
}, /*#__PURE__*/React.createElement("label", null, "Username"), /*#__PURE__*/React.createElement("input", {
  value: "",
  className: "input-control"
}), /*#__PURE__*/React.createElement("label", null, "Password"), /*#__PURE__*/React.createElement("input", {
  value: "",
  type: "password",
  className: "input-control"
})), /*#__PURE__*/React.createElement("div", {
  className: "form-group"
}, /*#__PURE__*/React.createElement("button", {
  id: "login"
}, "Login"), /*#__PURE__*/React.createElement("button", {
  id: "reset"
}, "Reset")));
root.render(loginPanel);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
// const h1 = <h1>Welcome to webpack App</h1>;
// console.log(h1);
// const panel = (
//     <>
//     {new Date()} time is {new Date().toLocaleTimeString}
//     </>
// )
// root.render(panel);

// const h1 = <h1>Welcome to webpack App</h1>

// const user = "Jordan";
// const jsx  = <h1>Welcome {2+3*6}{user.toLocaleUpperCase()}</h1>

// const one = {user}              //-> {user: user} -> {user: "Jordern"}
// const two = <h1>{user}</h1>     //-> <h1>Jorden</h1>

// console.log(one);
// console.log(two);
// console.log(jsx);

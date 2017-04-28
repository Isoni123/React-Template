var React = require('react');
var ReactDOM = require('react-dom');

var List= require('./components/List.jsx');

ReactDOM.render(<List />, document.getElementById('ingredients'));


//use react-dom because this is where we put it on the screen
//document.getElementbyid  is on the DOM take the component we need and then tell it where we want the information to be
// shown which will be in the place of the ingredients on the DOM
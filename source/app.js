
var React = require('react');
var MessageBox = require('./MessageBox');
var message = 'Yo!';
var reactComponent = React.render(
  <MessageBox titleMessage = {message}/>,document.getElementById('app'));


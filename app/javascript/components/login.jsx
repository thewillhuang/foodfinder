'use strict';
var React = require('react');
var LoginModal = require('./loginModal.jsx');
var ModalTrigger = require('react-bootstrap').ModalTrigger;

var Login = React.createClass({

  render: function() {
    return (
      <ModalTrigger modal={ <LoginModal /> } >
        <button type="button" className="btn btn-primary navbar-btn navbar-right">LOGIN</button>
      </ModalTrigger>
    );
  }

});

React.render(<Login />, document.getElementById('login'));

module.exports = Login;

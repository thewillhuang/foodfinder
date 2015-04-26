'use strict';
var React = require('react');
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;

var LoginModal = React.createClass({

  render: function() {
    return (
      <Modal onRequestHide={this.props.onRequestHide} bsStyle='primary' title='Login' animation={true}>
        <h1 className="text-center">Login</h1>
        <div className="modal-body">
          <form className="form col-md-12 center-block">
            <div className="form-group">
              <input type="text" className="form-control input-lg" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control input-lg" placeholder="Password" />
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-lg btn-block">Sign In</button>
              <span className="pull-right"><a href="#">Register</a></span><span><a href="#">Need help?</a></span>
            </div>
          </form>
        </div>
        <div className="col-md-12">
          <Button onClick={this.props.onRequestHide}>Close</Button>
	      </div>
      </Modal>
    );
  }

});

module.exports = LoginModal;

"use strict";
var React = require("react");

var Stars = React.createClass({

  propTypes : {
    handleClick: React.PropTypes.func.isRequired,
    handleHover: React.PropTypes.func.isRequired,
    handleUnhover: React.PropTypes.func.isRequired,
    class: React.PropTypes.string.isRequired,
    index: React.PropTypes.number.isRequired
  },

  handleClick: function(){
    this.props.handleClick(this.props.index);
  },

  handleHover: function(){
    this.props.handleHover(this.props.index);
  },

  handleUnhover: function(){
    this.props.handleUnhover(this.props.index);
  },

  render: function() {
    return (
        <i className={this.props.class}
          onMouseOver={this.handleHover}
          onMouseOut={this.handleUnhover}
          onClick={this.handleClick}></i>
    );
  }

});

module.exports = Stars;

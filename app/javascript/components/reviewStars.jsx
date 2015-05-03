"use strict";
var React = require("react");

var empty = "fa fa-star-o fa-lg";
var full = "fa fa-star fa-lg";

var Stars = React.createClass({

  propTypes : {
    handleClick: React.PropTypes.func.isRequired,
    filled: React.PropTypes.number.isRequired, // 0 = empty, 1 = half, 2 = full
    index: React.PropTypes.number.isRequired
  },

  getInitialState: function() {
    return {
      class: empty,
      filled: this.props.filled,
      prev: ""
    };
  },

  handleHover: function(){
    this.setState({
      prev: this.state.class
    });
    if (this.state.class === empty) {
      this.setState({
        class: full
      });
    } else {
      this.setState({
        class: empty
      });
    }
  },

  handleClick: function(){
    this.props.handleClick(this.props.index);
  },

  handleUnhover: function(){
    this.setState({
      class: this.state.prev
    });
  },

  componentDidMount: function() {
    this.setStar();
  },

  setStar: function(){
    switch (this.props.filled) {
      case 0:
        this.setState({class: empty});
        break;
      case 1:
        this.setState({class: full});
        break;
    }
  },

  render: function() {
    return (
      <i className={this.state.class}
        onMouseOver={this.handleHover}
        onMouseOut={this.handleUnhover}
        onClick={this.handleClick}></i>
    );
  }

});

module.exports = Stars;

"use strict";
var React = require("react");
var Stars = require("./reviewStars.jsx");

var empty = "fa fa-star-o fa-lg";
var full = "fa fa-star fa-lg";
var half = "fa fa-star-half-o fa-lg";

var Reviews = React.createClass({

  propTypes: {
    stars: React.PropTypes.number.isRequired,
    id: React.PropTypes.string.isRequired
  },

  getInitialState: function(){
    return {
      stars: this.props.stars,
      origin: this.props.stars,
      max: 5
    };
  },

  //TODO send ajax to servr for update.
  handleClick: function(i){
    i++;
    console.log("handleClick", i, this.props.id);
    this.setState({
      stars: i
    });
  },

  handleHover: function(i) {
    i++;
    this.setState({
      stars: i
    });
  },

  handleUnhover: function(){
    this.setState({
      stars: this.state.origin
    });
  },

  render: function() {
    var starSet = [];
    for (var i = 1; i < this.state.max + 1; i++) {
      if (i < this.state.stars){
        starSet.push(<Stars handleClick={this.handleClick} handleHover={this.handleHover} handleUnhover={this.handleUnhover} class={full} key={i} index={i}/>);
      } else if (i > this.state.stars && (i - this.state.stars) >= 0.5 && (i-this.state.stars) < 1) {
        //TODO get this half star right
        starSet.push(<Stars handleClick={this.handleClick} handleHover={this.handleHover} handleUnhover={this.handleUnhover} class={half} key={i} index={i}/>);
      } else {
        starSet.push(<Stars handleClick={this.handleClick} handleHover={this.handleHover} handleUnhover={this.handleUnhover} class={empty} key={i} index={i}/>);
      }
    }
    return (
      <div>
        {starSet}
      </div>
    );
  }

});

module.exports = Reviews;

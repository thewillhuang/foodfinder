"use strict";
var React = require("react");
var Stars = require("./reviewStars.jsx");

var empty = "fa fa-star-o fa-lg";
var full = "fa fa-star fa-lg";
var half = "fa fa-star-half-o fa-lg";

var Reviews = React.createClass({

  propTypes: {
    stars: React.PropTypes.number.isRequired,
    id: React.PropTypes.string.isRequired,
    reviewNumber: React.PropTypes.number.isRequired
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
    var total = this.state.stars;
    console.log(total);
    for (var i = 0; i < this.state.max; i++) {
      if (total >= 1) {
        total--;
        starSet.push(<Stars handleClick={this.handleClick} handleHover={this.handleHover} handleUnhover={this.handleUnhover} class={full} key={i} index={i}/>);
      } else if (total > 0) {
        total = 0;
        starSet.push(<Stars handleClick={this.handleClick} handleHover={this.handleHover} handleUnhover={this.handleUnhover} class={half} key={i} index={i}/>);
      } else if (total <= 0) {
        starSet.push(<Stars handleClick={this.handleClick} handleHover={this.handleHover} handleUnhover={this.handleUnhover} class={empty} key={i} index={i}/>);
      }
    }
    return (
      <div>
        {starSet} <em>{this.props.reviewNumber} reviews</em>
      </div>
    );
  }

});

module.exports = Reviews;

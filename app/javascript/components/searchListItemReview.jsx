"use strict";
var React = require("react");
var Stars = require("./reviewStars.jsx");
var empty = "fa fa-star-o fa-lg";
var full = "fa fa-star fa-lg";

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
    console.log("handleHover", i, this.props.id);
    this.setState({
      stars: i
    });
  },

  handleUnhover: function(){
    console.log("handleUnhover");
    this.setState({
      stars: this.state.origin
    });
  },

  render: function() {
    var starSet = [];
    for (var i = 0; i < this.state.max; i++ ) {
      if (i < this.state.stars){
        console.log("full Star");
        starSet.push(<Stars handleClick={this.handleClick} handleHover={this.handleHover} handleUnhover={this.handleUnhover} class={full} key={i} index={i}/>);
      } else {
        console.log("empty Star");
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

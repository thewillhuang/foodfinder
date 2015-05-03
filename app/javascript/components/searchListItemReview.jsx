"use strict";
var React = require("react");
var Stars = require("./reviewStars.jsx");

var Reviews = React.createClass({

  propTypes: {
    stars: React.PropTypes.number.isRequired,
    id: React.PropTypes.string.isRequired
  },

  getInitialState: function(){
    return {
      stars: this.props.stars,
      max: 5
    };
  },

  //TODO send ajax to servr for update.
  handleClick: function(i){
    console.log("handleClick", i + 1, this.props.id);
  },

  render: function() {
    var starSet = [];
    for (var i = 0; i < this.state.max; i++ ) {
      if (i < this.state.stars){
        starSet.push(<Stars handleClick={this.handleClick} filled={1} key={i} index={i}/>);
      }
      if (i >= this.state.stars){
        starSet.push(<Stars handleClick={this.handleClick} filled={0} key={i} index={i}/>);
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

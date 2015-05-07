"use strict";
var React = require("react");
var SearchItem = require("./searchListItem.jsx");
var Infinite = require("react-infinite");

var SearchList = React.createClass({

  propTypes: {
    data: React.PropTypes.array.isRequired
  },

  render: function() {
    var listSet = this.props.data.map(function(obj, key){
      return <SearchItem data={obj} key={key} />;
    });
    var viewPortHeight = window.$(window).height() - 22;
    var navHeight = window.$("#navbar").height();
    return (
      <div>
        <Infinite containerHeight={viewPortHeight - navHeight} elementHeight={70}>
          {listSet}
        </Infinite>
      </div>
    );
  }

});

module.exports = SearchList;

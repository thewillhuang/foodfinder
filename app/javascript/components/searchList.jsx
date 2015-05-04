"use strict";
var React = require("react");
var SearchItem = require("./searchListItem.jsx");

var SearchList = React.createClass({

  render: function() {
    return (
      <div>
        <SearchItem data={{businessName:"KushKings", distance:"5miles", stars: 2.5, id:"29493jfldsakjfd"}}/>
      </div>
    );
  }

});

module.exports = SearchList;

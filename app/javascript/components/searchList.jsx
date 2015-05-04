"use strict";
var React = require("react");
var SearchItem = require("./searchListItem.jsx");

var SearchList = React.createClass({

  propTypes: {
    data: React.PropTypes.array.isRequired
  },

  render: function() {
    var listSet = this.props.data.map(function(obj, key){
      return <SearchItem data={obj} key={key} />;
    });
    return (
      <div>
        {listSet}
      </div>
    );
  }

});

module.exports = SearchList;

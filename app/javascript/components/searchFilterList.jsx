"use strict";
var React = require("react");
var Input = require("react-bootstrap").Input;

var SearchFilter = React.createClass({

  render: function() {
    return (
      <div>
        <h4>Filters</h4>
        <ul>
          <li><Input type='checkbox' label='Open Now' readOnly /></li>
          <li><Input type='checkbox' label='Delivary' readOnly /></li>
          <li><Input type='checkbox' label='Credit Card' readOnly /></li>
          <li><Input type='checkbox' label='Lab Tested' readOnly /></li>
          <li><Input type='checkbox' label='Recreational' readOnly /></li>
          <li><Input type='checkbox' label='Medical' readOnly /></li>
        </ul>
        <h4>Distance</h4>
        <ul>
          <li><Input type='checkbox' label='Within 5 mile' readOnly /></li>
          <li><Input type='checkbox' label='Within 10 miles' readOnly /></li>
          <li><Input type='checkbox' label='Within 15 miles' readOnly /></li>
          <li><Input type='checkbox' label='Within 20 miles' readOnly /></li>
        </ul>
        <h4>Sort By</h4>
        <ul>
          <li><Input type='checkbox' label='Highest Rated' readOnly /></li>
          <li><Input type='checkbox' label='Most Popular' readOnly /></li>
        </ul>
      </div>
    );
  }

});

module.exports = SearchFilter;

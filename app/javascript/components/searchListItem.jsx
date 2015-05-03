"use strict";
var React = require("react");
var ListItemReview = require("./searchListItemReview.jsx");

var SearchListItem = React.createClass({

  propTypes:{
    data: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6 col-sm-6">
            {this.props.data.businessName}
          </div>
          <div className="col-md-6 col-sm-6">
            {this.props.data.distance}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <ListItemReview stars={this.props.data.stars} id={this.props.data.id}/>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = SearchListItem;

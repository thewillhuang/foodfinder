"use strict";
var React = require("react");
var ListItemReview = require("./searchListItemReview.jsx");

var SearchListItem = React.createClass({

  propTypes:{
    data: React.PropTypes.object.isRequired
  },

  render: function() {
    var profilePhoto = "";
    if (this.props.data.businessPhoto) {
      profilePhoto = "data:image/jpeg;charset=utf-8;base64," + this.props.data.businessPhoto;
    } else {
      profilePhoto = "../../images/ProfilePlaceholder.png";
    }
    return (
      <div className="row">

        <div className="col-md-2 col-sm-2">
          <img className="img-circle" src={profilePhoto} style={{width: "50px", height: "50px"}} />
        </div>

        <div className="col-md-10 col-sm-10">

          <div className="row">
            <div className="col-md-9 col-sm-9">
              {this.props.data.businessName}
            </div>
            <div className="col-md-3 col-sm-3">
              {this.props.data.distance} miles
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-sm-12">
              <ListItemReview stars={this.props.data.stars} id={this.props.data.id} reviewNumber={this.props.data.reviewNumber}/>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-sm-12">
              {this.props.data.address.address || this.props.data.address.address2} {this.props.data.address.city} {this.props.data.address.state} {this.props.data.address.zip}
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-sm-12">
              Phone: {this.props.data.phone}
            </div>
          </div>

          <hr/>

        </div>


      </div>
    );
  }

});

module.exports = SearchListItem;

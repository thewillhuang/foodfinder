"use strict";
var React = require("react");
var SearchFilter = require("./searchFilterList.jsx");
var SearchList = require("./searchList.jsx");

var mockData = require("../../data/mockdata.json");


React.render(<SearchFilter />, document.getElementById("reactFilter"));

React.render(<SearchList data={mockData}/>, document.getElementById("reactListView"));

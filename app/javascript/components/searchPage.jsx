"use strict";
var React = require("react");
var SearchFilter = require("./searchFilterList.jsx");
var SearchList = require("./searchList.jsx");

React.render(<SearchFilter />, document.getElementById("reactFilter"));

React.render(<SearchList/>, document.getElementById("reactListView"));


var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName("body")[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;
console.log(x + " × " + y);

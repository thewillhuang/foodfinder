"use strict";
var React = require("react");
var SearchFilter = require("./searchFilterList.jsx");
var SearchList = require("./searchList.jsx");

var data = [{
  businessName:"KushKings1",
  distance:"2",
  stars: 1,
  id: "lkffdjdasl;kfjoijffadslfakj",
  address:{
    address: "29501 Arboridge Ct.",
    city: "fullerton",
    state: "ca",
    zip: "92835"
  }
},{
  businessName:"KushKings2",
  distance:"3",
  stars: 1.5,
  id: "lkfjddfaasl;kfjoijffadslfakj",
  address:{
    address: "2950 Arboridge Ct.",
    city: "fullerton",
    state: "ca",
    zip: "92835"
  }
},{
  businessName:"KushKings3",
  distance:"5",
  stars: 2,
  id: "lkfafdjdasl;kfjoijffadslfakj",
  address:{
    address: "2950 Arboridge Ct.",
    city: "fullerton",
    state: "ca",
    zip: "92835"
  }
},{
  businessName:"KushKings4",
  distance:"3",
  stars: 4.5,
  id: "lkfjddsfasdafasl;kfjoijffadslfakj",
  address:{
    address: "2950 Arboridge Ct.",
    city: "fullerton",
    state: "ca",
    zip: "92835"
  }
},{
  businessName:"KushKings5",
  distance:"5",
  stars: 5,
  id: "lkfjdasl;kfjoijffadsfdalfakj",
  address:{
    address: "2950 Arboridge Ct.",
    city: "fullerton",
    state: "ca",
    zip: "92835"
  }
},{
  businessName:"KushKings6",
  distance:"1",
  stars: 0,
  id: "lkfjdasl;kfjoijffadslfakj",
  address:{
    address: "2950 Arboridge Ct.",
    city: "fullerton",
    state: "ca",
    zip: "92835"
  }
}
];


React.render(<SearchFilter />, document.getElementById("reactFilter"));

React.render(<SearchList data={data}/>, document.getElementById("reactListView"));

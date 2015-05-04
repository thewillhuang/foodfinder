"use strict";
var React = require("react");
var SearchFilter = require("./searchFilterList.jsx");
var SearchList = require("./searchList.jsx");

var data = [{
  businessName:"KushKings1",
  distance:"2",
  stars: 0,
  phone: "111-222-3333",
  reviewNumber: 1030,
  id: "lkffdjdasl;kfjoijffadslfakj",
  address:{
    address: "29501 Arboridge Ct.",
    city: "fullerton",
    state: "ca",
    zip: "92835"
  }
},
{
  businessName:"KushKings2",
  distance:"3",
  stars: 1,
  reviewNumber: 100,
  phone: "111-222-3333",
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
  stars: 1.5,
  phone: "111-222-3333",
  reviewNumber: 52,
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
  stars: 2,
  reviewNumber: 105,
  id: "lkfjddsfasdafasl;kfjoijffadslfakj",
  phone: "111-222-3333",
  address:{
    address: "2950 Arboridge Ct.",
    city: "fullerton",
    state: "ca",
    zip: "92835"
  }
},{
  businessName:"KushKings5",
  distance:"5",
  reviewNumber: 730,
  stars: 2.5,
  phone: "111-222-3333",
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
  reviewNumber: 420,
  phone: "111-222-3333",
  stars: 3,
  id: "lkfjdasl;kfjoijffadslfakj",
  address:{
    address: "2950 Arboridge Ct.",
    city: "fullerton",
    state: "ca",
    zip: "92835"
  }
},{
  businessName:"KushKings6",
  distance:"1",
  reviewNumber: 420,
  phone: "111-222-3333",
  stars: 3.5,
  id: "lkfjdasl;kfjoijffadslfakj",
  address:{
    address: "2950 Arboridge Ct.",
    city: "fullerton",
    state: "ca",
    zip: "92835"
  }
},{
  businessName:"KushKings6",
  distance:"1",
  reviewNumber: 420,
  phone: "111-222-3333",
  stars: 4,
  id: "lkfjdasl;kfjoijffadslfakj",
  address:{
    address: "2950 Arboridge Ct.",
    city: "fullerton",
    state: "ca",
    zip: "92835"
  }
},{
  businessName:"KushKings6",
  distance:"1",
  reviewNumber: 420,
  phone: "111-222-3333",
  stars: 4.5,
  id: "lkfjdasl;kfjoijffadslfakj",
  address:{
    address: "2950 Arboridge Ct.",
    city: "fullerton",
    state: "ca",
    zip: "92835"
  }
},{
  businessName:"KushKings6",
  distance:"1",
  reviewNumber: 420,
  phone: "111-222-3333",
  stars: 5,
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

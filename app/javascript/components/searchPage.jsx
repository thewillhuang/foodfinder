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

var bittersMap = (function() {
  var myLatlng = new google.maps.LatLng(59.342457, 18.057340),
    mapCenter = new google.maps.LatLng(59.340458, 18.057340),
    mapCanvas = document.getElementById('map_canvas'),
    mapOptions = {
      center: mapCenter,
      zoom: 13,
      scrollwheel: false,
      draggable: true,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    },
    map = new google.maps.Map(mapCanvas, mapOptions),
    contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<h1 id="firstHeading" class="firstHeading">thoughtbot</h1>' +
    '<div id="bodyContent"' +
    '<p>Sveavägen 98</p>' +
    '</div>' +
    '</div>',
    infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 300
    }),
    marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'thoughtbot (Sweden)'
    });

  return {
    init: function() {
      map.set('styles', [{
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [{
          hue: '#ffff00'
        }, {
          saturation: 30
        }, {
          lightness: 10
        }]
      }]);

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
      });
    }
  };
}());

bittersMap.init();

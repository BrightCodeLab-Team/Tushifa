(function ($) {
  "use strict";

  // SCROLL TO TOP

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 70) {
      $(".backtop").addClass("reveal");
    } else {
      $(".backtop").removeClass("reveal");
    }
  });

  var map;

  function initialize() {
    var mapOptions = {
      zoom: 13,
      center: new google.maps.LatLng(50.97797382271958, -114.107718560791),
      // styles: style_array_here
    };
    map = new google.maps.Map(
      document.getElementById("map-canvas"),
      mapOptions
    );
  }

  var google_map_canvas = $("#map-canvas");

  if (google_map_canvas.length) {
    google.maps.event.addDomListener(window, "load", initialize);
  }

  // Counter

  $(".counter-stat span").counterUp({
    delay: 10,
    time: 1000,
  });
})(jQuery);

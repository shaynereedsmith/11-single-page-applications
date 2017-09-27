'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // TODO:DID Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.displayAbout = function(){
    $('#articles').hide();
    $('#about').show();
  }
  module.aboutController = aboutController;
})(app);

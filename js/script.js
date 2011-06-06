/* Author: 

*/

$(document).ready( function(){
  
  // Set full screen class based on window state
  var isFullScreen = $(window).data('fullscreen-state');
  $('html').toggleClass('fullscreen', isFullScreen);
  
  // Subscribe to changes in window state
  $(window).bind('fullscreen-toggle', function(e, state) { $('html').toggleClass('fullscreen', state); });

});




















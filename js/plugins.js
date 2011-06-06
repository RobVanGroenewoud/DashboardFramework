
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
      arguments.callee = arguments.callee.caller;
      console.log( Array.prototype.slice.call(arguments) );
  }
};
// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();)b[a]=b[a]||c})(window.console=window.console||{});


// place any jQuery/helper plugins in here, instead of separate, slower script files.

// Full screen detection. Source: https://github.com/ruidlopes/jquery-fullscreen

(function($, window, documentElement, height, width) {
	
	var 
		isFullScreen = function() {
			return (documentElement.clientHeight == height && documentElement.clientWidth == width) ||
				window.fullScreen ||
				(window.outerHeight == height && window.outerWidth == width)
			;
		}
		,$window = $(window)
	;
	
	$window
		.data('fullscreen-state', isFullScreen())
		.resize(function() {
			var fullscreenState = isFullScreen();
			
			if ($window.data('fullscreen-state') && !fullscreenState) {
				$window
					.data('fullscreen-state', fullscreenState)
					.trigger('fullscreen-toggle', [false])
					.trigger('fullscreen-off')
				;
			}
			else if (!$window.data('fullscreen-state') && fullscreenState) {
				$window
					.data('fullscreen-state', fullscreenState)
					.trigger('fullscreen-toggle', [true])
					.trigger('fullscreen-on')
				;
			}
		})
	;

})(jQuery, this, document.documentElement, screen.height, screen.width);

// End Full screen detection.
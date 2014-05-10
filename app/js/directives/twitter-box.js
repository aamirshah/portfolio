
/*================================================================
=>                  Directive = twitterBox
==================================================================*/
/*global app, jQuery, document, window, $*/

app.directive('twitterBox', ['$timeout', function ($timeout) {
   
    'use strict';

    var isTouchDevice = function () {
		return !!('ontouchstart' in window);
	};

	return {
		restrict: 'A',
		link: function (scope, element, attrs) {
			// console.log('Directive === twitterBox');


			var $window = $(window);

			var loadTwitter = function (d, s, id) {
				var js,
					fjs = d.getElementsByTagName(s)[0];
				
				if (!d.getElementById(id)) {
					js = d.createElement(s);
					js.id = id;
					js.src = '//platform.twitter.com/widgets.js';
					fjs.parentNode.insertBefore(js, fjs);
				}
			};

			var removeTwitter = function (id) {
				jQuery('script[id=' + id + ']').remove(); // Remove the included js file
				jQuery('iframe.twitter-timeline').remove(); // Remove the timeline iframe
			};


			var addTwitter = function (options) {

				var linkStr = '<a class="twitter-timeline"';
				linkStr += (options.width) ? ' width="' + options.width + '"' : '';
				linkStr += (options.height) ? ' height="' + options.height + '"' : '';

				linkStr += ' href="https://twitter.com/tappetyclick" data-widget-id="373743374827659264">Tweets by @cse_aamir</a>';
				jQuery(linkStr).appendTo(options.element);
			};


			var showTwitter = function (id, options) {
				
				removeTwitter(id);
				addTwitter(options);
				loadTwitter(document, 'script', id);
			};



			var options = {
				width: 320,
				height: 500,
				element: element
			};


			var alignTwitterBox = function () {

				element.empty();

				if ($window.outerWidth() <= 480) { options.width = 260; }
				
				else if ($window.outerWidth() < 1024) { options.width = 520; }

				else if ($window.outerWidth() > 1024) { options.width = 320; }
				showTwitter('twitter', options);

				if (isTouchDevice()) {
					$window.off('resize', alignTwitterBox);
				}
			};
			
			$window.on('resize', alignTwitterBox);

			$timeout(function () {
				$window.trigger('resize');
			});
		}
	};
}]);


/*-----  End of Directive = twitterBox  ------*/
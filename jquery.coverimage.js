;(function ($, window, document, undefined) {

	$.fn.coverImage = function(parentString) {
		var imageSelector = this;

		var init = function() {

			imageSelector.each(function() {
				var $image = $(this),
						$parent;

				if (parentString)
					$parent = $image.closest(parentString);
				else
					$parent = $image.parent();
				
				var imageClone = new Image();
				imageClone.src = $image.attr("src");

				var imageW  = imageClone.width,
						imageH  = imageClone.height,
						imageR  = imageW / imageH,
						parentW = $parent.width(),
						parentH = $parent.height(),
						parentR = parentW / parentH;

				if ( imageR > parentR )
					$image.css({ width: 'auto', height: '100%' });
				else
					$image.css({ width: '100%', height: 'auto' });
			});
		};
		
		$(window).on('resize', function() {
			init();
		}).trigger('resize'); // run when page load
	};

})(jQuery, window, document);
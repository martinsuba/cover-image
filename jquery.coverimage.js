;(function ($, window, document, undefined) {

	$.fn.coverImage = function(parentString) {
		var _this = this;
		
		$(window).on('resize', function() {

			_this.each(function() {
				var $image = $(this),
						$parent;

				if (parentString)
					$parent = $image.closest(parentString);
				else
					$parent = $image.parent();
				
				var _image = new Image();
				_image.src = $image.attr("src");

				var imageW  = _image.width,
						imageH  = _image.height,
						imageR  = imageW / imageH,
						parentW = $parent.width(),
						parentH = $parent.height(),
						parentR = parentW / parentH;

				if ( imageR > parentR )
					$image.css({ width: 'auto', height: '100%' });
				else
					$image.css({ width: '100%', height: 'auto' });
			});
		}).trigger('resize');
	};

})(jQuery, window, document);
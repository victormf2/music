(function($) {
    var methods = {
        init: function(options) {
            var settings = $.extend({
                interval: 3000,
                step: 1,
                height: 'guess'
            }, options);
            return this.each(function() {
                var $ul = $(this);
                $ul.data('css-slider.settings', settings);
                $ul.addClass('css-slider');
                var height = settings.height;
                if (height === 'guess') {
                    height = $ul.find('li').outterHeight();
                }
                if (settings.interval) {
                    var interval = setInterval(function() {
                        $ul.cssSlider('slide', 'next');
                    }, settings.interval);
                    $ul.data('css-slider.interval', interval);
                }
            });
        },
        slide: function(direction) {
            return this.each(function() {
                var $ul = $(this);
                var step = $ul.data('css-slider.settings').step;
                var $lis = $ul.find('li');
                var length = $lis.length;
                if (step >= length) return;
                switch (direction) {
                    case 'next':
                        var $last = $lis.filter(':last');
                        var $firsts = $lis.slice(0, step);
                        $firsts.after($last);
                        break;
                    case 'prev':
                        var $first = $lis.filter(':last');
                        var $lasts = $lis.slice(length - step, length);
                        $lasts.before($first);
                        break;
                }
                
            });
        }
    };

    $.fn.cssSlider = function(method) {
        if (methods[method]) {
            return methods[ method ].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.cssSlider');
        }
    };
})(jQuery);
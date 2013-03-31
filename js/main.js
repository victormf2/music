$(window).load(function() {
    $('.overlay').on('click', function() {
        $(this).hide();
        $('.overlay-content').remove();
        $('.music-list-article ul').cssSlider('proceed');
    });
    $('.music-list-article ul').cssSlider({
        interval: 1000,
        duration: 1000
    });
    $('.music-list-article li > div').on('click', function() {
        $('.music-list-article ul').cssSlider('stop');
        overlay('<iframe width="640" height="390" src="http://www.youtube.com/embed/' + $(this).parent().attr('data-url') + '?feature=player_detailpage&wmode=Opaque" frameborder="0" allowfullscreen="1"></iframe>');
    });
});

function overlay(el) {
    var $el = $(el);
    var $overlay = $('.overlay').show();
    var $div = $('<div class="overlay-content"></div>')
    $div.append($el);
    $div.css({'margin-top': '-195px', 'margin-left': '-320px'});
    $overlay.after($div);
}
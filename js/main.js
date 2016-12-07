$(document).ready(function() {
    'use strict';

    var $win = $(window);
    $win.scroll(handleScroll);
    handleScroll();

    function handleScroll() {
        var $header = $('header');
        if ($win.scrollTop()) {
            $header.addClass('fixed');
        } else {
            $header.removeClass('fixed');
        }
    }
});
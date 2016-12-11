$(document).ready(function() {
    'use strict';

    // share links
    $('.img-wrapper').each(function() {
        var $this = $(this),
            $ul = $('<ul class="share-links">'
                    + '<li><a href="#" class="share-twitter-link animate" title="Share via twitter"></a></li>'
                    + '<li><a href="#" class="share-facebook-link animate" title="Share via facebook"></a></li>'
                    + '<li><a href="#" class="share-vk-link animate" title="Share via vk"></a></li>'
                  + '</ul>'),
            $box = $('<div class="box"></div>');
        $this.append($box, $ul);
        $this.find('img').appendTo($box);
    });

    // scale image
    $('.scale img').on('mousemove', function(e) {
        var $img = $(this),
            $box = $(this).parent(),
            offset = $img.data('offset');

        if (!offset) {
            $img.data('offset', {
                x: e.clientX,
                y: e.clientY,
                dX: 0,
                dY: 0
            });
            return;
        }

        var dW = ($img.width() - $box.width()) / 2,
            dH = ($img.height() - $box.outerHeight()) / 2,
            dX = offset.dX - (e.clientX - offset.x),
            dY = offset.dY - (e.clientY - offset.y);

        dX = dX > 0 ? 0 : dX < -dW ? -dW : dX;
        dY = dY > 0 ? 0 : dY < -dH ? -dH : dY;

        $img.css({
            left: dX + 'px',
            top: dY + 'px'
        });

        $img.data('offset', {
            x: e.clientX,
            y: e.clientY,
            dX: dX,
            dY: dY
        });
    }).on('mouseout', function(e) {
        var $img = $(this);
        $img.removeData('offset');
        $img.css({
            left: 0,
            top: 0
        });
    });

    var $win = $(window),
        prevScrollTop = 0;

    $win.scroll(handleScroll);
    handleScroll();

    function handleScroll() {
        var scrollTop = $win.scrollTop(),
            delta = scrollTop - prevScrollTop;

        prevScrollTop = scrollTop;

        // header animation
        var $header = $('header'),
            headerHeight = $header.outerHeight();

        if (scrollTop) {
            $header.addClass('fixed');
        } else {
            $header.removeClass('fixed');
        }

        // showbusiness section animation
        (function() {
            var $img = $('.showbiz-img-1'),
                $choise = $('.showbiz-choise'),
                $section = $('.showbusiness-section'),
                startPos1 = $img.offset().top - headerHeight,
                endPos1 = startPos1 + $img.outerHeight() / 2,
                startPos2 = $choise.offset().top - headerHeight + $choise.outerHeight() / 2;

            // animate background
            if (scrollTop >= startPos1 && delta > 0) {
                $section.addClass('animated-1');
            } else if (scrollTop <= endPos1 && delta < 0) {
                $section.removeClass('animated-1');
            }

            // animate left column
            if (scrollTop >= startPos2 && delta > 0) {
                $section.addClass('animated-2');
            } else if (scrollTop <= endPos1 && delta < 0) {
                $section.removeClass('animated-2');
            }
        })();


        // art section animation
        (function() {
            var $img = $('.art-img-2'),
                imgHeight = $img.outerHeight(),
                imgTop = $img.offset().top,
                $section = $('.art-section'),
                startPos1 = imgTop - headerHeight + imgHeight / 4,
                endPos1 = startPos1 + imgHeight / 2;

            // animate background
            if (scrollTop >= startPos1 && delta > 0) {
                $section.addClass('animated-1');
            } else if (scrollTop <= endPos1 && delta < 0) {
                $section.removeClass('animated-1');
            }

            // animate left column
            if (scrollTop >= endPos1 && delta > 0) {
                $section.addClass('animated-2');
            } else if (scrollTop <= endPos1 && delta < 0) {
                $section.removeClass('animated-2');
            }
        })();

        // fashion section animation
        (function() {
            var $img = $('.fashion-img-1'),
                imgHeight = $img.outerHeight(),
                imgTop = $img.offset().top,
                col2 = $('.fashion-col-2:first-child'),
                col2Top = col2.offset().top,
                col2Height = col2.outerHeight(),
                $section = $('.fashion-section'),
                startPos1 = col2Top - headerHeight + col2Height - $win.height() * 4 / 5,
                endPos1 = col2Top - headerHeight,
                startPos2 = imgTop - headerHeight,
                startPos3 = startPos2 + imgHeight / 4,
                endPos2 = startPos2 + imgHeight * 3 / 4;

            // icons animation
            if (scrollTop >= startPos1 && delta > 0) {
                $section.addClass('animated-1');
            } else if (scrollTop <= endPos1 && delta < 0) {
                $section.removeClass('animated-1');
            }

            // animate background
            if (scrollTop >= startPos2 && delta > 0) {
                $section.addClass('animated-2');
            } else if (scrollTop <= endPos2 && delta < 0) {
                $section.removeClass('animated-2');
            }

            // animate right column
            if (scrollTop >= startPos3 && delta > 0) {
                $section.addClass('animated-3');
            } else if (scrollTop <= endPos2 && delta < 0) {
                $section.removeClass('animated-3');
            }
        })();

        // society section animation
        (function() {
            var $img = $('.society-img-1'),
                imgHeight = $img.outerHeight(),
                imgTop = $img.offset().top,
                $section = $('.society-section'),
                startPos1 = imgTop - headerHeight - $win.height() * 2 / 3,
                endPos1 = imgTop - headerHeight - $win.height() / 2,
                endPos2 = imgTop - headerHeight - $win.height() / 3;

            // background animation
            if (scrollTop >= startPos1 && delta > 0) {
                $section.removeClass('animated-1');
            } else if (scrollTop <= endPos1 && delta < 0) {
                $section.addClass('animated-1');
            }

            // icons animation
            if (scrollTop >= endPos1 && delta > 0) {
                $section.removeClass('animated-2');
            } else if (scrollTop <= endPos2 && delta < 0) {
                $section.addClass('animated-2');
            }
        })();
    }
});
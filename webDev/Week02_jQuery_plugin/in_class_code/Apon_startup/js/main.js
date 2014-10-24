var init = function() {
    /* Your code starts here */
    console.log('see?');
    // Activate carousel
    $('.myCarousel').slick();
    // implementing parallax
    var lastScrollTop = 0;
    var imagePosition = -300;
    var speed = 1;
    $(window).on('scroll', function() {
        // console.log('user is scrolling');
        // see if scroll down or up?
        // get an amount of pixel scrolled
        var scrollPx = $(window).scrollTop();
        console.log('user has scrolled: ' + scrollPx);

        if (scrollPx > lastScrollTop) {
            console.log('scrolling down');
            imagePosition = imagePosition - speed;
            // $('#image-parallax').css('color', '#000');
        } else {
            console.log('scrolling up');
            imagePosition = imagePosition + speed;
        }
        $('#image-parallax').css({
            'background-position': '0px ' + imagePosition + 'px'
        });
        lastScrollTop = scrollPx;
    });
};

$(document).ready(init);
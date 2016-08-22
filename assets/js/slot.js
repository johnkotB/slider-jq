$(document).ready(function () {

    function preload () {

        var preloader = $('#preloader');

        preloader.delay(3000).fadeOut('slow');
    } preload();


    var slide = $('.small-img a'),
        smallImgBlock = $('.small-img'),
        bigImgBlock = $('.big-img'),
        contorls = $('.controls'),
        slideCount = slide.length,
        count = 0;

    function getWidth() {
        var slideHeight = slide.height(),
            slideWidth = slide.width() * slideCount;

        smallImgBlock.css({'width': slideWidth, 'height': slideHeight});
    }

    getWidth();

    bigImgBlock.click(function (e) {
        e.preventDefault();
    });

    slide.on({
        mouseenter: function () {
            $(this).addClass('opacity');
        },
        mouseleave: function () {
            $(this).removeClass('opacity');
        },
        click: function (e) {
            e.preventDefault();
            var imgBig = $('.big-img a img'),
                srcNew = $(this).attr('href');

            imgBig.fadeOut(function () {
                imgBig.attr('src', srcNew).fadeIn();
            });
        }
    });

    contorls.click(function (e) {
        e.preventDefault();

        if (($(this).attr('id') == 'rightControl')) {
            count += 1;
        }
        else {
            count -= 1;
        }
        smallImgBlock.animate({
            'left': slide.innerWidth() * (-count)
        });

        manageControls(count);

    });

    function manageControls(position) {
        if (position == 0) {
            $('#leftControl').hide();
        }
        else {
            $('#leftControl').show();
        }
        if (position == slideCount - 8) {
            $('#rightControl').hide();
        }
        else {
            $('#rightControl').show();
        }
    }

    manageControls(count);

});

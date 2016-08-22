$(document).ready(function () {

    var slide = $('.small-img a'),
        smallImgBlock = $('.small-img'),
        contorls = $('.controls'),
        slideCount = slide.length,
        count = 0;

    function getWidth() {
        var slideHeight = slide.height(),
            slideWidth = slide.width() * slideCount;

        smallImgBlock.css({'width': slideWidth, 'height': slideHeight});
    }

    getWidth();


    slide.on({
        mouseenter: function () {
            $(this).animate({'opacity': 1});
        },
        mouseleave: function () {
            $(this).animate({'opacity': .25});
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

'use strict';

function scrollTo() {
    $('.scrollLink').on('click', function(){
        let aid = $(this).attr('href');
        $('html, body').animate({scrollTop: $(aid).offset().top}, 2000);
    });
   
}

function learnMore() {
    $('#about-me').on('click', '#learn-more', function(){
        $(this).slideUp(1000).prop('disabled', true);
        $("<p id='bio' class='active'>My interests include technology, music production, fitness, and art. I have always enjoy figuring out how things work, and using that knowledge to create something new. Technology is such a big part of my life. I use software and the internet everyday, to make music, to make art, to help me stay fit, and for so many other things. I wanted to learn how the technology I use everyday works, so I learned to code. </p><button class ='button' id='learn-less'>Unlearn</button>")
        .hide().appendTo('#my-info').slideDown(1000);
    });
    $('#about-me').on('click', '#learn-less', function(){
        $('button').slideUp(function(){
            $('.active').slideUp(1000, function(){
                $('.active').removeClass('active');
                $('#learn-more').slideDown(1000).prop('disabled', false);
            });
        });
    });
}


let slideIndex;

function carousel() {
    $('.screen-shots').on('click', function(){
        let project = $(this).attr('class').split(" ")[0];
        slideIndex = $(`.${project}`).index($(this)) + 1;
        displayScreenShots(slideIndex += 1, project);
    });
}

function displayScreenShots(n, app) {
    let current = $(`.${app}`);
    if (n > current.length){
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = current.length;
    }
    for (let i = 0; i < current.length; i++) {
        current.removeClass('show');
    }
    $(`.${app}:eq(${slideIndex - 1})`).addClass('show');
}

function loaded() {
    scrollTo();
    learnMore();
    carousel();
}

$(loaded);
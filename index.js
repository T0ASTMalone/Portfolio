'use strict';

function learnMore() {
    $('#learn-more').on('click', function(){
        $(this).hide();
        $("<p>My interests include technology, music production, fitness, and art. I have always enjoy figuring out how things work, and using that knowledge to create something new. Technology is such a big part of my life. I use software and the internet everyday, to make music, to make art, to help me stay fit, and for so many other things. I wanted to learn how the technology I use everyday works, so I learned to code. </p>")
        .hide().appendTo('#my-info').slideDown('slow');
    });
}


function loaded() {
    learnMore();
}

$(loaded);
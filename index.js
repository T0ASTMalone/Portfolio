"use strict";

function scrollTo() {
  $(".scrollLink").on("click", function() {
    let aid = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(aid).offset().top }, 1500);
  });
}

function loaded() {
  scrollTo();
}

$(loaded);

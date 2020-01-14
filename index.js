"use strict";

function scrollTo() {
  const desktop = $("#scrollTo").attr("class");
  if (desktop === "hidden") {
    $(".scrollLink").on("click", function() {
      $("#mobile-scrollTo").addClass("hidden");
      let aid = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(aid).offset().top }, 1500);
    });
  } else {
    $(".scrollLink").on("click", function() {
      let aid = $(this).attr("href");
      $("html, body").animate({ scrollTop: $(aid).offset().top }, 1500);
    });
  }
}

const mobileScrollTo = () => {
  $("#menu-icon").on("click", () => {
    const status = $("#mobile-scrollTo").attr("class");
    if (status === "hidden") {
      $("#mobile-scrollTo").removeClass("hidden");
    } else {
      $("#mobile-scrollTo").addClass("hidden");
    }
  });
};

function loaded() {
  scrollTo();
  mobileScrollTo();
}

$(loaded);

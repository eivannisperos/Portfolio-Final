$(document).ready(function() {
  const MOBILE = window.matchMedia("(max-width: 720px)");
  console.log('Ready!');

  //**************variables****************//
  //expandable button divs
  var defaultBtnSize = '8vh';
  var mobileExpandedBtnSize = '5vh';
  var expandedBtnSize = '80vh';

  $("#logo-parent-container").click(function() {
    $(".work-btn").css('height', defaultBtnSize);
    $(".work-btn").children(".concealable").hide();
    $(".work-btn").children(".btn-logo").show();
  });

  $(".work-btn").click(function() {
    $(this).css('height', expandedBtnSize);
    $(this).children(".concealable").css("display", "flex");
    $(this).children(".btn-logo").hide();

    $(".work-btn").not(this).css('height', mobileExpandedBtnSize);
    $(".work-btn").not(this).children(".concealable").hide();
    $(".work-btn").not(this).children(".btn-logo").show();
  });

  $("#enable-hidden-nav").click(function() {
    $(".full-content-nav").css("background-color", "rgba(0, 0, 0, 0.8)")
    $(".hidden-links").css("display", "flex");
  });

  $(".full-content-container").click(function() {
    $(".full-content-nav").css("background-color", "rgba(0, 0, 0, 0.3)")
    $(".hidden-links").css("display", "none");
  });
});

//= require_tree .
//= require jquery
//= require bootstrap-sprockets

$(document).ready(function(){
  $('.menu-button').click(function(){
    $('.mobile-menu').addClass('mobile-menu-active');
  });
  $('.close-button').click(function(){
    $('.mobile-menu').removeClass('mobile-menu-active');
  });

});
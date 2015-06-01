$(function () {
  $('.panel-title').click(function (e) {
    var child = $('.panel-child');
    var active = $(e.target);
    if (child.hasClass('active-span')) {
      child.removeClass('active-span')
    }
    active.addClass('active-span');
  });
});
$(function () {
  var $elem = $(window.parent.document);
  var $iframe = $('iframe', window.parent.document);
  var $navi = $('#navi');
  var iframePosTop = $iframe.position().top;
  $elem.scroll(function(e){
    var dScroll = $($elem).scrollTop();
    var currentPos = dScroll - iframePosTop;
    if(currentPos>0)
      $navi.css('top', currentPos);
    else
      $navi.css('top', 0);
  });
});

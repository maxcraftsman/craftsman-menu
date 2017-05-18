$(document).ready(function(){
  function toDropdownDown( jQuery ) {
    $(".main>li").each(function(){
      if ($(this).position().top == 58){
        $(this).appendTo($('.dropdown ul'));
      }
    });
  }
  function toDropdownUp( jQuery ) {
    $(".main>li").each(function(){
      if ($(this).position().top == 58){
        $(this).prependTo($('.dropdown ul'));
      }
    });
  }
  function toDropdownPlus(Jquery) {
    var i = 0;
    var width = 0;
    var more = $(".more").offset().left;
    var menu = $(".main li:nth-last-child(-2n+2)").offset().left;
    var menuli = $(".main li:nth-last-child(-2n+2)").outerWidth();
    var dist = more - menu - menuli - 200;
    var dropdownli = $(".dropdown li:first-child").outerWidth();
    $(".dropdown li").each(function(){
      i++;
      width = $(this).outerWidth() + width;
      if (width <= dist){
        $(".dropdown li:nth-child("+i+")").detach().appendTo(".main");
      }
    })
    console.log(width);
    console.log(dist);
  }
  function fromDropdown() {
    $(".dropdown li").each();
  }
  resize = $('html').width();
  $(window).on("resize", function() {
    var action='';
    var ulWidth=$('html').width();
    if(ulWidth<resize) {
        action = '-';
        toDropdownUp();
    } else if (ulWidth>resize) {
        action = '+';
        toDropdownPlus();
    };
    resize=ulWidth;
    if(action=='-') {
      console.log("minus");
    } else if(action=='+') {
      console.log("plus")
    }

  }).resize();
  toDropdownDown();
  $('.droped').appendTo('.dropdown ul');
  function toMenu( jQuery ) {
    var i = 0;
    var totalWidth = 0;
    $(".main li:not(:last)").each(function(){
      totalWidth = totalWidth + $(this).width();
      i++;
    });
    console.log(totalWidth);
  };
  toMenu();
});

(function() {
    var css = document.createElement('link');
    css.href = '//cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css';
    css.rel = 'stylesheet';
    css.integrity = 'sha256-Fmtt3i5s327ljFUwU8gdqKx33yPt8EuyWJOOAxAcrXs=';
    css.property = 'stylesheet';
    css.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(css);
})();

$(document).ready(function(){
    $(window).scroll(function(){
      if($(this).scrollTop() > 100){
        $("#scroll-btn").fadeIn();
      }
      else{
        $("#scroll-btn").fadeOut();
      }
    });

    $("#scroll-btn").click(function(){
      $("html, body").animate({scrollTop: 0}, 700);
      return false;
    });
  });
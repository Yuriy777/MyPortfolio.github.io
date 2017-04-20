(function() {
  var body = document.body;
  var burgerMenu = document.getElementsByClassName('menu-opener')[0];

  burgerMenu.addEventListener('click', function toggleClasses() {
    [body].forEach(function (el) {
      el.classList.toggle('menu-open');
    });
  }, false);
})();

$(function() {
    var topButton = document.getElementsByClassName('go-top')[0];
        window.addEventListener('scroll',function() {
            var bdy = document.querySelector('body');
            var doc = document.documentElement;

              if(bdy.scrollTop > 500 || doc.scrollTop > 500) {
                topButton.classList.add('show');
              } else {
                topButton.classList.remove('show');
              }
          },false);

    function runScroll() {
      scrollTo(bdy, 0, 300);
    }

    $(".navigation a").click(function() {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      var body = document.body;
      jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
      }, 800);
      body.classList.remove('menu-open');
      return false;
    });
    $(".go-top").click(function() {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({
        scrollTop: destination
      }, 800);
      return false;
    });
    
  });
(function() {
  var body = document.body;
  var burgerMenu = document.getElementsByClassName('menu-opener')[0];

  burgerMenu.addEventListener('click', function toggleClasses() {
    [body].forEach(function (el) {
      el.classList.toggle('menu-open');
    });
  }, false);
})();
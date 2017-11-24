(function (window, document) {
      var menu = document.getElementById('menu'),
          WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange':'resize';
      
      function toggleHorizontal() {
          [].forEach.call(
              document.getElementById('menu').querySelectorAll('.custom-can-transform'),
              function(el){
                  el.classList.toggle('pure-menu-horizontal');
              }
          );
      };
      
      function toggleMenu() {
          // set timeout so that the panel has a chance to roll up
          // before the menu switches states
          if (menu.classList.contains('open')) {
              setTimeout(toggleHorizontal, 500);
          }
          else {
              toggleHorizontal();
          }
          menu.classList.toggle('open');
          document.getElementById('toggle').classList.toggle('x');
      };
      
      function closeMenu() {
          if (menu.classList.contains('open')) {
              toggleMenu();
          }
      }
      
      document.getElementById('toggle').addEventListener('click', function (e) {
          toggleMenu();
          e.preventDefault();
      });
      
      window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
      })(this, this.document);


//random color button//
$(document).ready(function() {
	$('.control').click(function() {
   		var randomColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    	$('.image').css('background-color', randomColor);
    });

    $('.two').click(function() {
   		var randomColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    	$('.hero').css('background-color', randomColor);
    });
});


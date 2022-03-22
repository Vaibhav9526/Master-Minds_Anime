var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

//DARK - LIGHT MODE FUNCTION FOR A GOOD LOOK!!
function changeMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

//=========NAVBAR=========

(function($) { 
  $(function() { 

    //  open and close nav 
    $('#navbar-toggle').click(function() {
      $('nav ul').slideToggle();
    });


    // Hamburger toggle
    $('#navbar-toggle').on('click', function() {
      this.classList.toggle('active');
    });


    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.navbar-dropdown').slideToggle("slow");

      // Close dropdown when select another dropdown
      $('.navbar-dropdown').not($(this).siblings()).hide("slow");
      e.stopPropagation();
    });


    // Click outside the dropdown will remove the dropdown class
    $('html').click(function() {
      $('.navbar-dropdown').hide();
    });
  }); 
})(jQuery); 



/*
Steps / article on my website:
https://henryegloff.com/how-to-code-a-simple-dark-mode-toggle/

*/

function toggle_light_mode() {
  var app = document.getElementsByTagName("BODY")[0];
  if (localStorage.lightMode == "dark") {
      localStorage.lightMode = "light";
      app.setAttribute("light-mode", "light");
  } else {
      localStorage.lightMode = "dark";
      app.setAttribute("light-mode", "dark");
  }
}

window.addEventListener(
  "storage",
  function () {
      if (localStorage.lightMode == "dark") {
          app.setAttribute("light-mode", "dark");
      } else {
          app.setAttribute("light-mode", "light");
      }
  },
  false
);


var app = document.getElementsByTagName("BODY")[0];
if (localStorage.lightMode == "dark") {
    app.setAttribute("light-mode", "dark");
}



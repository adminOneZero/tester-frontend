$(document).ready(function () {


/**************************************Global**************************************/
/********************************Scrolle********************************/


$(function() { $('.nav_links').on('click', function(){

$("html, body").animate({ scrollTop: $(this.hash).offset().top }, 1000);

    });


    $(function() { $('#go_top').on('click', function(){

    $("html, body").animate({ scrollTop: $('#top').offset().top }, 500);

        });



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("go_top").style.display = "block";
  } else {
      document.getElementById("go_top").style.display = "none";
  }
}



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


    });
  });
});

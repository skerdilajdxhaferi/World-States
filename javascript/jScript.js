





// funksioni ne JavaScript qe ben te mundur shfaqjen dhe heqjen e menuve
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }




  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function(){scrollFunction()};
    
  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("myBtn").style.display = "block";
      } else {
          document.getElementById("myBtn").style.display = "none";
      }
  }
  

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }





   // Remove focus outlines
  //  JQuery code

   $(".btn1").keypress(function() {

    this.hideFocus = false;
    this.style.outline = null;
  });
  
  $(".btn1").mousedown(function() {
    
    this.hideFocus = true;
    this.style.outline = 'none';
  });
  


  
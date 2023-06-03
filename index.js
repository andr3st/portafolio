//Boton
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      document.getElementById("myBtn").classList.add("show"); // Agrega la clase show
    } else {
      document.getElementById("myBtn").classList.remove("show"); // Quita la clase show
    }
  }
  

// Volver al inicio de la página cuando el usuario hace clic en el botón
function topFunction() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}

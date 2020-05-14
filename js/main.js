/*
document.addEventListener("DOMContentLoaded", function(event) { 
   const modal = document.querySelector('.modal');
   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
   const closeBtn = document.querySelector('.modal__close');
   const swithModal = () => {
    modal.classList.toggle('modal--visible'); 
   };

    modalBtn.forEach(element => {
        element.addEventListener('click', swithModal);

    });

    closeBtn.addEventListener('click', swithModal);

  });
  */
$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close');
    
    modalBtn.on('click', function(){
      modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function(){
      modal.toggleClass('modal--visible');
    });
// прокрутка страницы наверх
    $(function (){
      $("#back-top").hide();
  
      $(window).scroll(function (){
        if ($(this).scrollTop() > 700){
          $("#back-top").fadeIn();
        } else{
          $("#back-top").fadeOut();
        }
      });
  
      $("#back-top a").click(function (){
        $("body,html").animate({
          scrollTop:0
        }, 2000);
        return false;
      });
    });
});
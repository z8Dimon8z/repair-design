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

        //initialize swiper when document ready
      var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      var next = $('.swiper-button-next');
      var prev = $('.swiper-button-prev');
      var bullets = $('.swiper-pagination');

      next.css('left', prev.width() + 10 + bullets.width() + 10)
      bullets.css('left', prev.width() + 10)
});
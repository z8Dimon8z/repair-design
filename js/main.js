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

      new WOW().init();

      // валидация формы модального окна
      $('.modal__form').validate({
        errorClass: "invalid",
        rules: {
          // simple rule, converted to {required:true}
          userName: {
            required: true,
            minlength: 2
          },

          userPhone: "required",
          // compound rule
          userEmail: {
            required: true,
            email: true
          }
        },
          // правило сообщений
          messages: {
            userName: {
              required: "Имя обязательно",
              minlength: "Имя не короче двух символов"
            },
            userPhone: "Телефон обязателен",
            userEmail: {
              required: "Обязательно укажите E-mail",
              email: "Введите в формате: name@domain.com"
            }
          },

          submitHandler: function(form) {
             $.ajax({
               type: "POST",
               url: "send.php",
               data: $(form).serialize(),
               success: function (response) {
                 console.log('Ajax сработал. Ответ сервера:' + response);
                 alert('форма отправлена, мы свяжимся с вами в течении 15 минут');
                 $(form)[0].reset();
                 modal.removeClass('modal--visible');
               }
             });
           },
        
      });

      // маска для телефона
      $('[type=tel]').mask('+7(000) 000-00-00');

      // валидация формы control

      $('.control__form').validate({
        errorClass: "invalid",
        rules: {
          // simple rule, converted to {required:true}
          userName: {
            required: true,
            minlength: 2
          },

          userPhone: "required",
          // compound rule
          userEmail: {
            required: true,
            email: true
          }
        },
          // правило сообщений
          messages: {
            userName: {
              required: "Имя обязательно",
              minlength: "Имя не короче двух символов"
            },
            userPhone: "Телефон обязателен",
            userEmail: {
              required: "Обязательно укажите E-mail",
              email: "Введите в формате: name@domain.com"
            }
          }
        
      });

      // валидация формы footer

      $('.footer__form').validate({
        errorClass: "invalid",
        rules: {
          // simple rule, converted to {required:true}
          userName: {
            required: true,
            minlength: 2
          },

          userPhone: "required",
          // compound rule
          userEmail: {
            required: true,
            email: true
          }
        },
          // правило сообщений
          messages: {
            userName: {
              required: "Имя обязательно",
              minlength: "Имя не короче двух символов"
            },
            userPhone: "Телефон обязателен",
            userEmail: {
              required: "Обязательно укажите E-mail",
              email: "Введите в формате: name@domain.com"
            }
          },
        
      });
      
});
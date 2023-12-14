
  $(document).ready (function(){
    $("#click-1").click (function(){
        $("this").hide();

    });
  });


  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 5000, // Autoplay delay in milliseconds
    },
});









$(document).ready(function () {

    $('.drowDown').click(function(e){
        e.preventDefault();
        $(this).toggleClass("active");
        //新增或移除類別class
        $(this).parent().siblings().find('a').removeClass("active");
        //移除隔壁的active類別
        $(this).parent().find('.dropdownList').slideToggle();
        //往上找出母階中子階類別為dropdownList讓選單滑上或滑下
        $(this).parent().siblings().find('.dropdownList').slideUp();
        //讓其他選單滑上
    });

    //Top button
    $('.top-btn').click(function(){
        $('html,body').animate({
          scrollTop: 0
        },400);
    });


    lightbox.option({
        'resizeDuration': 300,
        'wrapAround': true,
        'positionFromTop': 300,
        'albumLabel': "第 %1 / %2 課程圖片",
    })

    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 1000,
        effect: 'slide',
        
        autoplay: {
         delay: 2500,
       },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        /* 
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },*/
      });
});
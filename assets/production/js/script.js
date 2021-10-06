$(function(){
    $('.submenu-hide[data-id]').each(function(){
       let items = $(this).find('.list .item'),
        id = $(this).attr('data-id'),
           itemMenu = $('#header__menu-popup .item-l-m[data-id="'+id+'"]'),
        svg = itemMenu.find('.img').html();
       $.each(items, function(i){
           $(this).find('.img').html(svg);
       });
    });

    $('#header__sm-menu-popup .submenu-hide').each(function(){
        let th = $(this),
            item = th.closest('.item-l-m'),
            svg = item.find('.item-l-m__a .img').html();
        th.find('.img').html(svg);
    });

    $('#header__menu-popup .item-l-m__a').hover(function(){
        if($(this).hasClass('active')) return;
        let th = $(this);
        let list = th.closest('.list-menu');
        list.find('a.active').removeClass('active');
        th.addClass('active');
        let id = th.closest('.item-l-m').attr('data-id');
        $('#header__menu-popup .submenu-hide.active').removeClass('active');
        $('#header__menu-popup .submenu-hide[data-id="'+id+'"]').addClass('active');
    }, function(){});

    $('[data-addClassActive]').click(function(e){
       e.preventDefault();
       let item = $(this).attr('data-addClassActive');
       $(item).toggleClass('active');
    });

    $('#header__sm-menu-popup .arr').click(function(e){
       e.preventDefault();
       let th = $(this),
            item = th.closest('.item-l-m');

       if(!item.find('.back-arr').length) item.prepend('<button class="back-arr"><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.46062 6.49999L7.00136 1.95924C7.27819 1.68241 7.27819 1.23445 7.00136 0.957621C6.72453 0.680793 6.27658 0.680793 5.99975 0.957621L0.958182 5.99919C0.820158 6.13721 0.750664 6.3189 0.750664 6.50001C0.750664 6.68111 0.820158 6.8628 0.958182 7.00082L5.99975 12.0424L5.99976 12.0424C6.27659 12.3192 6.72454 12.3192 7.00136 12.0424C7.27819 11.7655 7.27819 11.3176 7.00136 11.0408L2.46062 6.49999Z" fill="white" stroke="white" stroke-width="0.5"/></svg></button>');

       $(this).closest('.list-menu').find('.item-l-m').each(function(){
           $(this).find('.col-menu-services').removeClass('active');
           $($(this).find('.col-menu-services')[0]).addClass('active');
          if(!$(this).is(item)) {
              $(this).toggleClass('d-none').removeClass('active');
          }
       });
       $(this).closest('.item-l-m').removeClass('d-none').toggleClass('active');
    });

    $('#header__sm-menu-popup .submenu-hide .caption').click(function(e){
       e.preventDefault();
       $(this).closest('.col-menu').toggleClass('active');
    });

    $('.footer__section .caption').click(function(e){
       e.preventDefault();
       if($(window).width() < 450) {
            $(this).closest('.footer__section').toggleClass('active');
       }
    });

    $(document).click(function(e){
       let tg = $(e.target),
           headerMenuPopup = '#header__menu-popup',
           headerMenuPopupSm = '#header__sm-menu-popup';
       if($(headerMenuPopup).hasClass('active') &&
            !tg.is('.btn-header-menu[data-addClassActive]') &&
            !tg.closest(headerMenuPopup).is(headerMenuPopup)) {
           $(headerMenuPopup).removeClass('active');
       }

       if($(headerMenuPopupSm).hasClass('active') &&
            !tg.is('.btn-header-menu[data-addClassActive]') &&
            !tg.closest(headerMenuPopupSm).is(headerMenuPopupSm)) {
            $(headerMenuPopupSm).removeClass('active');
        }
    });

    $('.slider__reviews').slick({
        slidesToShow: 3,
        prevArrow: '<button class="slick-prev slick-arrow slick-arrow-yellow"><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L1 9" stroke="#000000" stroke-width="2" stroke-linecap="round"/></svg></button>',
        nextArrow: '<button class="slick-next slick-arrow slick-arrow-yellow"><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L1 9" stroke="#000000" stroke-width="2" stroke-linecap="round"/></svg></button>',
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }]
    });

    /* Popup */

    $('[data-event]').click(function(e){
       e.preventDefault();
        let id = $(this).attr('data-event');
        if($('#'+id).length) {
            $('body').addClass('no-scroll');
            $('#'+id).fadeIn('200');
        }
    });

    $('.popup .bg, .popup .close').click(function(e){
       e.preventDefault();
        $('body').removeClass('no-scroll');
       $(this).closest('.popup').fadeOut();
    });

    $('.select-2').select2({
        width: '100%',
        minimumResultsForSearch: 20
    });

});
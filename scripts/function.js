// Credit http://stackoverflow.com/questions/9979827/change-active-menu-item-on-page-scroll
$(document).ready(function () {
  
  $('.js-menu-activate').on('click', function(){
    $('.js-menu').toggleClass('open');
    $('.js-menu-main').slideToggle('.js-menu-main');
  });
  
  $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 800, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
  
  function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('nav-list nav-list-item').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('nav-list nav-list-item').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
});
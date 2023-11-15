const screenWidth = $(window).width();
$(document).ready(function(){
    let position = $(document).scrollTop();
    
    if(position > 400){
        $('#navbar').addClass('animate__fadeInDown');
        $('#navbar').removeClass('d-none')
    }else{
        $('#navbar').addClass('d-none')
    }
});

$(window).scroll(function(){
    let position = $(document).scrollTop();
    // console.log(position);
    if(position > 100 && position < 700){
        $('#about_animate_left').addClass('animate__animated animate__fadeInLeft')
        $('#about_animate_right').addClass('animate__animated animate__fadeInRight')
    }else if(position > 2300 && position < 3000) {
        $('#myresume_intership').addClass('animate__animated animate__fadeInUp')
        $('#myresume_education').addClass('animate__animated animate__fadeInUp animate__delay-1s')
        $('#myresume_skills').addClass('animate__animated animate__fadeInUp animate__delay-2s')
    }
});




$('a.nav-link').on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        if(hash === "#about"){
            $('html, body').scrollTop($('#about').offset().top);
        }
        if(hash === "#my-resume"){
            $('html, body').scrollTop($('#my-resume').offset().top);
        }
        if(hash === "#certification"){
            $('html, body').scrollTop($('#certification').offset().top);
        }
        if(hash === "#portfolio"){
            $('html, body').scrollTop($('#portfolio').offset().top);
        }
        if(hash === '#contact'){
            $('html, body').scrollTop($('#contact').offset().top);
        }
        
    }
});
$(window).scroll(function(){
    let position = $(document).scrollTop();
    if(position > 400){
        $('#navbar').removeClass('d-none')
        $('#navbar').addClass('animate__fadeInDown');
        $('#navbar').removeClass('animate__fadeOutUp');
    }else{
        $('#navbar').removeClass('animate__fadeInDown');
        $('#navbar').addClass('animate__fadeOutUp');
    }
});


$('.portfolio-card').hover(function(){
    $(this).find("div").addClass('animate__zoomIn');
},function () {
    $(this).find("div").removeClass('animate__zoomIn');
});




function categorise_according_to_selection(category){
    var items = document.querySelectorAll('.portfolio-item');

    items.forEach(function(item) {
      if (category === 'all' || item.classList.contains(category)) {
        item.classList.add('d-block');
        item.classList.remove('d-none');
      } else {
        item.classList.remove('d-block');
        item.classList.add('d-none');
      }
    });
}